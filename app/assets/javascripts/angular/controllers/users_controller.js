angular.module('app')

  .controller('UsersController', ['$scope', '$state', '$stateParams','$cookies', 'UserService',
  function ($scope, $state, $stateParams, $cookies, UserService) {

    var ctrl = this;
    ctrl.signUp = signUp;
    ctrl.signIn = signIn;
    ctrl.signOut = signOut;
    ctrl.setCookie = setCookie;
    ctrl.getUserId = getUserId;
    ctrl.profile = profile;

    UserService
      .getUsers()
      .then(data => ctrl.users = data)

    if ($stateParams.userId) { //might need to use a resolve for this in app.js
      UserService
        .getUser($stateParams.userId)
        .then(data => ctrl.user = data)
    }

    function signUp() {
      UserService
        .signUpUser(ctrl.user)
        .then(data => ctrl.users.push(data))
        .then(function (data) {
          setCookie(data);
          $state.go('home.posts');
        })
    }

    function signIn() {
      UserService
        .signInUser(ctrl.user)
        .then(function (data) {
          setCookie(data);
          $state.go('home.posts');
        })
    }

    function profile() {
      UserService
        .getUser(getUserId())
        .then(data => ctrl.user = data)
    }

    function signOut() {
      UserService
        .signOutUser(getUserId())
        .then(function() {
          $cookies.remove('user');
          $state.go('home');
        })
    }

    function setCookie(data) {
      console.log(data)
      $cookies.putObject('user', data);
    }

    function getUserId() {
      $cookies.getObject('user').id;
    }

  }]);
