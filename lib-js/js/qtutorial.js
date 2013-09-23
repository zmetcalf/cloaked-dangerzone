requirejs.config({
  baseUrl: 'js/lib',

  paths: {
    qtutorial: '../qtutorial'
  }
});

requirejs([
    'q',
    'qtutorial/propagation'
  ],

  function (
    Q,
    propagation
  ) {

});
