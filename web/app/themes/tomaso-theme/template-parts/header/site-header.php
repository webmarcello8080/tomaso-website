<?php
$header = new \NewWebMarcello\frontend\Header();
?>
<header class="site-header">
   <nav class="navbar navbar-expand-lg navbar-wrapper small-container">
      <a href="<?= esc_url(home_url('/'));  ?>" class="navbar-brand text-center logo-wrapper d-flex align-items-center" rel="home">
         <h3 class="mb-0 site-description"><?= get_bloginfo('description')  ?></h3>
      </a>
      <?php get_template_part('template-parts/menu/site-menu'); ?>
   </nav>
</header>
<div class="d-flex align-items-center justify-content-center site-logo-wrapper">
   <h1 class="site-logo text-center"><?= get_bloginfo('name') ?></h1>
   <img class="site-logo-img mr-3" src="<?= get_template_directory_uri() . '/dist/images/logos/smc-logo.jpg' ?>" alt="">
</div>