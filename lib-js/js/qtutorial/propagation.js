define(['q'], function(Q) {

  var getInputPromise = function() {
    var spot = 'Hello Spot';
    return spot;
  };

  Q.fcall(function() {
    console.log("Hello World!");
  });

  function delay(ms) {
    var deferred = Q.defer();
    setTimeout(deferred.resolve, ms);
    return deferred.promise;
  }

  console.log(delay(1000));
  var cookTime = delay(1000)
    .then(function() {
      console.log("Now we're cooking");
    })
    .then(function() {
      console.log("Now we're dealing");
    })
    .fail(function() {
      console.log("It's over");
    });

  /*var outputPromise = getInputPromise()
    .then(function(input) {
      console.log(input);
    }, function (reason) {
      console.log(reason);
    });*/
});
