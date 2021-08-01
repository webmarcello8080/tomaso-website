<?php
namespace NewWebMarcello\Admin;

class Products{

   public function __construct(){
      // remove useless fields on product page
      add_action( 'init', array($this, 'remove_wc'), 0 );
      // create custom unit field
      add_action( 'woocommerce_product_options_general_product_data', array($this, 'create_unit_field') );
      // save custom unit field
      add_action( 'woocommerce_process_product_meta', array($this, 'save_unit_field') );
      // minimum amount per order
      add_action( 'woocommerce_checkout_process', array($this, 'minimum_order_amount') );
      add_action( 'woocommerce_before_cart' , array($this, 'minimum_order_amount') );
   }

   public function remove_wc() {
      remove_action( 'woocommerce_before_main_content', 'woocommerce_breadcrumb', 20, 0 );
      remove_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_title', 5, 0 );
      remove_action( 'woocommerce_sidebar', 'woocommerce_get_sidebar', 10, 0 );
      remove_action( 'woocommerce_after_single_product_summary', 'woocommerce_output_related_products', 20, 0 );
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
      $args = array(
         'id' => 'price_per_kilo',
         'label' => __( 'Price per Kilo', 'tomaso_azara' ),
         'class' => 'unit-field',
         'desc_tip' => true,
         'description' => __( 'This field will appear on the product description.', 'tomaso_azara' ),
      );
      woocommerce_wp_text_input( $args );
   }

   public function save_unit_field( $post_id ){
      $product = wc_get_product( $post_id );
      $unit_field = isset( $_POST['custom_unit_field'] ) ? $_POST['custom_unit_field'] : '';
      $price_kilo = isset( $_POST['price_per_kilo'] ) ? $_POST['price_per_kilo'] : '';
      $product->update_meta_data( 'custom_unit_field', sanitize_text_field( $unit_field ) );
      $product->update_meta_data( 'price_per_kilo', sanitize_text_field( $price_kilo ) );
      $product->save();
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