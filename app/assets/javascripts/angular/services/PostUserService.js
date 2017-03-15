angular
  .module('app')
  .factory('PostUserService', ['$http', function ($http) {

    return {
      addPostUser
    }

    function addPostUser(postId, userId) {
      const request = {
        method: 'POST',
        url: '/api/post_users',
        headers: {
            'Content-Type': 'application/json'
        },
        data: {
          post_id: postId,
          user_id: userId
        }
      }

      return $http(request)
        .then(response => response.data)
        .catch(error => console.log(error))
    }

  }])
