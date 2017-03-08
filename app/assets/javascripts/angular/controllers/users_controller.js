angular.module('app')

  .controller('UsersController', ['$scope', 'UserService',
  function ($scope, UserService) {
    var ctrl = this;

    ctrl.signUp = function (user) {
      UserService.signUpUser(user).then(function (response) {
        ctrl.signIn(response.data);
      })
    }

    ctrl.signIn = function (user) {
      UserService.signInUser(user);
    }

  }]);
