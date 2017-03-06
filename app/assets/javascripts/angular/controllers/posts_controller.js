angular.module('app', ['ui.router', 'templates'])

  .controller('PostsController', function($scope) {
    $scope.test = "Welcome!";
});
