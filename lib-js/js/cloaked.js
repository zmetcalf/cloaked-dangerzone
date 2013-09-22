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
        'backbone',
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
            Backbone,
            sub,
            model,
            modelrest,
            validate,
            view,
            approuter,
            collection,
            addpush,
            prototypeEx
        )
    {

        $(document).ready(function(){
            $("p").click(function(){
                $(this).text(sub.spot);
            });
        });

})
