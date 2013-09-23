define(['q'], function(Q) {

  var getInputPromise = function() {
    var spot = 'Hello Spot';
    return spot;
  };

  Q.fcall(function() {
    console.log("Hello World!");
  });

  var outputPromise = getInputPromise()
    .then(function(input) {
      console.log(input);
    }, function (reason) {
      console.log(reason);
    });

});
