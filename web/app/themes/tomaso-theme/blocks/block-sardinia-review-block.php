<section class="sardinia-review-block margin-bottom <?php block_field('className'); ?>" >
   <div class="sardinia-review-block-header text-center">
      <a href="<?php block_field('link'); ?>"><h3 class="sardinia-review-block-title"><?php block_field('title'); ?></h3></a>
   </div>
   <div id="sardiniaReviewCarousel" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
         <?php if(block_value('review-1')): ?>
            <li data-target="#sardiniaReviewCarousel" data-slide-to="0" class="active"></li>
         <?php endif; ?>
         <?php if(block_value('review-2')): ?>
            <li data-target="#sardiniaReviewCarousel" data-slide-to="1"></li>
         <?php endif; ?>
         <?php if(block_value('review-3')): ?>
            <li data-target="#sardiniaReviewCarousel" data-slide-to="2"></li>
         <?php endif; ?>
         <?php if(block_value('review-4')): ?>
            <li data-target="#sardiniaReviewCarousel" data-slide-to="3"></li>
         <?php endif; ?>
      </ol>
      <div class="carousel-inner sardinia-review-block-wrapper">
         <?php if(block_value('review-1')): ?>
            <div class="carousel-item sardinia-review-block-item active">
               <blockquote class="wp-block-quote">
                  <p><?php block_field('review-1'); ?></p>
               </blockquote>
            </div>
         <?php endif; ?>
         <?php if(block_value('review-2')): ?>
            <div class="carousel-item sardinia-review-block-item">
               <blockquote class="wp-block-quote">
                  <p><?php block_field('review-2'); ?></p>
               </blockquote>
            </div>
         <?php endif; ?>
         <?php if(block_value('review-3')): ?>
            <div class="carousel-item sardinia-review-block-item">
               <blockquote class="wp-block-quote">
                  <p><?php block_field('review-3'); ?></p>
               </blockquote>
            </div>
         <?php endif; ?>
         <?php if(block_value('review-4')): ?>
            <div class="carousel-item sardinia-review-block-item">
               <blockquote class="wp-block-quote">
                  <p><?php block_field('review-4'); ?></p>
               </blockquote>
            </div>
         <?php endif; ?>
      </div>
      <a class="carousel-control carousel-control-prev" href="#sardiniaReviewCarousel" role="button" data-slide="prev">
         <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      </a>
      <a class="carousel-control carousel-control-next" href="#sardiniaReviewCarousel" role="button" data-slide="next">
         <span class="carousel-control-next-icon" aria-hidden="true"></span>
      </a>
   </div>
</section>