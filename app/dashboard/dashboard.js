(function() {
    'use strict';

    angular
        .module('app.dashboard')
        .controller('Dashboard', Dashboard);

    Dashboard.$inject = ['logger'];

    function Dashboard(logger) {

        /*jshint validthis: true */
        var vm = this;

        vm.news = {
            title: 'Marvel Avengers',
            description: 'Marvel Avengers 2 is now in production!'
        };
        vm.title = 'Funcionarios';

        activate();

        function activate() {
//            Using a resolver on all routes or dataservice.ready in every controller
//            return dataservice.ready(promises).then(function(){
                logger.info('Activated Funcionarios View');

        }


    }
})();
