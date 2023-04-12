user_module.controller('UserController',
    ['$scope','$location', '$window', 'toastr', 'AppUtil', 'UserService',
      UserController]);

function UserController($scope,$location, $window, toastr, AppUtil, UserService) {

  $scope.user = {};
  initUserId();

  function initUserId() {
    UserService.load_user().then(function (result) {
      $scope.user.username = result.userId;
    }, function (result) {

    });
  }

  $scope.updatePassword = function () {
    UserService.updatePassword($scope.user).then(function (result) {
      var host = window.location.host;
      top.location.href="http://"+host+"/user/logout";
    }, function (result) {
      AppUtil.showErrorMsg(result, "修改密码失败");
    })

  }
}
