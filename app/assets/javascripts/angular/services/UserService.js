angular
  .module('app')
  .service('UserService',
  function ($resource) {

    this.signUpUser = function (data) {
      var User = $resource('/users/:userId')
      return $http.post('/users', JSON.stringify(data));
    }

    this.logInUser = function (data) {
      return $http.post('/sessions', JSON.stringify(data));
    }
  })
