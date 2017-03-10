angular.module('app')

  .controller('UsersController', ['$scope', '$state', '$stateParams', 'UserService',
  function ($scope, $state, $stateParams, UserService) {

    //  $state.go('user');
    var ctrl = this;

    ctrl.signUp = signUp;
    ctrl.signIn = signIn;

    UserService
      .getUsers()
      .then(data => ctrl.users = data) //used to be $scope.users

    if ($stateParams.userId) { //might need to use a resolve for this in app.js
      UserService
        .getUser($stateParams.userId)
        .then(data => ctrl.user = data) //used to be ctrl.user
    }

    function signUp() {
      UserService
        .signUpUser(ctrl.user)
        .then(user => ctrl.users.push(user)) //used to be $scope.$parent.users but I'm getting double entries...
    }

    function signIn() {
      UserService
        .signInUser(ctrl.user)
        .then(data => ctrl.user = data)
    }

  }]);
