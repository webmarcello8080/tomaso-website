<?php
$description = get_field('ingredient_list');
?>
<div class="col-md-6 single-dish-wrapper">
   <div class="d-flex align-items-center my-3 text-left single-dish">
      <?php if (has_post_thumbnail()) : ?>
         <div class="dish-img-wrapper">
            <?php the_post_thumbnail('medium', ['class' => 'rounded img-fluid']); ?>
         </div>
      <?php endif; ?>
      <div class="card-body dish-body">
         <h5 class="card-title dish-title"><?php the_title(); ?></h5>
         <?php if (get_field('price')) : ?>
            <h6 class="text-secondary dish-title"><?= get_field('price') ?></h6>
         <?php endif; ?>
         <?= $description ?>
         <?php if (get_field('description')) : ?>
            <p class="card-text dish-description"><small><?= get_field('description') ?></small></p>
         <?php endif; ?>
         <?php if (get_field('allergens_list')) : ?>
            <p class="card-text text-secondary dish-allergens"><small><b><?= get_field('allergens_list') ?></b></small></p>
         <?php endif; ?>
      </div>
   </div>
</div>