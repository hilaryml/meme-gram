angular.module('app', ['templates', 'ui.router'])

  .config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'angular/templates/application/index.html',
        controller: 'UsersController'
  });

  $urlRouterProvider.otherwise('/');
});
