angular.module('app')

  .controller('UsersController', ['$scope', '$state', '$stateParams', 'UserService',
  function ($scope, $state, $stateParams, UserService) {

    //  $state.go('user');
    var ctrl = this;

    UserService.users()
      .then(data => ctrl.users = data)

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
