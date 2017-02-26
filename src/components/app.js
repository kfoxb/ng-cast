angular.module('video-player')

.controller('AppCtrl', function($window, youTube) {
  this.videos = $window.exampleVideoData;

  this.searchService = youTube;

  this.searchResults = (data) => {
    this.videos = data;
    this.currentVideo = this.videos[0];
  };
  
  this.onClick = (video) => {
    this.currentVideo = video;
  };
  
  youTube.search('cats', this.searchResults);
  this.currentVideo = this.videos[0];

  this.handleClick = (input) => {
    this.service.search(input, (data) => {
      this.result(data);
    });
  };

})


.directive('app', function() {
  return {
    scope: {},
    controller: 'AppCtrl',
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: 'src/templates/app.html'
  };
});