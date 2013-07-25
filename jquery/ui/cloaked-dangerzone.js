$(document).ready(function(){
    $( "#date" ).datepicker();
    
    function runEffect() {
      var selectedEffect = $( "blind" ).val();

      $( "#effect" ).toggle( selectedEffect, "linear",  500);
    };
    
    $( "#comment-count" ).click(function() {
      runEffect();
      return false;
    });
});