app.controller('MenuController', function ($scope,$state,AuthService,jwtHelper) {
    var token = AuthService.getToken();
    $scope.nomeUsuario = jwtHelper.decodeToken(token)['Nome'];

    $scope.logout = function () {
        AuthService.logout();
            $state.go('login');
    }
});

