angular.module('app')

  .controller('UsersController', ['UserService', '$scope', function ($scope, UserService) {
    var ctrl = this;

    //callback for ng-submit signUp
    ctrl.signUp = function () {
      var user = new User();

      user.username = 
      user.email =

      user.$save();

      $scope.save = function () {
        $scope.newUser.save({ user: $scope.newUser }, function () {
          ctrl.signInUser(response.data)
        })
      }
      //UserService.signUpUser(user).then(function (response) {
        //ctrl.signInUser(response.data);
      //});
    }

    //callback for ng-submit signIn
    ctrl.signIn = function (user) {
      UserService.signInUser(user);
    }

  }]);
