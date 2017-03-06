angular.module('app', ['templates', 'ui.router'])

  .config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'angular/templates/application/index.html',
        controller: 'UsersController as user'
      })
      .state('home.signin', {
        url: '/signin',
        templateUrl: 'angular/templates/users/signin',
        controller: 'UsersController as user'
      })
      .state('home.signup', {
        url: '/signup',
        templateUrl: 'angular/templates/users/signup',
        controller: 'UsersController as user'
      })

  $urlRouterProvider.otherwise('/');
});
