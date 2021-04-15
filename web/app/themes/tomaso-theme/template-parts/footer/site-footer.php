<?php
// get background images
$dots = file_get_contents( get_template_directory() . "/dist/images/background/small-background-dots.svg");
?>
<footer id="footer" class="footer-section bg-light row py-4">
   <div class="small-container footer-wrapper">
      <div class="footer-area footer-area-one-wrapper my-5">
         <?php dynamic_sidebar( 'footer_area_one' ); ?>
      </div>
      <div class="footer-area footer-area-two-wrapper my-5">
         <?php dynamic_sidebar( 'footer_area_two' ); ?>
      </div>
      <div class="footer-area footer-area-three-wrapper my-5">
         <?php dynamic_sidebar( 'footer_area_three' ); ?>
      </div>
   </div>
   <div class="background-dots"><?= $dots ?></div>
</footer>