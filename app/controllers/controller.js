app.controller('Login', function ($scope) {
    angular.element(document.querySelector("body")).addClass("login-container login-cover");
});
app.controller('Home', function ($scope) {
    angular.element(document.querySelector("body")).removeClass("login-container login-cover");
});