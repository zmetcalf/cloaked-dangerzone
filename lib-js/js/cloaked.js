requirejs.config({
    baseUrl: 'js/lib',

    shim: {
        'backbone': {
        deps: ['jquery','underscore'],
        exports: 'Backbone'
        }
    },

    paths: {
        cloaked: '../cloaked',
    }
});

requirejs([
        'jquery',
        'cloaked/sub',
        'cloaked/backbonetutorial/model',
        'cloaked/backbonetutorial/modelrest',
        'cloaked/backbonetutorial/validate',
        'cloaked/backbonetutorial/view',
        'cloaked/backbonetutorial/approuter',
        'cloaked/backbonetutorial/collection',
        'cloaked/backbonetutorial/addpush',
        'cloaked/jsexample/prototypeEx'
    ],

    function (
            $,
            sub
        )
    {

        $(document).ready(function(){
            $("p").click(function(){
                $(this).text(sub.spot);
            });
        });
})
