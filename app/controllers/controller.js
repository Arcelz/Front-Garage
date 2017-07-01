app.controller('Login', function ($scope, $location, $state, DataService, AuthService) {
    /* data.get('https://jsonplaceholder.typicode.com/posts/').then(function (data) {
     console.log(data.data);
     });*/
    $scope.submit = function () {
        $scope.botaoLogin = true;
        DataService.realizarPost('auth/login', $scope.form).then(function (data) {
            AuthService.setToken(data.data.Token);
            $scope.botaoLogin = false;
            $state.go('home');
        });
    }
});
app.controller('Home', function ($scope, $rootScope) {
});
