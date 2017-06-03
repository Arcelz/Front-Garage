app.controller('FinanceiroSaidaListar', function ($scope, $rootScope, DataService) {
    var idModal;
    var indexRemover;


    $scope.exibirModal = function (id, index) {
        $scope.title = 'FINANCEIRO SAIDA'
        $scope.msg = 'Dar baixa na saida com valor de ' + id.valor;
        idModal = id.pk_saida;
        indexRemover = index;
        angular.element('#modal_mensagens').modal();
    };
    $scope.pago = function () {
        DataService.realizarGet('http://ifg.redesbrasil.com/financeiros-saidas/1').then(function (response) {
            $scope.pagoResultados = [];
            if (response.data.status === 400) {
                $scope.pagoResultados = [{
                    pk_saida: ''
                }];
            }
            else {
                $scope.pagoResultados = response.data;
            }

        });
    }
    $scope.pendente = function () {
        DataService.realizarGet('http://ifg.redesbrasil.com/financeiros-saidas').then(function (response) {
            $scope.pendenteResultados = [];
            if (response.data.status === 400) {
                $scope.pendenteResultados = [{
                    pk_saida: ''
                }];
            }
            else {
                $scope.pendenteResultados = response.data;
            }
        });
    }

    $scope.cancelado = function () {
        DataService.realizarGet('http://ifg.redesbrasil.com/financeiros-saidas/2').then(function (response) {
            if (response.data.status === 400) {
                $scope.canceladoResultados = [{
                    pk_saida: ''
                }];
            } else {
                $scope.canceladoResultados = response.data;
            }
        });
    }
    $scope.enviar = function () {
        var data = undefined;
        console.log(indexRemover);
        DataService.realizarPut('http://ifg.redesbrasil.com/financeiros-saidas/' + idModal, data).then(function (data) {
            $scope.pendenteResultados.splice(indexRemover, 1);

            DataService.realizarGet('http://ifg.redesbrasil.com/financeiros-saidas/1').then(function (response) {
                $scope.pagoResultados = [];

                $scope.pagoResultados = response.data;
            });
            angular.element('#modal_mensagens').modal('toggle');
        });
    }

});
