app.config(function ($stateProvider, $urlRouterProvider) {


    $urlRouterProvider.otherwise('/home');

    $stateProvider

        .state('home', {
            url: '/home',
            templateUrl: 'app/layout/menu.html',
            controller:'Home'
        })
        .state('login', {
            url: '/login',
            templateUrl: 'app/login/login.html',
            controller:'Login'
        })
        .state('home.dashboard', {
            url: '/dashboard',
            templateUrl: 'app/dashboard/dashboard.html',
        })

});