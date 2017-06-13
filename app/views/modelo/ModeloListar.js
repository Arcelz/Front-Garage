
app.controller('ModeloListar', function ($scope, $rootScope, DataService) {
    var idModalExclusao;
    var indexRemover;
    $scope.lembretes = [];

    DataService.realizarGet('http://ifg.redesbrasil.com/modelos').then(function (response) {
        if (response.data.length) {
            $scope.lembretes = response.data;
            //console.log(response.data);
        } else {
            $scope.messagem = "Nenhum";
        }

    });

    $scope.exibirModal = function (id, index,nome) {
        $rootScope.indexRemover = index;
        $scope.modulo = 'MODELO';
        $scope.modulo_nome = nome;
        $rootScope.idModalExclusao = id;
        angular.element('#modal_excluir').modal();

    };

    $scope.modalExcluir = function () {

        DataService.realizarDelete('http://ifg.redesbrasil.com/modelos/' + $rootScope.idModalExclusao).then(function (data) {
            $scope.lembretes.splice($rootScope.indexRemover, 1);
            angular.element('#modal_excluir').modal('toggle');

        });

    };


});