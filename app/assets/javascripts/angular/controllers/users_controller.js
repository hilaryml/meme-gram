//module
var app = angular.module('app', ['ui.router', 'templates']);

//controller
app.controller('UsersController', ['$scope', function($scope) {
  $scope.test = "Welcome!";
}]);

//routes
app.config([
 '$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
 $stateProvider
  .state('/', {
    url: '/',
    templateUrl: 'users/index.html',
    controller: 'UsersController'
  })
  $urlRouterProvider.otherwise({
   redirectTo: '/'
  })
 }
]);
