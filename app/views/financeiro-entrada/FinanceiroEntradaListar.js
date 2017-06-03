app.controller('FinanceiroEntradaListar', function ($scope, $rootScope, DataService) {
    var idModal;
    var indexRemover;


    $scope.exibirModal = function (id, index) {
        $scope.title = 'FINANCEIRO ENTRADA'
        $scope.msg = 'Dar baixa na entrada com valor de ' + id.valor;
        idModal = id.pk_entrada;
        indexRemover = index;
        angular.element('#modal_mensagens').modal();
    };
    $scope.pago = function () {
        DataService.realizarGet('http://ifg.redesbrasil.com/financeiros-entradas/1').then(function (response) {
            $scope.pagoResultados = [];
            if (response.data.status === 400) {
                $scope.pagoResultados = [{
                    pk_entrada: ''
                }];
            }
            else {
                $scope.pagoResultados = response.data;
            }

        });
    }

    $scope.pendente = function () {
        DataService.realizarGet('http://ifg.redesbrasil.com/financeiros-entradas').then(function (response) {
            $scope.pendenteResultados = [];
            if (response.data.status === 400) {
                $scope.pendenteResultados = [{
                    pk_entrada: ''
                }];
            }
            else {
                $scope.pendenteResultados = response.data;
            }
        });
    }

    $scope.cancelado = function () {
        DataService.realizarGet('http://ifg.redesbrasil.com/financeiros-entradas/2').then(function (response) {
            $scope.canceladoResultados = [];
            if (response.data.status === 400) {
                $scope.canceladoResultados = [{
                    pk_entrada: ''
                }];
            }
            else {
                $scope.canceladoResultados = response.data;
            }

        });
    }
    $scope.enviar = function () {
        var data = undefined;
        console.log(indexRemover);
        DataService.realizarPut('http://ifg.redesbrasil.com/financeiros-entradas/' + idModal, data).then(function (data) {
            $scope.pendenteResultados.splice(indexRemover, 1);

            DataService.realizarGet('http://ifg.redesbrasil.com/financeiros-entradas/1').then(function (response) {
                $scope.pagoResultados = [];
                $scope.pagoResultados = response.data;

            });
            angular.element('#modal_mensagens').modal('toggle');
        });

    };
});
