angular.module('app')

  .controller('PostsController', ['$scope', '$state', '$stateParams', 'PostService', 'UserService',
  function ($scope, $state, $stateParams, PostService, UserService) {

    var ctrl = this;

    ctrl.addPost = addPost;
    ctrl.updatePost = updatePost;
    ctrl.toggle = false;
    ctrl.like = like;

    /*if (UserService.getCookie() === undefined) {
      if ($state.is('home.post') || $state.is('home.newPost') || $state.is('home.updatePost')) {
        $state.go('home')
      }
    }*/

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

    function like() {
      if (ctrl.toggle === false) {
        ctrl.post.likes ++
        ctrl.toggle = true
      } else {
        ctrl.post.likes --
        ctrl.toggle = false
      }

      PostService
        .updatePost($stateParams.postId, ctrl.post)
    }

  }]);
