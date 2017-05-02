(function() {
    'use strict';

    angular
        .module('app.categorias')
        .controller('Categorias', Categorias);

    /* @ngInject */
    function Categorias(dataservice, logger) {
        /*jshint validthis: true */
        var vm = this;
        vm.title = 'Categorias';

        activate();

        function activate() {
//            Using a resolver on all routes or dataservice.ready in every controller
//            var promises = [getAvengers()];
//            return dataservice.ready(promises).then(function(){
                logger.info('Activated Categorias View');
        }

    }
})();
