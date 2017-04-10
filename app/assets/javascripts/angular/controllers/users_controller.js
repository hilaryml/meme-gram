angular.module('app')

  .controller('UsersController', ['$scope', '$state', '$stateParams','$cookies', 'UserService',
  function ($scope, $state, $stateParams, $cookies, UserService) {

    var ctrl = this;

    ctrl.signUp = signUp;
    ctrl.signIn = signIn;
    ctrl.signOut = signOut;
    ctrl.profile = profile;

    if (UserService.getCookie() === undefined) {
      if ($state.is('home.users') || $state.is('home.profile') || $state.is('home.user')) {
        $state.go('home')
      }
    }

    UserService
      .getUsers()
      .then(data => ctrl.users = data)

    if ($stateParams.userId) {
      UserService
        .getUser($stateParams.userId)
        .then(data => ctrl.user = data);
    }

    function signUp() {
      UserService
        .signUpUser(ctrl.user)
        .then(function(data) {
          ctrl.users.push(data);
          ctrl.user = data;
        })

      $state.go('home.posts');
    }

    function signIn() {
      UserService
        .signInUser(ctrl.user)
        .then(function(data) {
          ctrl.users.push(data);
          ctrl.user = data; 
        })

      $state.go('home.posts');
    }

    function profile() {
      var user = UserService.getCookie();
      $state.go('home.user', { userId: user.id });
    }

    function signOut() {
      UserService
        .signOutUser(UserService.getCookie().id)
        .then(UserService.removeCookie())

      $state.go('home');
    }

  }]);
