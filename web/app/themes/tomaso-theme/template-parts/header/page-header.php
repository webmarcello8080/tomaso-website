<?php
if(is_singular()){
   $page_title = get_the_title();
} else {
   $header = new \NewWebMarcello\frontend\Header();
   $page_title = $header->home_page_title();
}
?>
<div class="page-header-container small-container">
   <header class="page-header my-5">
      <div class="py-5 page-header-wrapper">
         <h1 class="page-header-title"><?= $page_title ?></h1>
      </div>
   </header>
</div>