<?php

add_filter( 'excerpt_length', function($length) {
      $tomaso_azara_theme_options = get_option( 'tomaso_azara_theme_option_name' );
      $excerpt_length = $tomaso_azara_theme_options['excerpt_length'];

      if($excerpt_length){
         return $excerpt_length;
      }
   }
);
