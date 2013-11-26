// config.js

define([], function() {
  var config = {};
  config.apiKey = 'AIzaSyAtOsUNgwQBSGJp8CVmVDasN6Yi0tiJ99I';
  config.scopes = 'https://www.googleapis.com/auth/tasks https://www.googleapis.com/auth/userinfo.profile';
  config.clientId = '695156745162-ea1n55prvegf006g33n8o70176at2iib.apps.googleusercontent.com';

  _.templateSettings = {
    interpolate: /\{\{(.+?)\}\}/g
  };

  return config;
});
