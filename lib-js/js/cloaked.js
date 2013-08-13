requirejs.config({
    baseUrl: 'js/lib',
    
    shim: {
        'backbone': {
        deps: ['jquery','underscore'],
        exports: 'Backbone'
        }
    },
    
    paths: {
        cloaked: '../cloaked'
    }
});
    
requirejs([
        'jquery', 
        'cloaked/sub', 
        'cloaked/backbonetutorial/model',
        'cloaked/backbonetutorial/modelrest',
        'cloaked/backbonetutorial/validate'
    ],

    function (
            $,
            sub,
            model,
            modelrest,
            validate
        )   
    {
        
        $(document).ready(function(){
            $("p").click(function(){
                $(this).text(sub.spot);
            });
        });
        
})