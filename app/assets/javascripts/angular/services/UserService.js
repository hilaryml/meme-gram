angular
  .module('app')
  .service('UserService', ['$http', function ($http) {

    return {
      getUsers,
      getUser,
      signUpUser,
      signInUser,
      signOutUser,
      getCurrentUser
    }

    function getUsers() {
      return $http.get('/api/users')
        .then(response => response.data)
        .catch(error => console.log(error))
    }

    function getUser(id) {
      return $http.get('/api/users/' + id)
        .then(response => response.data)
        .catch(error => console.log(error))
    }

    function signUpUser(userInfo) {
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
        url: '/api/sessions/' + sessionId,
        headers: {
          'Content-Type': 'application/json'
        }
      }

      return $http(request)
        .then(response => response.data)
        .catch(error => console.log(error))
    }

    function getCurrentUser(callback) {
        $http.get('/api/current_user')
          .then(response => response.data)
          .catch(error => console.log(error))
    }

  }])
