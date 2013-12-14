angular.module('shortlyApp')
  .controller('MainController', function($scope, $http){
    $scope.name='Main';
    // $http.get() could work as well
    $http({
      method: 'GET',
      url: '/links'
    })
    .then(function(data) {
      $scope.links = data.data;
    })
  })
  .controller('ShortenController', function($scope, $http){
    $scope.name='Shorten';
    $scope.text='balls';
    $scope.submit = function() {
      $http({
      method: 'POST',
      url: '/links',
      data: {url: this.text}
    })
     .then(function(data){
      console.info('data ', arguments)
     }) 
    };
  })
  