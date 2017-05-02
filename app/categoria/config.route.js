(function() {
    'use strict';

    angular
        .module('app.categorias')
        .run(appRun);

    // appRun.$inject = ['routehelper']

    /* @ngInject */
    function appRun(routehelper) {
        routehelper.configureRoutes(getRoutes());
    }

    function getRoutes() {
        return [
            {
                url: '/categorias',
                config: {
                    templateUrl: 'app/categoria/cadastro-categorias.html',
                    controller: 'Categorias',
                    controllerAs: 'vm',
                    title: 'categorias',
                    settings: {
                        nav: 2,
                        content: '<i class="fa fa-lock"></i> Categorias'
                    }
                }
            }
        ];
    }
})();
