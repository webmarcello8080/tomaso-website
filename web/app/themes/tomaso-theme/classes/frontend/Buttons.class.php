<?php

namespace NewWebMarcello\Frontend;

class Buttons{

   public function get_login( $text, $target = '_self', $classes = '' ){
      ?>
      <a class="<?= $classes ?>" 
         href="<?= esc_url( wp_login_url( get_permalink() ) ); ?>" 
         alt="<?php esc_attr_e( $text, 'tomaso_azara' ); ?>"
         target="<?= $target ?>">
         <?php _e( $text, 'tomaso_azara' ); ?>
      </a>
      <?php
   }

   public function get_add_to_card( $product_id, $classes = '', $text = 'Add to Card' ){
      $product = wc_get_product( $product_id );
      // get the "Checkout Page" URL
      $cart_url = WC()->cart->get_cart_url();
   
      // run only on simple products
      if( $product->is_type( 'simple' ) ){
         echo '<a href="' . $cart_url . '?add-to-cart=' . $product_id . '" class="' . $classes . '">' . $text . '</a>';
      }
   }
}