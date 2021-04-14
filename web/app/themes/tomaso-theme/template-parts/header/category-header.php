<?php
// archive page title
$header = new \NewWebMarcello\frontend\Header();
?>
<div class="page-header-wrapper small-container">
   <header class="page-header mb-5">
      <div class="py-5 page-header-wrapper">
         <h1 class="page-header-title"><?= $header->category_page_title() ?></h1>
         <?php the_archive_description('<h4 class="page-header-description lead">', '</h4>') ?>
      </div>
   </header>
   <div class="category-description row">
      
   </div>
</div>