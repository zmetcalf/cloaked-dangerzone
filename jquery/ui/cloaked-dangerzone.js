$(document).ready(function(){
    $( "#date" ).datepicker();

    function runEffect() {
        var options = {easing:"easeInOutQuad"};
        
        $( "#effect" ).toggle( "blind", options,  500);
    }
    
    $( ".comment-count a" ).click(function() {
        runEffect();
        return false;
    });
});