<header class="post-header mb-5">
   <div class="container-xl py-5 post-header-wrapper">
      <div class="d-flex justify-content-between mb-4">
         <h6 class="post-author"><?= get_the_author_meta('display_name'); ?></h6>
         <h6 class="post-date"><?= get_the_date(); ?></h6>
      </div>
      <h1 class="post-title text-center"><?= get_the_title() ?></h1>
   </div>
</header>