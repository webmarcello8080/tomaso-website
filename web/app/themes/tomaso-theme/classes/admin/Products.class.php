<?php
namespace NewWebMarcello\Admin;

class Products{

   public function __construct(){
      add_action( 'init', array($this, 'remove_wc'), 0 );
      add_action( 'woocommerce_after_single_product_summary', array($this, 'related_products'), 20);

      add_filter( 'woocommerce_get_price_html', array($this,'change_product_html'), 10, 2 );
   }

   public function remove_wc() {
      remove_action( 'woocommerce_before_main_content', 'woocommerce_breadcrumb', 20, 0 );
      remove_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_title', 5, 0 );
      remove_action( 'woocommerce_sidebar', 'woocommerce_get_sidebar', 10, 0 );
      remove_action( 'woocommerce_after_single_product_summary', 'woocommerce_output_related_products', 20, 0 );
   }

   public function change_product_html( $price_html, $product ) {
      $price_html = '<span class="amount text-secondary font-weight-bold">' . get_woocommerce_currency_symbol() . '' . $product->get_price() . ' per Kilo</span>';
      
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
}