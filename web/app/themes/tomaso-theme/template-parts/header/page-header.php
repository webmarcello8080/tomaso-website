<?php
$featured_image = get_the_post_thumbnail_url();
?>
<header class="page-header mb-5" style="background-image: url('<?php echo $featured_image; ?>')">
   <div class="py-5 page-header-wrapper">
      <h1 class="page-title"><?= get_the_title() ?></h1>
   </div>
</header>