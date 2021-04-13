<?php 
$header = new \NewWebMarcello\frontend\Header();
?>
<header class="site-header small-container">
   <nav class="navbar navbar-expand-lg navbar-wrapper no-padding">
      <?php $header->get_logo('navbar-brand logo-wrapper','img-fluid logo-img') ?>

      <?php get_template_part( 'template-parts/menu/site-menu' ); ?>
   </nav>
</header>