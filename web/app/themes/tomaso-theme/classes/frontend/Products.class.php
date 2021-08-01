<?php
namespace NewWebMarcello\Frontend;

class Products{

   public function __construct(){
      // display price with custom unit field
      add_filter( 'woocommerce_get_price_html', array($this,'change_product_price_html'), 10, 2 );
      // display related product on product page
      add_action( 'woocommerce_after_single_product_summary', array($this, 'related_products'), 20);
      // remove tabs
      add_filter( 'woocommerce_product_tabs', '__return_empty_array', 98 );
      // addictional information
      add_action( 'woocommerce_single_product_summary', array($this, 'additional_info_under_add_to_cart'), 45 );
      // add addictional informatio
      add_filter( 'woocommerce_display_product_attributes', array($this, 'custom_product_additional_information'), 10, 2 );
      // move product description
      add_action( 'woocommerce_after_single_product_summary', array($this, 'long_description'), 10 );
   }

   public function change_product_price_html( $price_html, $product ) {
      $unit = $product->get_meta( 'custom_unit_field' );
      $price_html = '<span class="amount text-secondary font-weight-bold">' . get_woocommerce_currency_symbol() . '' . $product->get_price() . ' per ' . $unit . '</span>';
      
      return $price_html;
   }

   public function related_products(){
      global $product;
      $term_cat_id = array();

      $terms_post = get_the_terms( $product->get_id() , 'product_cat' );
      foreach ($terms_post as $term_cat) {
         $term_cat_id[] = $term_cat->slug; 
      }

      $related_products = new \WP_Query( 
         array( 
            'post_type'=> 'product',
            'tax_query' => array(
               array(
                     'taxonomy' => 'product_cat', 
                     'field'    => 'slug',
                     'terms'    => $term_cat_id
                  )
               ),
            'numberposts'  => 3, 
            'post__not_in' => array( $product->get_id() ) 
         ) 
      );

      if( $related_products->have_posts() ){
         ?>
            <section class="related-products my-5">
               <h2 class="text-center">Related products</h2>
               <div class="row my-5">
                  <?php while ( $related_products->have_posts() ) : ?>
                     <?php $related_products->the_post(); ?>
                     <?php get_template_part( 'template-parts/loop/product' ); ?>
                  <?php endwhile; ?>
                  <?php wp_reset_postdata(); ?>
               </div>
            </section>
         <?php
      }
   }

   public function additional_info_under_add_to_cart(){
      global $product;

      if ( $product && ( $product->has_attributes() || apply_filters( 'wc_product_enable_dimensions_display', $product->has_weight() || $product->has_dimensions() ) ) ) {
         wc_display_product_attributes( $product );
      }      
   }

   public function custom_product_additional_information( $product_attributes, $product){

      if($product->get_meta('price_per_kilo')){
         $product_attributes[ 'attribute_' . 'price_per_kilo' ] = array(
            'label' => __('Price Per Kilo'),
            'value' => get_woocommerce_currency_symbol() . '' . $product->get_meta('price_per_kilo'),
         );
      }

      return $product_attributes;
   }

  
   public function long_description() {
      ?>
         <div class="description">
            <h2>Description</h2>
            <div class="woocommerce-tabs">
               <?php the_content(); ?>
            </div>
         </div>
      <?php
   }
}
