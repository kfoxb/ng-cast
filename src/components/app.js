angular.module('video-player')

.controller('AppCtrl', function($scope) {

  $scope.videos = window.exampleVideoData;
  $scope.currentVideo = $scope.videos[0];
  $scope.onClick = function() {};
})


.directive('app', function() {
  return {
    templateUrl: 'src/templates/app.html'
  };
});