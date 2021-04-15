<?php

namespace NewWebMarcello\Admin;

class Menu {
	private $tomaso_azara_theme_options;

	public function __construct() {
		add_action( 'admin_menu', array( $this, 'tomaso_azara_theme_add_plugin_page' ) );
		add_action( 'admin_init', array( $this, 'tomaso_azara_theme_page_init' ) );
	}

	public function tomaso_azara_theme_add_plugin_page() {
		add_menu_page(
			'Tomaso Azara Theme', // page_title
			'Tomaso Azara Theme', // menu_title
			'manage_options', // capability
			'tomaso-azara-theme', // menu_slug
			array( $this, 'tomaso_azara_theme_create_admin_page' ), // function
			'dashicons-welcome-widgets-menus', // icon_url
			60 // position
		);
	}

	public function tomaso_azara_theme_create_admin_page() {
		$this->tomaso_azara_theme_options = get_option( 'tomaso_azara_theme_option_name' ); ?>

		<div class="wrap">
			<h2>Tomaso Azara Theme</h2>
			<p>Please set the following fields.</p>
			<?php settings_errors(); ?>

			<form method="post" action="options.php">
				<?php
					settings_fields( 'tomaso_azara_theme_option_group' );
					do_settings_sections( 'tomaso-azara-theme-admin' );
					submit_button();
				?>
			</form>
		</div>
	<?php }

	public function tomaso_azara_theme_page_init() {
		register_setting(
			'tomaso_azara_theme_option_group', // option_group
			'tomaso_azara_theme_option_name', // option_name
			array( $this, 'tomaso_azara_theme_sanitize' ) // sanitize_callback
		);

		add_settings_section(
			'tomaso_azara_theme_setting_section', // id
			'Theme Settings', // title
			array( $this, 'tomaso_azara_theme_section_info' ), // callback
			'tomaso-azara-theme-admin' // page
		);

   	add_settings_section(
			'tomaso_azara_blog_section', // id
			'Blog Section Settings', // title
			array( $this, 'tomaso_azara_theme_section_info' ), // callback
			'tomaso-azara-theme-admin' // page
		);

		add_settings_section(
			'tomaso_azara_404_section', // id
			'404 Page Settings', // title
			array( $this, 'tomaso_azara_theme_section_info' ), // callback
			'tomaso-azara-theme-admin' // page
		);
		
		add_settings_field(
			'standard_button_text_0', // id
			'Standard Button Text', // title
			array( $this, 'standard_button_text_0_callback' ), // callback
			'tomaso-azara-theme-admin', // page
			'tomaso_azara_theme_setting_section' // section
		);

		add_settings_field(
			'no_posts_text_1', // id
			'No Posts Text', // title
			array( $this, 'no_posts_text_1_callback' ), // callback
			'tomaso-azara-theme-admin', // page
			'tomaso_azara_theme_setting_section' // section
		);

		add_settings_field(
			'login_button_text_2', // id
			'Login Button Text', // title
			array( $this, 'login_button_text_2_callback' ), // callback
			'tomaso-azara-theme-admin', // page
			'tomaso_azara_theme_setting_section' // section
		);

		add_settings_field(
			'404_page_header_3', // id
			'404 Page Header Title', // title
			array( $this, 'page_404_header_3_callback' ), // callback
			'tomaso-azara-theme-admin', // page
			'tomaso_azara_404_section' // section
		);

  		add_settings_field(
			'404_page_title_3', // id
			'404 Page Title', // title
			array( $this, 'page_404_title_3_callback' ), // callback
			'tomaso-azara-theme-admin', // page
			'tomaso_azara_404_section' // section
		);

		add_settings_field(
			'404_page_content_5', // id
			'404 Page Content', // title
			array( $this, 'page_404_content_5_callback' ), // callback
			'tomaso-azara-theme-admin', // page
			'tomaso_azara_404_section' // section
		);

		add_settings_field(
			'read_more_7', // id
			'Read More Text', // title
			array( $this, 'read_more_7_callback' ), // callback
			'tomaso-azara-theme-admin', // page
			'tomaso_azara_blog_section' // section
		);

		add_settings_field(
			'excerpt_length', // id
			'The Excerpt Lenght', // title
			array( $this, 'excerpt_length_callback' ), // callback
			'tomaso-azara-theme-admin', // page
			'tomaso_azara_blog_section' // section
		);

	}

	public function tomaso_azara_theme_sanitize($input) {
		$sanitary_values = array();
		if ( isset( $input['standard_button_text_0'] ) ) {
			$sanitary_values['standard_button_text_0'] = sanitize_text_field( $input['standard_button_text_0'] );
		}

		if ( isset( $input['no_posts_text_1'] ) ) {
			$sanitary_values['no_posts_text_1'] = sanitize_text_field( $input['no_posts_text_1'] );
		}

		if ( isset( $input['login_button_text_2'] ) ) {
			$sanitary_values['login_button_text_2'] = sanitize_text_field( $input['login_button_text_2'] );
		}
		
		if ( isset( $input['404_page_header_3'] ) ) {
			$sanitary_values['404_page_header_3'] = sanitize_text_field( $input['404_page_header_3'] );
		}

		if ( isset( $input['404_page_title_3'] ) ) {
			$sanitary_values['404_page_title_3'] = sanitize_text_field( $input['404_page_title_3'] );
		}

		if ( isset( $input['404_page_content_5'] ) ) {
			$sanitary_values['404_page_content_5'] = esc_textarea( $input['404_page_content_5'] );
		}

		if ( isset( $input['read_more_7'] ) ) {
			$sanitary_values['read_more_7'] = sanitize_text_field( $input['read_more_7'] );
		}

		if ( isset( $input['excerpt_length'] ) ) {
			$sanitary_values['excerpt_length'] = sanitize_text_field( $input['excerpt_length'] );
		}

		return $sanitary_values;
	}

	public function tomaso_azara_theme_section_info() {
		
	}

	public function standard_button_text_0_callback() {
		printf(
			'<input class="regular-text" type="text" name="tomaso_azara_theme_option_name[standard_button_text_0]" id="standard_button_text_0" value="%s">',
			isset( $this->tomaso_azara_theme_options['standard_button_text_0'] ) ? esc_attr( $this->tomaso_azara_theme_options['standard_button_text_0']) : ''
		);
	}

	public function no_posts_text_1_callback() {
		printf(
			'<input class="regular-text" type="text" name="tomaso_azara_theme_option_name[no_posts_text_1]" id="no_posts_text_1" value="%s">',
			isset( $this->tomaso_azara_theme_options['no_posts_text_1'] ) ? esc_attr( $this->tomaso_azara_theme_options['no_posts_text_1']) : ''
		);
	}

	public function login_button_text_2_callback() {
		printf(
			'<input class="regular-text" type="text" name="tomaso_azara_theme_option_name[login_button_text_2]" id="login_button_text_2" value="%s">',
			isset( $this->tomaso_azara_theme_options['login_button_text_2'] ) ? esc_attr( $this->tomaso_azara_theme_options['login_button_text_2']) : ''
		);
	}

	public function page_404_title_3_callback() {
		printf(
			'<input class="regular-text" type="text" name="tomaso_azara_theme_option_name[404_page_title_3]" id="404_page_title_3" value="%s">',
			isset( $this->tomaso_azara_theme_options['404_page_title_3'] ) ? esc_attr( $this->tomaso_azara_theme_options['404_page_title_3']) : ''
		);
	}

	public function page_404_header_3_callback() {
		printf(
			'<input class="regular-text" type="text" name="tomaso_azara_theme_option_name[404_page_header_3]" id="404_page_header_3" value="%s">',
			isset( $this->tomaso_azara_theme_options['404_page_header_3'] ) ? esc_attr( $this->tomaso_azara_theme_options['404_page_header_3']) : ''
		);
	}

	public function page_404_content_5_callback() {
		printf(
			'<textarea class="large-text" rows="5" name="tomaso_azara_theme_option_name[404_page_content_5]" id="404_page_content_5">%s</textarea>',
			isset( $this->tomaso_azara_theme_options['404_page_content_5'] ) ? esc_attr( $this->tomaso_azara_theme_options['404_page_content_5']) : ''
		);
	}

	public function read_more_7_callback() {
		printf(
			'<input class="regular-text" type="text" name="tomaso_azara_theme_option_name[read_more_7]" id="read_more_7" value="%s">',
			isset( $this->tomaso_azara_theme_options['read_more_7'] ) ? esc_attr( $this->tomaso_azara_theme_options['read_more_7']) : ''
		);
	}

	public function excerpt_length_callback() {
		printf(
			'<input class="regular-text" type="number" name="tomaso_azara_theme_option_name[excerpt_length]" id="excerpt_length" value="%s">',
			isset( $this->tomaso_azara_theme_options['excerpt_length'] ) ? esc_attr( $this->tomaso_azara_theme_options['excerpt_length']) : ''
		);
	}
}

/* 
 * Retrieve this value with:
 * $tomaso_azara_theme_options = get_option( 'tomaso_azara_theme_option_name' ); // Array of All Options
 * $standard_button_text_0 = $tomaso_azara_theme_options['standard_button_text_0']; // Standard Button Text
 * $no_posts_text_1 = $tomaso_azara_theme_options['no_posts_text_1']; // No Posts Text
 * $login_button_text_2 = $tomaso_azara_theme_options['login_button_text_2']; // Login Button Text
 * $404_page_title_3 = $tomaso_azara_theme_options['404_page_title_3']; // 404 Page Title
 * $404_page_content_5 = $tomaso_azara_theme_options['404_page_content_5']; // 404 Page Content
 * $read_more_7 = $tomaso_azara_theme_options['read_more_7']; // Read More
 */
