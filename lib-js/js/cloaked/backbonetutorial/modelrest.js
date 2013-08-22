define(['backbone'], function(Backbone) {
    
    var UserModel = Backbone.Model.extend({
        urlRoot: '/user',
        defaults: {
            name: '',
            email: ''
        }
    });
    var user = new UserModel();
    
    var userDetails = {
        name: 'Thomas',
        email: 'thomasalwyndavis@gmail.com'
    };
    
    /*user.save(userDetails, {
        success: function(user) {
            alert(user.toJSON());
        }
    })*/ //Needs server to work
});