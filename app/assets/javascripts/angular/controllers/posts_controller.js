angular.module('app')

  .controller('PostsController', ['$scope', '$state', '$stateParams', 'PostService', 'UserService', 'PostUserService',
  function ($scope, $state, $stateParams, PostService, UserService, PostUserService) {

    var ctrl = this;

    ctrl.addPost = addPost;
    ctrl.updatePost = updatePost;
    ctrl.toggle = false;
    ctrl.like = like;
    ctrl.makePostUser = makePostUser;
    ctrl.sort = sort;

    if (UserService.getCookie() === undefined) {
      if ($state.is('home.post') || $state.is('home.newPost') || $state.is('home.updatePost')) {
        $state.go('home')
      }
    }

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
        .then(function(post) {
          makePostUser(post);
          ctrl.posts.push(ctrl.post);
        })
      }

    function makePostUser(post) {
      PostUserService
        .addPostUser(post.id, UserService.getCookie().id)

      $state.go('home.posts');
    }

    function updatePost() {
      PostUserService
        .addPostUser($stateParams.postId, UserService.getCookie().id)

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

    function sort() {
      ctrl.posts.sort(function(a,b){
        return b.likes-a.likes
      })
    }

  }]);
