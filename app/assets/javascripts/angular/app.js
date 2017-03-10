angular.module('app', ['templates', 'ui.router', 'ngMessages'])

  .config(['$httpProvider','$stateProvider', '$urlRouterProvider', function($httpProvider, $stateProvider, $urlRouterProvider) {
    $httpProvider.defaults.headers.common['X-CSRF-Token']
    = $('meta[name=csrf-token]').attr('content')

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
      .state('home.users', {
        url: 'users',
        templateUrl: 'angular/templates/users/index.html',
        controller: 'UsersController as ctrl'
      })
      .state('home.user', {
        url: 'users/:userId',
        templateUrl: 'angular/templates/users/show.html',
        controller: 'UsersController as ctrl'
        /*resolve: function (UserService, $stateParams) {
          return UserService.getUser($stateParams.id)
        }*/
      })

  $urlRouterProvider.otherwise('/');
}]);
