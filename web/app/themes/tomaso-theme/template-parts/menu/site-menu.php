<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
   <span class="navbar-burger-line"></span>
   <span class="navbar-burger-line"></span>
   <span class="navbar-burger-line"></span>
</button>
<?php wp_nav_menu( 
         array( 
            'theme_location'  => 'header-menu',
            'container'       => 'div',
            'container_class' => 'collapse navbar-collapse',
            'container_id'    => 'navbarSupportedContent',
            'menu_class'      => 'navbar-nav ml-5',
            'menu_id'         => '',
            'fallback_cb'     => '\NewWebMarcello\frontend\WPBootstrapNavwalker::fallback',
            'walker'          => new \NewWebMarcello\frontend\WPBootstrapNavwalker(),
         ) 
      ); 
?>