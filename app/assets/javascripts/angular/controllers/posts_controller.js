angular.module('app')

  .controller('PostsController', ['$scope', '$state', '$stateParams', 'PostService',
  function ($scope, $state, $stateParams, PostService) {

    var ctrl = this;

    ctrl.addPost = addPost;
    ctrl.updatePost = updatePost;

    PostService
      .getPosts()
      .then(data => ctrl.posts = data)

    if ($stateParams.postId) {
      PostService
        .getPost($stateParams.postId)
        .then(data => ctrl.post = data)
    }

    function addPost() {
      PostService
        .addPost(ctrl.post)
        .then(post => ctrl.posts.push(post))
      $state.go('home.posts');
    }

    function updatePost() {
      PostService
        .updatePost($stateParams.postId, ctrl.post)
        .then(data => ctrl.post = data)
    }
  }]);
