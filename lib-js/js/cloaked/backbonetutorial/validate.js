define(['backbone'], function(Backbone) {

    Person = Backbone.Model.extend({

        validate: function(attributes) {
            if (attributes.age < 0 && attributes.name != "Dr Manhatten") {
                return "You can't be negative years old";
            }
        },
        initialize: function() {
            console.log("Welcome to this valid world");
            this.bind("invalid", function(model, error) {
                console.log(error);
            });
        }
    });

    var person = new Person;
    person.set({name: "Mary Poppins", age: -1}, {validate: 'true'});

    var person = new Person;
    person.set({name: "Dr Manhatten", age: -1}, {validate: 'true'});
})
