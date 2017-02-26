angular.module('video-player')
.service ('youTube', function($http, $window) {
  this.search = function(query, callback) {
    console.log(callback);
    $http.get('https://googleapis.com/youtube/v3/search', {
      params: {
        part: 'snippet',
        q: 'query',
        type: 'video',
        maxResults: 5,
        key: 'AIzaSyB1b5uuRujLqV3wOaSBbz7sG1lUhqfsSLs',
        VideoEmbeddable: 'true'
      }
    })

    .then(function({data}) {
      if (callback) {
        callback(data.items);
      }
    })

    .catch(function({data}) {
      data.error.errors.forEach(function(err) {
        console.error(err.message);
      });
    });
  };
});
