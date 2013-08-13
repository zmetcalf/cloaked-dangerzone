define(['backbone'], function(Backbone) {
    
    var Person = Backbone.Model.extend({
        defaults: {
            name: 'Fetus',
            age: 0,
            child: ''
        },
        
        initialize: function() {
            alert("Welcome to this world");
            this.on("change:name", function(model) {
                var name = model.get("name");
                alert("Changed my name to " + name);
            });
        },
        
        adopt: function(newChildsName) {
            this.set({ child: newChildsName });
        }
    });
    
    var person = new Person({name: "Thomas", age: 67, child:'Ryan'});
       
    var age = person.get("age");
    var name = person.get("name");
    var child = person.get("child");
    
    person.adopt('John Resig');
    
    var child = person.get("child");

    person.set({name: 'Stewie Griffin'});
    
    var attributes = person.toJSON;
    
    return person;
})