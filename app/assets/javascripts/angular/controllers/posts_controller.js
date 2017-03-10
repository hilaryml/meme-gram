angular.module('app')

  .controller('PostsController', ['$scope', '$state', '$stateParams', 'PostService',
  function ($scope, $state, $stateParams, PostService) {

    var ctrl = this;

    ctrl.addPost = addPost;

    PostService
      .getPosts()
      .then(data => ctrl.posts = data)

    if ($stateParams.postId) { //might need to use a resolve for this in app.js
      PostService
        .getPost($stateParams.postId)
        .then(data => ctrl.post = data)
    }

    function addPost() {
      
    }

    /*function signUp() {
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
    }*/

  }]);
