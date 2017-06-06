app.controller('VeiculoListar', function ($scope, $rootScope, DataService) {
    var idModalExclusao;
    var indexRemover;
    $scope.resultadosVeiculos = [];


    $scope.garagem = function () {
        DataService.realizarGet('http://ifg.redesbrasil.com/veiculos/garagem').then(function (response) {            
                $scope.garagemResultados = response.data;           

        });

    }

      $scope.vendidos = function () {
        DataService.realizarGet('http://ifg.redesbrasil.com/veiculos/vendidos').then(function (response) {            
                $scope.vendidosResultados = response.data;           

        });

    }

   

    $scope.exibirModal = function (id, index) {
        indexRemover = index;
        $rootScope.idModalExclusao = id;
        $('#modal_default').modal('show');
    };

    $scope.excluirFuncionario = function () {
        DataService.realizarDelete('http://ifg.redesbrasil.com/veiculos/' + $rootScope.idModalExclusao).then(function (data) {
            if (indexRemover != undefined) {
                $scope.garagemResultados.splice(indexRemover, 1);
            }
        });

    };


});
