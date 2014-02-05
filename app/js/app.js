// app.js

define([
  'gapi',
  'routes',
  'views/app',
  'views/auth',
  'views/lists/menu',
  'collections/tasklists',
  'collections/tasks'
], function(ApiManager, Routes, AppView, AuthView, ListMenuView, TaskLists, Tasks) {
  var App = function() {
    this.routes = new Routes();

    this.views.app = new AppView();
    this.views.app.render();

    this.views.auth = new AuthView();
    this.views.auth.render();

    this.collections.lists = new TaskLists();
    this.collections.tasks = new Tasks();
    this.views.listMenu = new ListMenuView({
      collection: this.collections.lists
    });

    this.connectGapi();
  };

  App.prototype = {
    views: {},
    collections: {},

    connectGapi: function() {
      var self = this;
      this.apiManager = new ApiManager(this);
      this.apiManager.on('ready', function() {
        self.collections.lists.fetch({
          data: { userId: '@me' },
          success: function(collection, res, req) {
//            self.views.listMenu.render();
            Backbone.history.start();
          }
        });
      });
    }
  };

  return App;
});
