<?php
// get images
$pin = file_get_contents(get_template_directory() . "/dist/images/icons/map-pin.svg");
$dots = file_get_contents(get_template_directory() . "/dist/images/background/small-background-dots.svg");
?>
<section class="where-block bg-light row justify-content-center <?php block_field('className'); ?>">
   <div class="where-block-wrapper smaller-container">
      <div class="where-block-header d-flex justify-content-center">
         <div class="where-block-title text-center col-md-3">
            <h3><?php block_field('title'); ?></h3>
         </div>
      </div>
      <?php if (block_value('subtext')) : ?>
         <p class="where-block-text text-center mb-5"><small><?php block_field('subtext'); ?></small></p>
      <?php endif; ?>
      <div class="where-block-body text-center">
         <?php if (block_value('address-1')) : ?>
            <h6><a href="https://www.google.com.sa/maps/search/<?php block_field('address-1'); ?>" target="_blanck"><?= $pin ?><?php block_field('address-1'); ?></a> - <?= block_field('date-1') ?></h6>
         <?php endif; ?>
         <?php if (block_value('address-2')) : ?>
            <h6><a href="https://www.google.com.sa/maps/search/<?php block_field('address-2'); ?>" target="_blanck"><?= $pin ?><?php block_field('address-2'); ?></a> - <?= block_field('date-2') ?></h6>
         <?php endif; ?>
         <?php if (block_value('address-3')) : ?>
            <h6><a href="https://www.google.com.sa/maps/search/<?php block_field('address-3'); ?>" target="_blanck"><?= $pin ?><?php block_field('address-3'); ?></a> - <?= block_field('date-3') ?></h6>
         <?php endif; ?>
         <?php if (block_value('address-4')) : ?>
            <h6><a href="https://www.google.com.sa/maps/search/<?php block_field('address-4'); ?>" target="_blanck"><?= $pin ?><?php block_field('address-4'); ?></a> - <?= block_field('date-4') ?></h6>
         <?php endif; ?>
      </div>
   </div>
   <div class="background-dots"><?= $dots ?></div>
   <div class="background-dots-2"><?= $dots ?></div>
</section>