angular
  .module('app')
  .factory('PostService', ['$http', function ($http) {

    return {
      getPosts,
      getPost,
      addPost,
      updatePost
    }

    function getPosts() {
      return $http.get('/api/posts')
        .then(response => response.data)
        .catch(error => console.log(error))
    }

    function getPost(id) {
      return $http.get('/api/posts/' + id)
        .then(response => response.data)
        .catch(error => console.log(error))
    }

    function addPost(postInfo) {
      const request = {
        method: 'POST',
        url: '/api/posts',
        headers: {
            'Content-Type': 'application/json'
        },
        data: { post: postInfo }
      }

      return $http(request)
        .then(response => response.data)
        .catch(error => console.log(error))
    }

    //need to add update service that uses patch or put
    function updatePost(postId, postInfo) {
      const request = {
        method: 'PUT',
        url: '/api/posts/' + postId,
        headers: {
            'Content-Type': 'application/json'
        },
        data: { post: postInfo }
      }
      return $http(request)
        .then(response => response.data)
        .catch(error => console.log(error))
    }
  }])
