define(function (require) {
  var _ = require('lodash');
  var angular = require('angular');
  var $ = require('jquery');

  var app = require('modules').get('apps/reveal', [
  ]);

  require('routes')
  .when('/reveal', {
    template: require('text!plugins/reveal/index.html'),
    reloadOnSearch: false
  });

  app.controller('revealCtl', function (timefilter) {
    timefilter.enabled = false;
  });

  app.directive('reveal', function ($routeParams, $location, $timeout) {
    return {
      restrict: 'A',
      link: function ($scope, $elem, attr) {

        var section = $routeParams.section || 0;
        var slide = $routeParams.slide || 0;

        function setSrc(val) {
          if (val == null) return;

          $timeout(function () {
            $location.search('section', section);
            $location.search('slide', slide);
            $scope.$apply();
          }, 0);

          $elem.attr('src', attr.reveal + '#/' + section + '/' + slide);
        }

        setSrc(true);
        $(document).keydown( function (e) {
          switch (e.which) {
            case 37: // left
              if (attr.noSection != null) slide--;
              else section--;
            break;

            case 39: // right
              if (attr.noSection != null) slide++;
              else section++;
            break;

            case 38: // up
              slide--;
            break;

            case 40: // down
              slide++;
            break;

            default: return; // exit this handler for other keys
          }

          if (slide < 0) slide = 0;
          if (section < 0) section = 0;

          setSrc(true);
          e.preventDefault(); // prevent the default action (scroll / move caret)
        });
      }
    };
  });

});
