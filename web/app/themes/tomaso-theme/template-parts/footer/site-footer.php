<?php
// get background images
$dots = file_get_contents(get_template_directory() . "/dist/images/background/small-background-dots.svg");
$facebook = file_get_contents(get_template_directory() . "/dist/images/logos/facebook.svg");
$instagram = file_get_contents(get_template_directory() . "/dist/images/logos/instagram.svg");
?>
<footer id="footer" class="footer-section bg-light row py-4">
   <div class="small-container footer-wrapper">
      <div class="footer-area footer-area-one-wrapper my-5">
         <?php dynamic_sidebar('footer_area_one'); ?>
      </div>
      <div class="footer-area footer-area-two-wrapper my-5">
         <?php dynamic_sidebar('footer_area_two'); ?>
      </div>
      <div class="footer-area footer-area-three-wrapper my-5">
         <?php dynamic_sidebar('footer_area_three'); ?>
      </div>
      <div class="footer-area my-5 d-flex d-flex justify-content-center align-items-center follow-us-wrapper">
         <p class="h5 text-primary mx-3 mb-0">Follow Us:</p>
         <div>
            <a target="_blank" class="follow-us-logo" href="https://www.facebook.com/Sardinia-Micro-Continent-LTD-101499725895486"><?= $facebook ?></a>
            <a target="_blank" class="follow-us-logo" href="https://www.instagram.com/sardiniamicrocontinent/"><?= $instagram ?></a>
         </div>
      </div>
   </div>
   <div class="background-dots"><?= $dots ?></div>
</footer>