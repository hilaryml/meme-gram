angular
  .module('app')
  .factory('UserService', ['$http', function ($http) {

    return {
      users
    }

    function users() {
      return $http.get('/api/users')
        .then(response => response.data)
        .catch(error => console.log(error))
    }

  }])
  /*.service('UserService', ['$http', function ($http) {

      this.signUpUser = function (user) {
        return $http.post('api/users', JSON.stringify(user));
      }

      this.signInUser = function (data) {
        return $http.post('api/sessions', JSON.stringify(data));
      }
    }]);*/
