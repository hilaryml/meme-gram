angular.module('app', ['templates', 'ui.router', 'ngMessages'])

  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'angular/templates/application/home.html',
        controller: 'UsersController as ctrl'
      })
      .state('home.signin', {
        url: 'signin',
        templateUrl: 'angular/templates/users/signin.html',
        controller: 'UsersController as ctrl'
      })
      .state('home.signup', {
        url: 'signup',
        templateUrl: 'angular/templates/users/signup.html',
        controller: 'UsersController as ctrl'
      })
      .state('users', { //change to home.users
        url: '/users',
        templateUrl: 'angular/templates/users/index.html',
        controller: 'UsersController as ctrl'
      })
      .state('users.show', { //change to home.user
        url: '/users/:userId',
        templateUrl: 'angular/templates/users/show.html',
        controller: 'UsersController as ctrl'
        /*resolve: function (UserService, $stateParams) {
          return UserService.getUser($stateParams.id)
        }*/
      })

  $urlRouterProvider.otherwise('/');
}]);
