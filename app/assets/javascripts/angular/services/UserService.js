angular
  .module('app')
  .service('UserService',
  function ($resource) {
    var User = $resource('/users/:userId', { userId: '@id' })

    this.signUpUser = function (data) {
      User.post({})
      //return $http.post('/users', JSON.stringify(data));
    }

    //this.logInUser = function (data) {
      //return $http.post('/sessions', JSON.stringify(data));
    //}
  })
