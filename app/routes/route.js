app.config( function($httpProvider, $stateProvider, $urlRouterProvider) {


     $stateProvider
      .state('common', {
        templateUrl: 'app/layout/menu.html',
        abstract: true,
      })
      .state('home', {
        url: '/',
        parent: 'common',
        templateUrl: 'app/views/home.html',
        controller:'Home',            
        controllerAs: 'vm'
        //template: '<div><h4>dashboard</h4></div>',
        //controller: 'DashboardCtrl'
      })
      .state('categoria', {
        url: '/categorias',
        parent: 'common',
        templateUrl: 'app/views/categoria/cadastro-categorias.html',
        controller:'Categoria',
        controllerAs: 'vm'
        //template: '<div><h4>Homeee</h4></div>',
        //controller: 'DashboardCtrl'
      })
      .state('login', {
        url: '/login',
        templateUrl: 'app/login/login.html',
        controller:'Login',
        controllerAs: 'vm'
      });

      $urlRouterProvider.otherwise('/');
    /*

    $urlRouterProvider.otherwise('/');

    $stateProvider

        .state('home', {
            url: '/',            
            controller:'Home',            
            controllerAs: 'vm'
        })
        .state('login', {
            url: '/login',            
            controller:'Login'
        })
         .state('categoria', {
            url: '/categorias',
            templateUrl: 'app/categoria/cadastro-categorias.html',
            controller:'Categoria'
        })
        .state('home.dashboard', {
            url: '/dashboard',
            templateUrl: 'app/dashboard/dashboard.html',
        })*/

});