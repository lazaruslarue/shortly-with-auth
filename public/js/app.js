angular.module('shortlyApp',
    ['ngRoute']
  )
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        controller: 'MainController',
        templateUrl: 'templates/main.html'
      })
      .when('/shorten', {
        controller: 'ShortenController',
        templateUrl: 'templates/shorten.html'
      })
      .otherwise({
        redirectTo: '/'
      })

  })
