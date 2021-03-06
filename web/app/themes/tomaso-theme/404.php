<?php 
// get theme options
$tomaso_azara_theme_options = get_option( 'tomaso_azara_theme_option_name' );
$page_404_title_3 = $tomaso_azara_theme_options['404_page_title_3'];
$page_404_content_5 = $tomaso_azara_theme_options['404_page_content_5'];
get_header(); 
?>

	<?php get_template_part( 'template-parts/header/page-header' ); ?>

	<div class="error-404 not-found container-lg">
		<div class="entry-content text-center">
			<h1 class="title-404 mb-5"><?= esc_attr($page_404_title_3) ?></h1>
			<h5 class="mb-3"><?= esc_attr($page_404_content_5) ?></h5>
			<?php get_search_form(); ?>
			<h6 class="mt-3"><a href="<?= home_url(); ?>"><?php esc_html_e( 'Or back to Home', 'tomaso_azara' ); ?></a></h6>
		</div><!-- .page-content -->
	</div><!-- .error-404 -->

<?php get_footer();
