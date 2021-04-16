<?php
$dots = file_get_contents( get_template_directory() . "/dist/images/background/small-background-dots.svg");
$images = new \NewWebMarcello\Frontend\Images;
?>
<section class="slider-block margin-bottom <?php block_field('className'); ?>" >
   <div id="tomasoCarousel" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
         <?php if(block_value('first-title')): ?>
            <li data-target="#tomasoCarousel" data-slide-to="0" class="active"></li>
         <?php endif; ?>
         <?php if(block_value('second-title')): ?>
            <li data-target="#tomasoCarousel" data-slide-to="1"></li>
         <?php endif; ?>
         <?php if(block_value('third-title')): ?>
            <li data-target="#tomasoCarousel" data-slide-to="2"></li>
         <?php endif; ?>
      </ol>
      <div class="carousel-inner slider-block-wrapper">
         <?php if(block_value('first-title')): ?>
            <div class="carousel-item h-100 slider-block-item active">
               <div class="row h-100">
                  <div class="col-md-6 h-100 slider-block-left">
                     <div class="background-dots"><?= $dots ?></div>
                     <div class="d-flex align-items-center h-100 slider-block-text-wrapper">
                        <div class="text-left slider-block-text">
                           <h1 class="slider-title"><?php block_field('first-title')?></h1>
                           <h5 class="slider-description mb-3"><?php block_field('first-description')?></h5>
                           <?php if(block_value('first-link')): ?>
                              <a href="<?php block_field('first-link') ?>"><div class="btn btn-lg btn-secondary">Go</div></a>
                           <?php endif; ?>
                        </div>
                     </div>
                  </div>
                  <div class="col-md-6 h-100 slider-block-right">
                     <div class="row h-100">
                        <div class="col-md-6"></div>
                        <div class="col-md-6 bg-secondary"></div>
                     </div>
                     <div class="background-dots"><?= $dots ?></div>
                     <?php $images->get_image_by_id(block_value('first-image') , 'large', 'slider-image'); ?>
                  </div>
               </div>
            </div>
         <?php endif; ?>
         <?php if(block_value('second-title')): ?>
            <div class="carousel-item h-100 slider-block-item">
               <div class="row h-100">
                  <div class="col-md-6 h-100 slider-block-right">
                     <div class="row h-100">
                        <div class="col-md-6"></div>
                        <div class="col-md-6 bg-secondary"></div>
                     </div>
                     <div class="background-dots"><?= $dots ?></div>
                     <?php $images->get_image_by_id(block_value('second-image') , 'large', 'slider-image'); ?>
                  </div>
                  <div class="col-md-6 h-100 slider-block-left">
                     <div class="background-dots"><?= $dots ?></div>
                     <div class="d-flex align-items-center h-100 slider-block-text-wrapper">
                        <div class="text-left slider-block-text">
                           <h1 class="slider-title"><?php block_field('second-title')?></h1>
                           <h5 class="slider-description mb-3"><?php block_field('second-description')?></h5>
                           <?php if(block_value('second-link')): ?>
                              <a href="<?php block_field('second-link') ?>"><div class="btn btn-lg btn-secondary">Go</div></a>
                           <?php endif; ?>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         <?php endif; ?>
         <?php if(block_value('third-title')): ?>
            <div class="carousel-item h-100 slider-block-item">
               <div class="row h-100">
                  <div class="col-md-6 h-100 slider-block-left">
                     <div class="background-dots"><?= $dots ?></div>
                     <div class="d-flex align-items-center h-100 slider-block-text-wrapper">
                        <div class="text-left slider-block-text">
                           <h1 class="slider-title"><?php block_field('third-title')?></h1>
                           <h5 class="slider-description mb-3"><?php block_field('third-description')?></h5>
                           <?php if(block_value('third-link')): ?>
                              <a href="<?php block_field('third-link') ?>"><div class="btn btn-lg btn-secondary">Go</div></a>
                           <?php endif; ?>
                        </div>
                     </div>
                  </div>
                  <div class="col-md-6 h-100 slider-block-right">
                     <div class="row h-100">
                        <div class="col-md-6"></div>
                        <div class="col-md-6 bg-secondary"></div>
                     </div>
                     <div class="background-dots"><?= $dots ?></div>
                     <?php $images->get_image_by_id(block_value('third-image') , 'large', 'slider-image'); ?>
                  </div>
               </div>
            </div>
         <?php endif; ?>
      </div>
   </div>
</section>