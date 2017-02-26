angular.module('video-player')

.directive('search', function() {
  return {
    scope: {
      service: '<',
      results: '<'
    },
    controller: function() {},
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: 'src/templates/search.html'
  };
});
