<?php
// archive page title
$header = new \NewWebMarcello\frontend\Header();
?>
<header class="category-header">
   <div class="container-xl py-5 category-header-wrapper">
      <h1 class="category-title"><?= $header->category_page_title() ?></h1>
      <?php the_archive_description('<div class="category-description lead">', '</div>') ?>
   </div>
</header>