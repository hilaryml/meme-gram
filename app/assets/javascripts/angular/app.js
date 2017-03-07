angular.module('app', ['templates', 'ui.router', 'ngMessages'])

  .config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: '../assets/javascripts/angular/templates/application/home.html',
        controller: 'UsersController as user'
      })
      .state('home.signin', {
        url: '/signin',
        templateUrl: 'users/signin.html',
        controller: 'UsersController as user'
      })
      .state('home.signup', {
        url: '/signup',
        templateUrl: 'users/signup.html',
        controller: 'UsersController as user'
      })

  $urlRouterProvider.otherwise('/');
  $locationProvider.html5Mode(true);
});
