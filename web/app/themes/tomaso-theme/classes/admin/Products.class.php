<?php
namespace NewWebMarcello\Admin;

class Products{

   public function __construct(){
      // remove useless fields on product page
      add_action( 'init', array($this, 'remove_wc'), 0 );
      // display related product on product page
      add_action( 'woocommerce_after_single_product_summary', array($this, 'related_products'), 20);
      // create custom unit field
      add_action( 'woocommerce_product_options_general_product_data', array($this, 'create_unit_field') );
      // save custom unit field
      add_action( 'woocommerce_process_product_meta', array($this, 'save_unit_field') );
      // display price with custom unit field
      add_filter( 'woocommerce_get_price_html', array($this,'change_product_html'), 10, 2 );
      // minimum amount per order
      add_action( 'woocommerce_checkout_process', array($this,'minimum_order_amount') );
      add_action( 'woocommerce_before_cart' , array($this,'minimum_order_amount') );
   }

   public function remove_wc() {
      remove_action( 'woocommerce_before_main_content', 'woocommerce_breadcrumb', 20, 0 );
      remove_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_title', 5, 0 );
      remove_action( 'woocommerce_sidebar', 'woocommerce_get_sidebar', 10, 0 );
      remove_action( 'woocommerce_after_single_product_summary', 'woocommerce_output_related_products', 20, 0 );
   }

   public function change_product_html( $price_html, $product ) {
      $unit = $product->get_meta( 'custom_unit_field' );
      $price_html = '<span class="amount text-secondary font-weight-bold">' . get_woocommerce_currency_symbol() . '' . $product->get_price() . ' per ' . $unit . '</span>';
      
      return $price_html;
   }

   public function create_unit_field(){
      $args = array(
         'id' => 'custom_unit_field',
         'label' => __( 'Unita\' di misura', 'tomaso_azara' ),
         'class' => 'unit-field',
         'desc_tip' => true,
         'description' => __( 'This field will appear by the price on the product page.', 'tomaso_azara' ),
      );
      woocommerce_wp_text_input( $args );
   }

   public function save_unit_field( $post_id ){
      $product = wc_get_product( $post_id );
      $title = isset( $_POST['custom_unit_field'] ) ? $_POST['custom_unit_field'] : '';
      $product->update_meta_data( 'custom_unit_field', sanitize_text_field( $title ) );
      $product->save();
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

   public function minimum_order_amount(){
      // Set this variable to specify a minimum order value
      $minimum = 30;

      if ( WC()->cart->total < $minimum ) {
         if( is_cart() ) {
            wc_print_notice( 
               sprintf( 'Your current order total is %s — you must have an order with a minimum of %s to place your order ' , 
                  wc_price( WC()->cart->total ), 
                  wc_price( $minimum )
               ), 'error' 
            );
         } else {
            wc_add_notice( 
               sprintf( 'Your current order total is %s — you must have an order with a minimum of %s to place your order' , 
                  wc_price( WC()->cart->total ), 
                  wc_price( $minimum )
               ), 'error' 
            );
         }
      }
   }
}