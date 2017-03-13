angular.module('app')

  .controller('UsersController', ['$scope', '$state', '$stateParams', 'UserService',
  function ($scope, $state, $stateParams, UserService) {

    var ctrl = this;

    ctrl.signUp = signUp;
    ctrl.signIn = signIn;
    ctrl.signOut = signOut;

    if (ctrl.user) {
      $scope.nav_partial_url = "angular/templates/application/_userNavbar.html"
    } else {
      $scope.nav_partial_url = "angular/templates/application/_navbar.html"
    }

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
        .then(
          data => ctrl.users.push(data),
          data => ctrl.user = data)

      $state.go('home.posts');
    }

    function signIn() {
      UserService
        .signInUser(ctrl.user)
        .then(data => ctrl.user = data)

      $state.go('home.users');
    }

    function signOut() {
      UserService
        .signOutUser(ctrl.user.id) //user id is stored as session id
        .then()

      $state.go('home');
    }

  }]);
