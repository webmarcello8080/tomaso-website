<section class="quotation-block margin-bottom <?php block_field('className'); ?>" >
   <div class="quotation-block-wrapper">
      <blockquote class="wp-block-quote">
         <p><?php block_field('quotation-text'); ?></p>
         <div class="d-flex justify-content-between">
            <cite class="quotation-block-cite"><?php block_field('from-who'); ?></cite>
            <?php if(block_value('link-to')): ?>
            <a href="<?php block_field('link-to'); ?>" target="_blank" class="quotation-block-link">Read More</a>
            <?php endif; ?>
         </div>
      </blockquote>
   </div>
</section>