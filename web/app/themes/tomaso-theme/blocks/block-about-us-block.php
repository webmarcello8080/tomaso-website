<?php
$images = new \NewWebMarcello\Frontend\Images;
?>
<section class="aboutus-block row <?php block_field('className'); ?>" >
   <div class="row py-3
     align-items-center small-container aboutus-block-wrapper">
      <?php if(block_value('image-position') == 'right') : ?>
         <div class="col-md-7 pr-5 aboutus-block-text-wrapper">
            <p class="aboutus-block-text h5"><?php block_field('main-text') ?></p>
         </div>
         <div class="col-md-5 aboutus-block-image-wrapper">
            <?php $images->get_image_by_id(block_value('image') , 'large', 'aboutus-block-image img-fluid'); ?>
         </div>
      <?php else : ?>
         <div class="col-md-5 aboutus-block-image-wrapper">
            <?php $images->get_image_by_id(block_value('image') , 'large', 'aboutus-block-image img-fluid'); ?>
         </div>
         <div class="col-md-7 pl-5 aboutus-block-text-wrapper">
            <p class="aboutus-block-text h5"><?php block_field('main-text') ?></p>
         </div>
      <?php endif; ?>
   </div>
</section>