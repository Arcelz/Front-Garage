angular.module('app.core')
    .factory('AuthService', AuthService);

function AuthService ($localStorage, $q) {
    return {
        getToken : function () {
            return $localStorage.token;
        },
        setToken: function (token) {
            $localStorage.token = token;
        },
        logout : function (data) {
            delete $localStorage.token;
            $q.when();
        }
    };
}