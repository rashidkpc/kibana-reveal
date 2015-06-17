define(function (require, module, exports) {

  require('plugins/reveal/controllers/reveal');
  require('css!plugins/reveal/styles/main.css');

  var apps = require('registry/apps');
  apps.register(function RevealAppModule() {
    return {
      id: 'reveal',
      name: 'Slides',
      order: 9999999
    };
  });
});
