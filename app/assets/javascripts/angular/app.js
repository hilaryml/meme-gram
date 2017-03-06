angular.module('app', ['templates', 'ui.router'])

  .config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
      .state('/posts', {
        url: '/posts',
        templateUrl: 'angular/templates/posts/index.html',
        controller: 'PostsController'
  });

  $urlRouterProvider.otherwise('/posts');
});
