angular.module('app', ['ui.router', 'templates'])

  .controller('UsersController', function ($scope, UserService, $location) {
    //callback for ng-click createUser
    $scope.createUser = function () {
      $location.path('/users/new');
    }

    //callback for ng-click editUser
    $scope.editUser = function (userId) {
      $location.path('users/edit' + userId);
      $scope.users = UserService.query();
    }

    //callback for ng-click deleteUser
    $scope.deleteUser = function (userId) {
      UserService.delete({ id: userId });
      $scope.users = UserService.query();
    }

    $scope.users = UserService.query();
  });
