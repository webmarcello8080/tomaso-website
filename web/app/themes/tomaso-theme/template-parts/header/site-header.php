<?php 
$header = new \NewWebMarcello\frontend\Header();
?>
<header class="site-header">
   <div class="container-xl">
      <div class="row">
         <div class="col-2 text-left align-self-center burger-menu">
            <div id="menu-toggle">
               <div id="hamburger">
                  <span></span>
                  <span></span>
                  <span></span>
               </div>
               <div id="cross">
                  <span></span>
                  <span></span>
               </div>
            </div>
         </div>

         <div class="col-8 text-center align-self-center logo-wrapper">
            <?php $header->get_logo('','img-fluid logo-img') ?>
         </div>

      </div>
   </div>
   <?php get_template_part( 'template-parts/menu/site-menu' ); ?>
</header>
