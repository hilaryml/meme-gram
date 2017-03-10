angular
  .module('app')
  .factory('PostService', ['$http', function ($http) {

    return {
      getPosts,
      getPost,
      makeMeme,
      addPost
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

    function makeMeme(key, backgroundImage, topText, bottomText) {
      const request = {
        method: 'GET',
        url: 'https://ronreiter-meme-generator.p.mashape.com/meme?bottom=' + bottomText + '&font=Impact&font_size=50&meme=' + backgroundImage + '&top=' + topText,
        headers: {
          "X-Mashape-Authorization": key
        }
      }

      return $http(request)
        .then(response => response.data)//function (response) { document.getElementById("img").src = "data:image/png;base64," + response.data;})
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
        .then(response => console.log(response.data))
        .catch(error => console.log(error))
    }
    /*function signUpUser(userInfo) {
      const request = {
        method: 'POST',
        url: '/api/users',
        headers: {
          'Content-Type': 'application/json'
        },
        data: { user: userInfo }
      }

      return $http(request)
        .then(response => response.data)
        .catch(error => console.log(error))
    }

    function signInUser(userInfo) {
      const request = {
        method: 'POST',
        url: '/api/sessions',
        headers: {
          'Content-Type': 'application/json'
        },
        data: { user: userInfo }
      }

      return $http(request)
        .then(response => response.data)
        .catch(error => console.log(error))
    }

    function signOutUser(sessionId) {
      const request = {
        method: 'DELETE',
        url: '/api/sessions' + sessionId,
        headers: {
          'Content-Type': 'application/json'
        }
      }

      return $http(request)
        .then(response => console.log(response.data.message))
        .catch(error => console.log(error))
    }*/

  }])
