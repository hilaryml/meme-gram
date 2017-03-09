angular.module('app', ['templates', 'ui.router', 'ngMessages'])

  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'angular/templates/application/home.html',
        controller: 'UsersController as ctrl'
      })
      .state('signin', {
        url: '/signin',
        templateUrl: 'angular/templates/users/signin.html',
        controller: 'UsersController as ctrl'
      })
      .state('signup', {
        url: '/signup',
        templateUrl: 'angular/templates/users/signup.html',
        controller: 'UsersController as ctrl'
      })

  $urlRouterProvider.otherwise('/');
}]);
