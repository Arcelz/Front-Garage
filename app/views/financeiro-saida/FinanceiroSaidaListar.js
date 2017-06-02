app.controller('FinanceiroSaidaListar', function ($scope, $rootScope, DataService) {
    var idModal;
    var indexRemover;
    $scope.lembretes = [];
    DataService.realizarGet('http://ifg.redesbrasil.com/financeiros-saidas').then(function (response) {
        $scope.lembretes = [];
        if (response.data.status === 400) {
            $scope.lembretes = [{
                pk_saida: ''
            }];
        }
        else {
            $scope.lembretes = response.data;
        }
    });
    $scope.exibirModal = function (id, index) {
        $scope.title = 'FINANCEIRO SAIDA'
        $scope.msg = 'Dar baixa na saida com valor de ' + id.valor;
        idModal = id.pk_saida;
        indexRemover = index;
        angular.element('#modal_default').modal();
    };
    $scope.pago = function () {
        DataService.realizarGet('http://ifg.redesbrasil.com/financeiros-saidas/1').then(function (response) {
            $scope.lembretes = [];
            if (response.data.status === 400) {
                $scope.lembretes = [{
                    pk_saida: ''
                }];
            }
            else {
                $scope.lembretes = response.data;
            }

        });
    }
        $scope.pendente = function () {
            DataService.realizarGet('http://ifg.redesbrasil.com/financeiros-saidas').then(function (response) {
                $scope.lembretes = [];
                if (response.data.status === 400) {
                    $scope.lembretes = [{
                        pk_saida: ''
                    }];
                }
                else {
                    $scope.lembretes = response.data;
                }
            });
        }

        $scope.cancelado = function () {
            DataService.realizarGet('http://ifg.redesbrasil.com/financeiros-saidas/2').then(function (response) {
                if (response.data.status === 400) {
                    $scope.lembretes = [{
                        pk_saida: ''
                    }];
                } else {
                    $scope.lembretes = response.data;
                }
            });
        }
        $scope.enviar = function () {
            var data = undefined;
            console.log(indexRemover);
            DataService.realizarPut('http://ifg.redesbrasil.com/financeiros-saidas/' + idModal, data).then(function (data) {
                $scope.lembretes.splice(indexRemover, 1);
            });
        }

});
