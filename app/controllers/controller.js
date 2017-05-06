app.controller('Login', function ($scope,$rootScope) {
    $rootScope.bodylayout = 'login-container login-cover';
   // angular.element(document.querySelector("body")).addClass("login-container login-cover");
});
app.controller('Home', function ($scope,$rootScope) {
     $rootScope.bodylayout = '';
    //angular.element(document.querySelector("body")).removeClass("login-container login-cover");
});
app.controller('Funcionario', function ($scope,$rootScope) {
     $rootScope.bodylayout = '';
    //angular.element(document.querySelector("body")).removeClass("login-container login-cover");

    


});