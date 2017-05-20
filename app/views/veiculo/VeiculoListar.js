app.controller('VeiculoListar', function ($scope, $rootScope, DataService) {
    var idModalExclusao;
    var indexRemover;
    $scope.resultadosVeiculos = [];

    DataService.realizarGet('http://ifg.redesbrasil.com/veiculos').then(function (response) {
        if (response.data.length) {
            $scope.resultadosVeiculos = response.data;
            console.log(response.data);
        } else {
            $scope.mensagem = "Nenhum Veiculo Cadastrado";
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
