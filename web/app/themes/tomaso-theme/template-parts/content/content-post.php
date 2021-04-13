<?php
$categories = new \NewWebMarcello\frontend\Categories; 
?>
<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

	<?php if(has_post_thumbnail()) : ?>
			<div class="container-lg mb-5">
				<?php the_post_thumbnail('full', ['class' => 'post-img']); ?>
			</div>
	<?php endif; ?>

	<div class="entry-content">
		<div class="post-categories mb-5"><?php $categories->getCategoryList(get_the_ID(), 'badge badge-pill badge-primary', ' ') ?></div>
	   <h2 class="post-description text-center mb-2"><?= get_post_meta(get_the_ID(), 'H2_text', TRUE); ?></h2>
		<?php

		the_content();

		wp_link_pages(
			array(
				'before'   => '<nav class="page-links" aria-label="' . esc_attr__( 'Page', 'tomaso_azara' ) . '">',
				'after'    => '</nav>',
				/* translators: %: page number. */
				'pagelink' => esc_html__( 'Page %', 'tomaso_azara' ),
			)
		);
		?>
	</div><!-- .entry-content -->

</article><!-- #post-<?php the_ID(); ?> -->
