angular
  .module('app')
  .service('UserService',

    function ($http) {

      this.signUpUser = function (user) {
        return $http.post('/users', JSON.stringify(user));
      }

      this.signInUser = function (data) {
        return $http.post('/sessions', JSON.stringify(data));
      }
    })
