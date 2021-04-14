<div class="col-md-4">
   <div class="card border-0 rounded-lg my-3 text-left single-product">
      <?php if(has_post_thumbnail()): ?>
         <div class="card-img-top px-3 pt-3 pb-0 product-img">
            <a href="<?php the_permalink() ?>" ><?php the_post_thumbnail( 'medium', ['class' => 'img-fluid rounded'] ); ?></a>
         </div>
      <?php endif; ?>
      <div class="card-body product-header">
         <h6 class="card-title mb-2 product-title"><?php the_title(); ?></h6>
      </div>
      <div class="card-body pt-0 product-body">
         <p class="card-text product-text mt-3"><small><?= get_the_excerpt() ?></small></p>
      </div>
   </div>
</div>