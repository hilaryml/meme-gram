angular.module('app')

  .controller('UsersController', ['$scope', '$state', '$stateParams', 'UserService',
  function ($scope, $state, $stateParams, UserService) {

    var ctrl = this;

    ctrl.signedIn = false;
    ctrl.signUp = signUp;
    ctrl.signIn = signIn;
    ctrl.signOut = signOut;

    if (ctrl.signedIn === true) {
      $scope.nav_partial_url = "application/_userNavbar.html"
    } else {
      $scope.nav_partial_url = "application/_navbar.html"
    }

    UserService
      .getUsers()
      .then(data => ctrl.users = data) //used to be $scope.users

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
          data => ctrl.user = data) //used to be $scope.$parent.users but I'm getting double entries...

      $state.go('home.users')
      signedIn = true;
    }

    function signIn() {
      UserService
        .signInUser(ctrl.user)
        .then(data => ctrl.user = data)

      $state.go('home.users');
      signedIn = true;
    }

    function signOut() {
      UserService
        .signOutUser(ctrl.user.id) //user id is stored as session id
        .then()

      $state.go('home');
      ctrl.user = undefined;
      signedIn = false;
    }

  }]);
