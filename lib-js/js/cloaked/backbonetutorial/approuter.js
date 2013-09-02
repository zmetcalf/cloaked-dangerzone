define(["backbone"], function(Backbone) {
    var AppRouter = Backbone.Router.extend({
        routes: {
            "posts/:id": "getPost",
            "*actions": "defaultRoute"
        }
    });

    var app_router = new AppRouter;

    app_router.on('route:defaultRoute', function(id) {
        console.log( "Get post number " + id );
    })
    app_router.on('route:defaultRoute', function(actions) {
        console.log( actions );
    })

    Backbone.history.start();

})
