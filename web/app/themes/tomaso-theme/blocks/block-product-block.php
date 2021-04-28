<?php
$query_result = new WP_Query( array(
   'post_type' => 'product',
   'post_status' => 'publish',
   'posts_per_page' => block_value('number-of-product'),
   'orderby' => 'title', 
   'order' => 'ASC', 
));
$tomaso_azara_theme_options = get_option( 'tomaso_azara_theme_option_name' );
$no_posts_text_1 = $tomaso_azara_theme_options['no_posts_text_1'];
?>
<section class="product-block margin-bottom <?php block_field('className'); ?>" >
   <div class="product-block-wrapper small-container">
      <div class="product-block-header text-center mb-5">
         <a href="/shop"><h3 class="product-block-title"><?php block_field('block-title'); ?></h3></a>
         <p class="product-block-description"><small><?php block_field('block-description'); ?></small></p>
      </div>
      <div class="product-block-body row">
         <?php if ( $query_result->have_posts() ) : ?>
            <?php while ( $query_result->have_posts() ) : $query_result->the_post(); ?>
               <?php get_template_part( 'template-parts/loop/product' ); ?>
            <?php endwhile; ?>
            <?php wp_reset_postdata(); ?>
         <?php else : ?>
            <p><?= esc_attr($no_posts_text_1) ?></p>
         <?php endif; ?>
      </div>
   </div>
</section>