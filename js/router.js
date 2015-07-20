// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone'
], function($, _, Backbone){

  var AppRouter = Backbone.Router.extend({
    routes: {
      // Define some URL routes
      '': 'showWizard',

      // Default
      '*actions': 'defaultAction'
    }
  });

  var initialize = function(){
    var app_router = new AppRouter;

    app_router.on('route:showWizard', function(){
      // Call render on the module we loaded in via the dependency array
      // 'views/projects/list'
      console.log('showWizard');
    });
    
    app_router.on('route:defaultAction', function(actions){
      // We have no matching route, lets just log what the URL was
      console.log('No route:', actions);
    });
    Backbone.history.start();
  };

  return {
    initialize: initialize
  };
});