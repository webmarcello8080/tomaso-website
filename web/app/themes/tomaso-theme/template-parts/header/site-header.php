<?php
$header = new \NewWebMarcello\frontend\Header();
?>
<header class="site-header">
   <nav class="navbar navbar-expand-lg navbar-wrapper small-container">
      <a href="<?= esc_url(home_url('/'));  ?>" class="navbar-brand text-center logo-wrapper" rel="home">
         <h3 class="mb-0 site-description"><?= get_bloginfo('description')  ?></h3>
      </a>
      <?php get_template_part('template-parts/menu/site-menu'); ?>
   </nav>
</header>
<h1 class="site-logo text-center mt-2"><?= get_bloginfo('name') ?></h1>