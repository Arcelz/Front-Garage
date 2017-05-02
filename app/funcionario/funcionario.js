(function() {
    'use strict';

    angular
        .module('app.funcionario')
        .controller('Funcionario', Funcionario);

    //Funcionario.$inject = ['logger'];

    function Funcionario() {

        /*jshint validthis: true */
        var vm = this;

        vm.title = 'Funcionarios';

    }
})();
