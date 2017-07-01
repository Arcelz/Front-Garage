app.controller('GrupoListar', function ($scope, $rootScope, DataService) {
    var idModalExclusao;
    var indexRemover;
    $scope.lembretes = [];
    DataService.realizarGet('grupos').then(function (response) {
        if (response.data.length) {
            $scope.lembretes = response.data;
        } else {
            $scope.messagem = "Nenhum";
        }

    });

    $scope.exibirModal = function (id, index) {
        indexRemover = index;
        $rootScope.idModalExclusao = id.pk_grupo;
        $scope.modulo = 'GRUPO'
        $scope.modulo_nome = id.nome;
        angular.element('#modal_excluir').modal();
    };
    $scope.modalExcluir = function () {
        console.log($rootScope.idModalExclusao);
        DataService.realizarDelete('grupos/' + $rootScope.idModalExclusao).then(function (data) {
            console.log(data);
            $scope.lembretes.splice(indexRemover, 1);
            angular.element('#modal_excluir').modal('toggle');
        });

    };


});
