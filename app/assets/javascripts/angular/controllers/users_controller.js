angular.module('app')

  .controller('UsersController', ['$scope', '$state', '$stateParams', 'UserService',
  function ($scope, $state, $stateParams, UserService) {

    //  $state.go('user');
    var ctrl = this;

    ctrl.signUp = signUp;

    UserService
      .getUsers()
      .then(data => $scope.users = data) //used to be ctrl.users

    if ($stateParams.userId) {
      UserService
        .getUser($stateParams.userId)
        .then(data => ctrl.user = data) //used to be ctrl.user
    }

    function signUp() {
      UserService
        .signUpUser(ctrl.user)
        .then(user => $scope.$parent.users.push(user)) //used to be ctrl.users
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
