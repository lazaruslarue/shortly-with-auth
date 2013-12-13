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
  })
  