angular.module('app')

  .controller('UsersController', ['$scope', '$state', '$stateParams', 'UserService',
  function ($scope, $state, $stateParams, UserService) {

    var ctrl = this;

    ctrl.signedIn = false;
    ctrl.currentUser = false;
    ctrl.signUp = signUp;
    ctrl.signIn = signIn;
    ctrl.signOut = signOut;

    /*if (ctrl.currentUser) {
      $scope.$parent.nav_partial_url = "angular/templates/application/_userNavbar.html"
    } else if (ctrl.currentUser === false) {
      $scope.$parent.nav_partial_url = "angular/templates/application/_navbar.html"
    }*/

    UserService
      .getUsers()
      .then(data => ctrl.users = data)

    if ($stateParams.userId) { //might need to use a resolve for this in app.js
      UserService
        .getUser($stateParams.userId)
        .then(function (data) {
          $scope.$parent.currentUseruser = data;
          ctrl.signedIn = true;
        })
    }

    function signUp() {
      UserService
        .signUpUser(ctrl.user)
        .then(data => ctrl.users.push(data))
        .then(function (data) {
          $scope.$parent.currentUser = data;
          ctrl.signedIn = true;
          $state.go('home.posts');
        })
    }

    function signIn() {
      UserService
        .signInUser(ctrl.user)
        .then(function (data) {
          $scope.$parent.currentUser = data;
          ctrl.signedIn = true;
          $state.go('home.users');
        })
    }

    function signOut() {
      UserService
        .signOutUser($scope.$parent.currentUser.id) //user id is stored as session id
        .then(function () {
          ctrl.signedIn = false;
        })

      $state.go('home');
    }

  }]);
