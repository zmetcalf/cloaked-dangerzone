define(["backbone"], function(Backbone) {
    var AppRouter = Backbone.Router.extend({
        routes: {
            "posts/:id": "getPost",
            "*actions": "defaultRoute"
        }
    });
    
    var app_router = new AppRouter;
    
    app_router.on('route:defaultRoute', function(id) {
        alert( "Get post number " + id );
    })
    app_router.on('route:defaultRoute', function(actions) {
        alert( actions );
    })
    
    Backbone.history.start();
    
})