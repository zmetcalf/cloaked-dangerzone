define(['backbone'], function(Backbone) {
    
    var ships = new Backbone.Collection;

    ships.on("add", function(ship) {
        console.log("Ahoy " + ship.get("name") + "!" + ships.indexOf(ship));
    });

    ships.push(
        {name: "Flying Dutchman"}
    );
    ships.push({name: "Super Ship"}, {at: 0});
    ships.push({name: "Slow Ship"});
});