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
      PostService
        .addPost(ctrl.post)
        .then(data => ctrl.posts.push(data))

      $state.go('home.posts');
    }
    //need to add update function that appends new content to original story
    //content with a space in between

  }]);
