angular.module('app', ['templates', 'ui.router', 'ngMessages', 'ngCookies'])

  .config(['$httpProvider','$stateProvider', '$urlRouterProvider',
  function($httpProvider, $stateProvider, $urlRouterProvider) {
    $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content')

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
      .state('home.profile', {
        url: 'users/profile',
        templateUrl: 'angular/templates/users/show.html',
        controller: 'UsersController as ctrl'
      })
      .state('home.user', {
        url: 'users/:userId',
        templateUrl: 'angular/templates/users/show.html',
        controller: 'UsersController as ctrl'
      })
      .state('home.posts', {
        url: 'posts',
        templateUrl: 'angular/templates/posts/index.html',
        controller: 'PostsController as ctrl'
      })
      .state('home.newPost', {
        url: 'posts/new',
        templateUrl: 'angular/templates/posts/new.html',
        controller: 'PostsController as ctrl'
      })
      .state('home.post', {
        url: 'posts/:postId',
        templateUrl: 'angular/templates/posts/show.html',
        controller: 'PostsController as ctrl'
      })
      .state('home.updatePost', {
        url: 'posts/:postId/update',
        templateUrl: 'angular/templates/posts/update.html',
        controller: 'PostsController as ctrl'
      })

  $urlRouterProvider.otherwise('/');
}]);
