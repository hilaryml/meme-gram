angular.module('app')

  .controller('PostsController', ['$scope', '$state', '$stateParams', 'PostService', 'EnvService',
  function ($scope, $state, $stateParams, PostService, EnvService) {

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
      var memeBackground = ctrl.meme.backgroundImage;
      var memeTopText = ctrl.meme.topText;
      var memeBottomText = ctrl.meme.bottomText;

      PostService
        .makeMeme(EnvService.key(), memeBackground, memeTopText, memeBottomText)
        .then(data => ctrl.post.image = "data:image/png;base64," + data)

  /*    PostService
        .addPost(ctrl.post)
        .then(data => ctrl.posts.push(data))

      $state.go('home.posts')*/
    }

    /*function signIn() {
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
