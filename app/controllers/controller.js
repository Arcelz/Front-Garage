app.controller('Login', function ($scope,$location,$state,DataService,AuthService) {
    angular.element(document.querySelector("body")).addClass("login-container login-cover");
    /* data.get('https://jsonplaceholder.typicode.com/posts/').then(function (data) {
     console.log(data.data);
     });*/
    $scope.submit = function () {
        $scope.botaoLogin=true;
        DataService.realizarPost('http://ifg.redesbrasil.com/auth/login',$scope.form).then(function (data) {
            AuthService.setToken(data.data.Token);
            console.log(data.data);
            $scope.botaoLogin=false;
            $location.path('/');
        });
    }
});
app.controller('Home', function ($scope,$rootScope) {
    // $rootScope.bodylayout = '';
    angular.element(document.querySelector("body")).removeClass("login-container login-cover");
});
