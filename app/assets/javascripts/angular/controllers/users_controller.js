angular.module('app', ['ui.router', 'templates'])

  .controller('UsersController', function ($scope, UserService, $location) {
    var ctrl = this;

    //callback for ng-click signUp
    ctrl.signUp = function () {
      UserService.signUp(ctrl.user).then(function (response) {
        ctrl.signIn(response.data);
      });
    }

    //callback for ng-click signIn
    ctrl.signIn = function () {
      UserService.signIn(ctrl.user);
    }

  });
