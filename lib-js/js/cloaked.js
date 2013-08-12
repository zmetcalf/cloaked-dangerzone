requirejs.config({
    baseUrl: 'js/lib',
    
    paths: {
        cloaked: '../cloaked'
    }
});
    
requirejs(['jquery', 'cloaked/sub'],
function ($,          sub)   {
    $(document).ready(function(){
        $("p").click(function(){
            $(this).text(sub.spot);
        });
    });
    
})