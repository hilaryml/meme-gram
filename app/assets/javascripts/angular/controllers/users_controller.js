angular.module('app')

  .controller('UsersController', ['$scope', '$state', '$stateParams', 'UserService',
  function ($scope, $state, $stateParams, UserService) {

    var ctrl = this;

    ctrl.currentUser = false;
    ctrl.signUp = signUp;
    ctrl.signIn = signIn;
    ctrl.signOut = signOut;
    ctrl.profile = profile;

    UserService
      .getUsers()
      .then(data => ctrl.users = data)

    if ($stateParams.userId) { //might need to use a resolve for this in app.js
      UserService
        .getUser($stateParams.userId)
        .then(function (data) {
          ctrl.user = data;
        })
    }

    function signUp() {
      UserService
        .signUpUser(ctrl.user)
        .then(data => ctrl.users.push(data))
        .then(function (data) {
          $scope.$parent.currentUser = data;
          $state.go('home.posts');
        })
    }

    function signIn() {
      UserService
        .signInUser(ctrl.user)
        .then(function (data) {
          $scope.$parent.currentUser = data;
          $state.go('home.users');
        })
    }

    function signOut() {
      UserService
        .signOutUser($scope.$parent.currentUser.id) //user id is stored as session id

      $state.go('home');
    }

  }]);
