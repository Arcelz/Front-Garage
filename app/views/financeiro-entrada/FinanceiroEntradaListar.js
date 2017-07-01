app.controller('FinanceiroEntradaListar', function ($scope, $rootScope, DataService, $timeout) {
    var idModal;
    var indexRemover;

 // BLOCO PARA ATUALIZALÇAO DO CAIXA DE 5 SEGUNDOS
    DataService.realizarGet('financeiros-entradas/3').then(function (response) {

        $scope.caixa = response.data[0].caixa;
    });
    var promise;
    var contador = 5;

    ativarRefresh();

    function ativarRefresh() {
        contador--;
        if (contador === 0) {
            atualizar();
            contador = 5;
        }
        promise = $timeout(ativarRefresh, 1000);
    }

    function atualizar() {
        DataService.realizarGet('financeiros-entradas/3').then(function (response) {

            $scope.caixa = response.data[0].caixa;
        });


    }
 /// FIM DO BLOCO

    $scope.exibirModal = function (id, index) {
        $scope.title = 'FINANCEIRO ENTRADA'
        $scope.msg = 'Dar baixa na entrada com valor de ' + id.valor;
        idModal = id.pk_entrada;
        indexRemover = index;
        angular.element('#modal_mensagens').modal();
    };
    $scope.pago = function () {
        DataService.realizarGet('financeiros-entradas/1').then(function (response) {
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
        DataService.realizarGet('financeiros-entradas').then(function (response) {
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
        DataService.realizarGet('financeiros-entradas/2').then(function (response) {
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
        DataService.realizarPut('financeiros-entradas/' + idModal, data).then(function (data) {
            $scope.pendenteResultados.splice(indexRemover, 1);

            DataService.realizarGet('financeiros-entradas/1').then(function (response) {
                $scope.pagoResultados = [];
                $scope.pagoResultados = response.data;

            });
            angular.element('#modal_mensagens').modal('toggle');
        });

    };
});
