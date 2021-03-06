angular
  .module('app')
  .service('UserService', ['$http', '$cookies', function ($http, $cookies) {

    var currentUser;

    return {
      getUsers,
      getUser,
      signUpUser,
      signInUser,
      signOutUser,
      setCookie,
      getCookie,
      removeCookie
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
        .then(response => setCookie(response.data))
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
        .then(response => setCookie(response.data))
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

    function setCookie(user) {
      currentUser = user;
      $cookies.putObject('currentUser', user);
      return currentUser;
    }

    function getCookie() {
      currentUser = $cookies.getObject('currentUser');
      return currentUser;
    }

    function removeCookie() {
      $cookies.remove('currentUser');
    }

  }])
