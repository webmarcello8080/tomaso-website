<?php

namespace NewWebMarcello\Admin;

class CustomPostType
{

   public function __construct()
   {
      add_action('init', [$this, 'custom_post_type'], 0);
   }

   // Register Custom Post Type
   function custom_post_type()
   {

      $labels = array(
         'name'                  => _x('Dishes', 'Post Type General Name', 'tomaso_azara'),
         'singular_name'         => _x('Dish', 'Post Type Singular Name', 'tomaso_azara'),
         'menu_name'             => __('Dishes', 'tomaso_azara'),
         'name_admin_bar'        => __('Dish', 'tomaso_azara'),
         'archives'              => __('Dish Archives', 'tomaso_azara'),
         'attributes'            => __('Dish Attributes', 'tomaso_azara'),
         'parent_item_colon'     => __('Parent Dish:', 'tomaso_azara'),
         'all_items'             => __('All Dishes', 'tomaso_azara'),
         'add_new_item'          => __('Add New Dish', 'tomaso_azara'),
         'add_new'               => __('Add New', 'tomaso_azara'),
         'new_item'              => __('New Dish', 'tomaso_azara'),
         'edit_item'             => __('Edit Dish', 'tomaso_azara'),
         'update_item'           => __('Update Dish', 'tomaso_azara'),
         'view_item'             => __('View Dish', 'tomaso_azara'),
         'view_items'            => __('View Dishes', 'tomaso_azara'),
         'search_items'          => __('Search Dish', 'tomaso_azara'),
         'not_found'             => __('Not found', 'tomaso_azara'),
         'not_found_in_trash'    => __('Not found in Trash', 'tomaso_azara'),
         'featured_image'        => __('Featured Image', 'tomaso_azara'),
         'set_featured_image'    => __('Set featured image', 'tomaso_azara'),
         'remove_featured_image' => __('Remove featured image', 'tomaso_azara'),
         'use_featured_image'    => __('Use as featured image', 'tomaso_azara'),
         'insert_into_item'      => __('Insert into Dish', 'tomaso_azara'),
         'uploaded_to_this_item' => __('Uploaded to this item', 'tomaso_azara'),
         'items_list'            => __('Dishes list', 'tomaso_azara'),
         'items_list_navigation' => __('Items list navigation', 'tomaso_azara'),
         'filter_items_list'     => __('Filter items Dish', 'tomaso_azara'),
      );
      $args = array(
         'label'                 => __('Dish', 'tomaso_azara'),
         'labels'                => $labels,
         'supports'              => array('title', 'revisions', 'thumbnail'),
         'hierarchical'          => false,
         'public'                => true,
         'show_ui'               => true,
         'show_in_menu'          => true,
         'menu_position'         => 5,
         'menu_icon'             => 'dashicons-carrot',
         'show_in_admin_bar'     => true,
         'show_in_nav_menus'     => true,
         'can_export'            => true,
         'has_archive'           => true,
         'exclude_from_search'   => false,
         'publicly_queryable'    => true,
         'capability_type'       => 'page',
      );
      register_post_type('dish', $args);
   }
}
