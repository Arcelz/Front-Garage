app.controller('FinanceiroEntradaListar', function ($scope, $rootScope, DataService) {
    var idModal;
    var indexRemover;
    $scope.lembretes = [];
    DataService.realizarGet('http://ifg.redesbrasil.com/financeiros-entradas').then(function (response) {
        $scope.lembretes = [];
        if (response.data.status === 400) {
            $scope.lembretes = [{
                pk_entrada: ''
            }];
        }
        else {
            $scope.lembretes = response.data;
        }
    });
    $scope.exibirModal = function (id, index) {
        $scope.title = 'FINANCEIRO ENTRADA'
        $scope.msg = 'Dar baixa na entrada com valor de' + id.valor;
        idModal = id.pk_entrada;
        indexRemover = index;
        angular.element('#modal_default').modal();
    };
    $scope.pago = function () {
        DataService.realizarGet('http://ifg.redesbrasil.com/financeiros-entradas/1').then(function (response) {
            $scope.lembretes = [];
            if (response.data.status === 400) {
                $scope.lembretes = [{
                    pk_entrada: ''
                }];
            }
            else {
                $scope.lembretes = response.data;
            }

        });
    }

    $scope.pendente = function () {
        DataService.realizarGet('http://ifg.redesbrasil.com/financeiros-entradas').then(function (response) {
            $scope.lembretes = [];
            if (response.data.status === 400) {
                $scope.lembretes = [{
                    pk_entrada: ''
                }];
            }
            else {
                $scope.lembretes = response.data;
            }
        });
    }

    $scope.cancelado = function () {
        DataService.realizarGet('http://ifg.redesbrasil.com/financeiros-entradas/2').then(function (response) {
            $scope.lembretes = [];
            if (response.data.status === 400) {
                $scope.lembretes = [{
                    pk_entrada: ''
                }];
            }
            else {
                $scope.lembretes = response.data;
            }

        });
    }
    $scope.enviar = function () {
        var data = undefined;
        console.log(indexRemover);
        DataService.realizarPut('http://ifg.redesbrasil.com/financeiros-entradas/' + idModal, data).then(function (data) {
            $scope.lembretes.splice(indexRemover, 1);
        });

    };
});
