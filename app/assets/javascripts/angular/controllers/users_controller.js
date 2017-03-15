angular.module('app')

  .controller('UsersController', ['$scope', '$sce', '$state', '$stateParams','$cookies', 'UserService',
  function ($scope, $sce, $state, $stateParams, $cookies, UserService) {

    $scope.myImgSrc = $sce.trustAsResourceUrl("/../../assets/images/aged.jpg")

    var ctrl = this;

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
        .then(data => ctrl.user = data)
    }

    function signUp() {
      UserService
        .signUpUser(ctrl.user)
        .then(data => ctrl.users.push(data))

      $state.go('home.posts');
    }

    function signIn() {
      UserService
        .signInUser(ctrl.user)

      $state.go('home.posts');
    }

    function profile() {
      var id = UserService.getUserId()
      $state.go('home.user', { userId: id });
    }

    function signOut() {
      UserService
        .signOutUser(UserService.getUserId())
        .then(function() {
          $cookies.remove('user');
          $state.go('home');
        })
    }

  }]);
