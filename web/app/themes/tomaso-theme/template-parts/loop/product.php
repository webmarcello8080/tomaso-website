<?php
$buttons = new \NewWebMarcello\Frontend\Buttons;
$_product = wc_get_product( get_the_ID() );
?>
<div class="col-md-4">
   <div class="card border-0 rounded-lg my-3 text-left single-product-block">
      <?php if(has_post_thumbnail()): ?>
         <div class="card-img-top pb-0 product-block-img-wrapper">
            <a href="<?php the_permalink() ?>" ><?php the_post_thumbnail( 'medium', ['class' => 'product-block-img'] ); ?></a>
         </div>
      <?php endif; ?>
      <div class="card-body product-body">
         <div class="product-header pb-0 d-flex justify-content-between">
            <a href="<?php the_permalink() ?>" ><h6 class="product-title"><?php the_title(); ?></h6></a>
            <h6 class="product-price text-secondary">£<?= $_product->get_price(); ?> Kg</h6>
         </div>
         <p class="card-text product-descrition"><small><?= get_the_excerpt() ?></small></p>
         <div class="product-button text-center mt-4">
            <?php $buttons->get_add_to_card( get_the_ID(), 'btn btn-sm btn-secondary', 'Add to Card' ) ?>
         </div>
      </div>
   </div>
</div>