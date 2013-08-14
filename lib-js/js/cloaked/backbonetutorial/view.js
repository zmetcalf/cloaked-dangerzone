define(["backbone"], function(Backbone) {
    
    SearchView = Backbone.View.extend({
        initialize: function() {
            this.render();
        },
        render: function() {
            var variables = { search_label: "My Search" };
            var template = _.template( $("#search_template").html(), variables );
            this.$el.html( template );
        },
        events: {
            "click input[type=button]": "doSearch"
        },
        doSearch: function( event ) {
            alert( "Search for " + $("#search_input").val() );
        }
    });
    
    var search_view = new SearchView({ el: $("#search_container")});
})