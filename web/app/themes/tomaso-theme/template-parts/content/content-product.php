<?php
$categoty = new NewWebMarcello\Frontend\Categories;
?>
<article id="product-<?php the_ID(); ?>" <?php post_class(); ?>>
	
	<div class="entry-content mb-5">
		<div class="row product-wrapper">
			<?php if(has_post_thumbnail()) : ?>
				<div class="col-md-5 mb-5 product-img-wrapper">
					<?php the_post_thumbnail('full', ['class' => 'product-img img-fluid']); ?>
				</div>
			<?php endif; ?>
			<div class="col-md-7 pl-5 product-body">
				<div class="row text-right">
					<table class="table font-weight-bold text-primary product-table">
						<tbody>
							<tr class="text-secondary">
								<td>Price per Kg:</td>
								<td>£<?= get_post_meta( get_the_ID(), 'product_option_price', true ); ?></td>
							</tr>
							<tr>
								<td>VAT:</td>
								<td><?= get_post_meta( get_the_ID(), 'product_option_vat', true ); ?>%</td>
							</tr>
							<tr>
								<td>This product is from:</td>
								<td><?= $categoty->getCategoryList(get_the_ID(), '', ' ', 'location'); ?></td>
							</tr>
							<tr>
								<td>Product type:</td>
								<td><?= $categoty->getCategoryLink(get_the_ID(), 'product-table-category', ' ', 'product_type'); ?></td>
							</tr>
						</tbody>
					</table>
				</div>
				<div class="product-description mt-3">
					<?php the_content(); ?>
				</div>
			</div>
		</div>
		<?php
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

</article><!-- #product-<?php the_ID(); ?> -->
