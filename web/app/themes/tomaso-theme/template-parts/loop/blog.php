<?php 
// get theme options
$tomaso_azara_theme_options = get_option( 'tomaso_azara_theme_option_name' );
$read_more_7 = $tomaso_azara_theme_options['read_more_7'];
?>
<div class="col-md-4">
   <div class="card border-0 rounded-lg my-3 text-left single-blog">
      <?php if(has_post_thumbnail()): ?>
         <div class="card-img-top px-3 pt-3 pb-0 blog-img-wrapper">
            <a href="<?php the_permalink() ?>" ><?php the_post_thumbnail( 'medium', ['class' => 'rounded'] ); ?></a>
         </div>
      <?php endif; ?>
      <div class="card-body pb-0 blog-header">
         <h6 class="card-title blog-title"><a href="<?php the_permalink() ?>" ><?php the_title(); ?></a></h6>
      </div>
      <div class="card-body pt-0 blog-body">
         <p class="card-text blog-text mt-3"><small><?= get_the_excerpt() ?></small></p>
         <div class="d-flex justify-content-between">
            <div class="blog-date"><?= get_the_date(); ?></div>
            <h6 class="blog-read-more"><a href="<?php the_permalink() ?>" ><?= esc_attr($read_more_7) ?></a></h6>
         </div>
      </div>
   </div>
</div>
