// main.js

requirejs.config({
  baseUrl: 'js',

  paths: {
    text: 'lib/text'
  },

  shim: {
    'lib/underscore-min': {
        exports: '_'
    },
    'lib/backbone-min': {
        exports: 'Backbone'
    },
    'app': {
        deps: ['lib/underscore-min', 'lib/backbone-min']
    }
  }

});

require(['app'], function(App) {
  window.bTask = new App();
});
