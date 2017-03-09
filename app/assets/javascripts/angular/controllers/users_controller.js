angular.module('app')

  .controller('UsersController', ['$scope', '$state', '$stateParams', 'UserService',
  function ($scope, $state, $stateParams, UserService) {

    //  $state.go('user');
    var ctrl = this;

    UserService
      .getUsers()
      .then(data => ctrl.users = data)

    if ($stateParams.userId) {
      UserService
        .getUser($stateParams.userId)
        .then(data => ctrl.user = data)
    }

    /*UserService.getUser()
      .then(data => ctrl.user = data)*/

    /*ctrl.signUp = function (user) {
      UserService.signUpUser(user).then(function (response) {
        console.log(response);
        ctrl.signIn(response.config.data);
      })
    }

    ctrl.signIn = function (user) {
      UserService.signInUser(user);
    }*/

  }]);
