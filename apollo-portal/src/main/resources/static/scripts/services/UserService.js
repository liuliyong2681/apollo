appService.service('UserService', ['$resource', '$q', function ($resource, $q) {
    var user_resource = $resource('', {}, {
        load_user: {
            method: 'GET',
            url: '/user'
        },
        logout_user: {
            method: 'GET',
            url: '/user/logout'
        },  
        find_users: {
            method: 'GET',
            url: '/users'
        },
        create_or_update_user: {
            method: 'POST',
            url: '/users'
        },
        update_password: {
            method: 'POST',
            url: '/users/update_password'
        }
    });
    return {
        load_user: function () {
            var finished = false;
            var d = $q.defer();
            user_resource.load_user({},
                                    function (result) {
                                        finished = true;
                                        d.resolve(result);
                                    },
                                    function (result) {
                                        finished = true;
                                        d.reject(result);
                                    });
            return d.promise;
        },
        logoutUser: function () {
            var finished = false;
            var d = $q.defer();
            user_resource.logout_user({},
                function (result) {
                  finished = true;
                  d.resolve(result);
                },
                function (result) {
                  finished = true;
                  d.reject(result);
                });
            return d.promise;
        },  
        find_users: function (keyword) {
            var d = $q.defer();
            user_resource.find_users({
                                         keyword: keyword
                                     },
                                     function (result) {
                                         d.resolve(result);
                                     },
                                     function (result) {
                                         d.reject(result);
                                     });
            return d.promise;
        },
        createOrUpdateUser: function (user) {
            var d = $q.defer();
            user_resource.create_or_update_user({}, user,
                                     function (result) {
                                         d.resolve(result);
                                     },
                                     function (result) {
                                         d.reject(result);
                                     });
            return d.promise;
        },
        updatePassword: function (user) {
          var d = $q.defer();
          user_resource.update_password({}, user,
              function (result) {
                d.resolve(result);
              },
              function (result) {
                d.reject(result);
              });
          return d.promise;   
        }
    }
}]);
