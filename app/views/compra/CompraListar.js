app.controller('CompraListar', function ($scope, $rootScope, DataService) {
    var idModalExclusao;
    var indexRemover;
    $scope.resultadosCompras = [];

    DataService.realizarGet('http://ifg.redesbrasil.com/compras').then(function (response) {
         console.log(response.data);
        if (response.data.length) {
            $scope.resultadosCompras = response.data;
            console.log(response.data);
        } else {
            $scope.mensagem = "Nenhuma Compra Cadastrado";
        }

    });

    $scope.exibirModal = function (id, index) {
        indexRemover = index;
        $rootScope.idModalExclusao = id;
        $('#modal_default').modal('show');
    };
    
    $scope.excluirFuncionario = function () {
        DataService.realizarDelete('http://ifg.redesbrasil.com/veiculos/' + $rootScope.idModalExclusao).then(function (data) {
            if (indexRemover != undefined) {
                $scope.resultadosVeiculos.splice(indexRemover, 1);
            }
        });

    };


});
