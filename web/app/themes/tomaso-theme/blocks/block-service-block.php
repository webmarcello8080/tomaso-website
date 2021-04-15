<?php
// get images
$plate = file_get_contents( get_template_directory() . "/dist/images/icons/plate.svg");
$table = file_get_contents( get_template_directory() . "/dist/images/icons/table.svg");
$vespa = file_get_contents( get_template_directory() . "/dist/images/icons/vespa.svg");
$dots = file_get_contents( get_template_directory() . "/dist/images/background/dots.svg");
?>
<section class="service-block margin-bottom <?php block_field('className'); ?>" >
   <div class="service-block-wrapper small-container">
      <div class="service-block-header row margin-bottom">
         <div class="service-block-title page-header col-md-4">
            <h3 class="page-header-title"><?php block_field('service-block-title'); ?></h3>
         </div>
         <p class="service-block-text col-md-8"><small><?php block_field('service-block-text'); ?></small></p>
      </div>
      <div class="service-block-body row align-items-center my-5">
         <div class="col-md-7 pr-5 service-block-body-left">
            <div class="row mb-4">
               <div class="col-6 bg-light service-block-small-wrapper">
                  <div class="d-flex justify-content-center align-items-center">
                     <a href="<?php block_field('customer-link'); ?>"><?= $table; ?></a>
                  </div>
               </div>
               <div class="col-6 service-block-small-wrapper">
                  <div class="d-flex justify-content-center align-items-center">
                     <div class="text-center">
                        <a href="<?php block_field('customer-link'); ?>">
                           <h6 class="service-block-small-title"><?php block_field('customer-title'); ?></h6>
                        </a>
                        <p class="service-block-small-text"><small><?php block_field('customer-text'); ?></small></p>
                     </div>
                  </div>
               </div>
            </div>
            <div class="row">
               <div class="col-6 service-block-small-wrapper">
                  <div class="d-flex justify-content-center align-items-center">
                     <div class="text-center">
                        <a href="<?php block_field('plate-link'); ?>">
                           <h6 class="service-block-small-title"><?php block_field('plate-title'); ?></h6>
                        </a>
                        <p class="service-block-small-text"><small><?php block_field('plate-text'); ?></small></p>
                     </div>
                  </div>
               </div>
               <div class="col-6 bg-light service-block-small-wrapper">
                  <div class="d-flex justify-content-center align-items-center">
                     <a href="<?php block_field('plate-link'); ?>"><?= $plate; ?></a>
                  </div>
               </div>
            </div>
         </div>
         <div class="col-md-5 bg-light service-block-big-wrapper">
            <div class="d-flex justify-content-center align-items-center">
               <div class="text-center">
                  <a href="<?php block_field('delivery-link'); ?>"><?= $vespa; ?></a>
                  <a href="<?php block_field('delivery-link'); ?>">
                     <h6 class="service-block-small-title"><?php block_field('delivery-title'); ?></h6>
                  </a>
                  <p class="service-block-small-text"><small><?php block_field('delivery-text'); ?></small></p>
               </div>
            </div>
         </div>
      </div>
   </div>
   <div class="dots-background"><?= $dots; ?></div>
</section>
