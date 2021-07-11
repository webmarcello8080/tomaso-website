jQuery(function ($) {
   console.log('ddd');
   setInterval(ToggleSlogans, 5000);

   function ToggleSlogans() {
      var $first;
      var $second;
      //check which one is visible, to fade it out first:
      if ($(".slogan-block-first").is(":visible")) {
         $first = $(".slogan-block-first");
         $second = $(".slogan-block-second");
      } else {
         $first = $(".slogan-block-second");
         $second = $(".slogan-block-first");
      }

      //fade out the visible panel
      $first.fadeToggle("slow", function () {
         //fade in the invisible panel
         $second.fadeToggle("slow");
      });
   }
});
