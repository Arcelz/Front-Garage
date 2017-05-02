(function() {
    'use strict';

    angular
        .module('app.funcionario')
        .run(appRun);

  //  appRun.$inject = ['routehelper'];

    /* @ngInject */
    function appRun(routehelper) {
        routehelper.configureRoutes(getRoutes());
    }

    function getRoutes() {
        return [
            {
                url: '/',
                config: {
                    template:'app/layout/layout.html',
                    templateUrl: 'app/funcionario/cadastro-funcionario.html',
                    controller: 'Funcionario',
                    controllerAs: 'vm',
                    title: 'funcionario',

                }
            }
        ];
    }
})();