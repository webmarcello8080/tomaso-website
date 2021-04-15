<?php
namespace NewWebMarcello\Admin;

class Products{
   /*
   * Retrieving the values:
   * Price = get_post_meta( get_the_ID(), 'product_option_price', true )
   * VAT = get_post_meta( get_the_ID(), 'product_option_vat', true )
   */
	private $config = '{"title":"Product Option","prefix":"product_option_","domain":"product-option","class_name":"Product_Option","post-type":["post"],"context":"normal","priority":"default","cpt":"product","fields":[{"type":"text","label":"Price","id":"product_option_price"},{"type":"text","label":"VAT","id":"product_option_vat"}]}';

   public function __construct(){
      add_action( 'init', array($this, 'custom_post_type'), 0 );
      add_action( 'init', array($this, 'custom_location'), 0 );
      add_action( 'init', array($this, 'custom_taxonomy'), 0 );
      
		$this->config = json_decode( $this->config, true );
		$this->process_cpts();
		add_action( 'add_meta_boxes', [ $this, 'add_meta_boxes' ] );
		add_action( 'save_post', [ $this, 'save_post' ] );
   }

   // Register Custom Post Type
   public function custom_post_type() {

      $labels = array(
         'name'                  => _x( 'Products', 'Post Type General Name', 'tomaso_azara' ),
         'singular_name'         => _x( 'Product', 'Post Type Singular Name', 'tomaso_azara' ),
         'menu_name'             => __( 'Products', 'tomaso_azara' ),
         'name_admin_bar'        => __( 'Product', 'tomaso_azara' ),
         'archives'              => __( 'Product Archives', 'tomaso_azara' ),
         'attributes'            => __( 'Product Attributes', 'tomaso_azara' ),
         'parent_item_colon'     => __( 'Parent Product:', 'tomaso_azara' ),
         'all_items'             => __( 'All Products', 'tomaso_azara' ),
         'add_new_item'          => __( 'Add New Product', 'tomaso_azara' ),
         'add_new'               => __( 'Add New', 'tomaso_azara' ),
         'new_item'              => __( 'New Product', 'tomaso_azara' ),
         'edit_item'             => __( 'Edit Product', 'tomaso_azara' ),
         'update_item'           => __( 'Update Product', 'tomaso_azara' ),
         'view_item'             => __( 'View Product', 'tomaso_azara' ),
         'view_items'            => __( 'View Product', 'tomaso_azara' ),
         'search_items'          => __( 'Search Product', 'tomaso_azara' ),
         'not_found'             => __( 'Not found', 'tomaso_azara' ),
         'not_found_in_trash'    => __( 'Not found in Trash', 'tomaso_azara' ),
         'featured_image'        => __( 'Featured Image', 'tomaso_azara' ),
         'set_featured_image'    => __( 'Set featured image', 'tomaso_azara' ),
         'remove_featured_image' => __( 'Remove featured image', 'tomaso_azara' ),
         'use_featured_image'    => __( 'Use as featured image', 'tomaso_azara' ),
         'insert_into_item'      => __( 'Insert into Product', 'tomaso_azara' ),
         'uploaded_to_this_item' => __( 'Uploaded to this Product', 'tomaso_azara' ),
         'items_list'            => __( 'Product list', 'tomaso_azara' ),
         'items_list_navigation' => __( 'Product list navigation', 'tomaso_azara' ),
         'filter_items_list'     => __( 'Filter Product list', 'tomaso_azara' ),
      );
      $args = array(
         'label'                 => __( 'Product', 'tomaso_azara' ),
         'description'           => __( 'The Product we are selling', 'tomaso_azara' ),
         'labels'                => $labels,
         'supports'              => array( 'title', 'editor', 'thumbnail', 'page-attributes' ),
         'hierarchical'          => false,
         'public'                => true,
         'show_ui'               => true,
         'show_in_menu'          => true,
         'menu_position'         => 5,
         'show_in_admin_bar'     => true,
         'menu_icon'             => 'dashicons-cart',
         'show_in_nav_menus'     => true,
         'can_export'            => true,
         'has_archive'           => true,
         'exclude_from_search'   => false,
         'publicly_queryable'    => true,
         'capability_type'       => 'page',
      );
      register_post_type( 'product', $args );
   }

   // Register Custom Taxonomy
   public function custom_taxonomy() {

      $labels = array(
         'name'                       => _x( 'Product Types', 'Taxonomy General Name', 'tomaso_azara' ),
         'singular_name'              => _x( 'Product Type', 'Taxonomy Singular Name', 'tomaso_azara' ),
         'menu_name'                  => __( 'Product Type', 'tomaso_azara' ),
         'all_items'                  => __( 'All Product Types', 'tomaso_azara' ),
         'parent_item'                => __( 'Parent Product Type', 'tomaso_azara' ),
         'parent_item_colon'          => __( 'Parent Product Type:', 'tomaso_azara' ),
         'new_item_name'              => __( 'New Product Type Name', 'tomaso_azara' ),
         'add_new_item'               => __( 'Add New Product Type', 'tomaso_azara' ),
         'edit_item'                  => __( 'Edit Product Type', 'tomaso_azara' ),
         'update_item'                => __( 'Update Product Type', 'tomaso_azara' ),
         'view_item'                  => __( 'View Product Type', 'tomaso_azara' ),
         'separate_items_with_commas' => __( 'Separate Product Types with commas', 'tomaso_azara' ),
         'add_or_remove_items'        => __( 'Add or remove Product Types', 'tomaso_azara' ),
         'choose_from_most_used'      => __( 'Choose from the most used', 'tomaso_azara' ),
         'popular_items'              => __( 'Popular Product Types', 'tomaso_azara' ),
         'search_items'               => __( 'Search Product Type', 'tomaso_azara' ),
         'not_found'                  => __( 'Not Found', 'tomaso_azara' ),
         'no_terms'                   => __( 'No Product Types', 'tomaso_azara' ),
         'items_list'                 => __( 'Product Types list', 'tomaso_azara' ),
         'items_list_navigation'      => __( 'Product Types list navigation', 'tomaso_azara' ),
      );
      $args = array(
         'labels'                     => $labels,
         'hierarchical'               => false,
         'public'                     => true,
         'show_ui'                    => true,
         'show_admin_column'          => true,
         'show_in_nav_menus'          => true,
         'show_tagcloud'              => true,
      );
      register_taxonomy( 'product_type', array( 'product' ), $args );
   }

   // Register Custom Taxonomy
   public function custom_location() {

      $labels = array(
         'name'                       => _x( 'Locations', 'Taxonomy General Name', 'tomaso_azara' ),
         'singular_name'              => _x( 'Location', 'Taxonomy Singular Name', 'tomaso_azara' ),
         'menu_name'                  => __( 'Location', 'tomaso_azara' ),
         'all_items'                  => __( 'All Product Locations', 'tomaso_azara' ),
         'parent_item'                => __( 'Parent Location', 'tomaso_azara' ),
         'parent_item_colon'          => __( 'Parent Location:', 'tomaso_azara' ),
         'new_item_name'              => __( 'New Location Name', 'tomaso_azara' ),
         'add_new_item'               => __( 'Add New Location', 'tomaso_azara' ),
         'edit_item'                  => __( 'Edit Location', 'tomaso_azara' ),
         'update_item'                => __( 'Update Location', 'tomaso_azara' ),
         'view_item'                  => __( 'View Location', 'tomaso_azara' ),
         'separate_items_with_commas' => __( 'Separate Locations with commas', 'tomaso_azara' ),
         'add_or_remove_items'        => __( 'Add or remove Locations', 'tomaso_azara' ),
         'choose_from_most_used'      => __( 'Choose from the most used', 'tomaso_azara' ),
         'popular_items'              => __( 'Popular Locations', 'tomaso_azara' ),
         'search_items'               => __( 'Search Location', 'tomaso_azara' ),
         'not_found'                  => __( 'Not Found', 'tomaso_azara' ),
         'no_terms'                   => __( 'No Location', 'tomaso_azara' ),
         'items_list'                 => __( 'Location list', 'tomaso_azara' ),
         'items_list_navigation'      => __( 'Locations list navigation', 'tomaso_azara' ),
      );
      $args = array(
         'labels'                     => $labels,
         'hierarchical'               => false,
         'public'                     => true,
         'show_ui'                    => true,
         'show_admin_column'          => true,
         'show_in_nav_menus'          => true,
         'show_tagcloud'              => true,
      );
      register_taxonomy( 'location', array( 'product' ), $args );
   }

	public function process_cpts() {
		if ( !empty( $this->config['cpt'] ) ) {
			if ( empty( $this->config['post-type'] ) ) {
				$this->config['post-type'] = [];
			}
			$parts = explode( ',', $this->config['cpt'] );
			$parts = array_map( 'trim', $parts );
			$this->config['post-type'] = array_merge( $this->config['post-type'], $parts );
		}
	}

	public function add_meta_boxes() {
		foreach ( $this->config['post-type'] as $screen ) {
			add_meta_box(
				sanitize_title( $this->config['title'] ),
				$this->config['title'],
				[ $this, 'add_meta_box_callback' ],
				$screen,
				$this->config['context'],
				$this->config['priority']
			);
		}
	}

	public function save_post( $post_id ) {
		foreach ( $this->config['fields'] as $field ) {
			switch ( $field['type'] ) {
				default:
					if ( isset( $_POST[ $field['id'] ] ) ) {
						$sanitized = sanitize_text_field( $_POST[ $field['id'] ] );
						update_post_meta( $post_id, $field['id'], $sanitized );
					}
			}
		}
	}

	public function add_meta_box_callback() {
		$this->fields_table();
	}

	private function fields_table() {
		?><table class="form-table" role="presentation">
			<tbody><?php
				foreach ( $this->config['fields'] as $field ) {
					?><tr>
						<th scope="row"><?php $this->label( $field ); ?></th>
						<td><?php $this->field( $field ); ?></td>
					</tr><?php
				}
			?></tbody>
		</table><?php
	}

	private function label( $field ) {
		switch ( $field['type'] ) {
			default:
				printf(
					'<label class="" for="%s">%s</label>',
					$field['id'], $field['label']
				);
		}
	}

	private function field( $field ) {
		switch ( $field['type'] ) {
			default:
				$this->input( $field );
		}
	}

	private function input( $field ) {
		printf(
			'<input class="regular-text %s" id="%s" name="%s" %s type="%s" value="%s">',
			isset( $field['class'] ) ? $field['class'] : '',
			$field['id'], $field['id'],
			isset( $field['pattern'] ) ? "pattern='{$field['pattern']}'" : '',
			$field['type'],
			$this->value( $field )
		);
	}

	private function value( $field ) {
		global $post;
		if ( metadata_exists( 'post', $post->ID, $field['id'] ) ) {
			$value = get_post_meta( $post->ID, $field['id'], true );
		} else if ( isset( $field['default'] ) ) {
			$value = $field['default'];
		} else {
			return '';
		}
		return str_replace( '\u0027', "'", $value );
	}

}