var app = angular.module('app', ['templates', 'ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
  $stateProvider
    .state('/', {
      url: '/',
      templateUrl: 'angular/templates/users/index.html',
      controller: 'UsersController'
    });

  $urlRouterProvider.otherwise('/');
}]);
