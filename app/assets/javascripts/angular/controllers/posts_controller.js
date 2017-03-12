angular.module('app')

  .controller('PostsController', ['$scope', '$state', '$stateParams', 'PostService',
  function ($scope, $state, $stateParams, PostService) {

    var ctrl = this;

    ctrl.addPost = addPost;
    ctrl.updatePost = updatePost;

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
        .then(data => ctrl.posts.push(data)) //might need to be $scope.$parent.post in order to show up right away

      $state.go('home.posts');
    }
    //need to add update function that appends new content to original story
    //content with a space in between

    function updatePost() {
      var currentPost;

      /*PostService
        .getPost($stateParams.postId)
        .then(data => currentPost = data)

      console.log(currentPost.content = currentPost.content + " " + ctrl.post.content)
*/
      PostService
        .updatePost($stateParams.postId, ctrl.post)
        .then(data => ctrl.post = data)//might need to be $scope.$parent.post in order to show up right away
    }
  }]);
