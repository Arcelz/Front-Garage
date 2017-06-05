app.controller('CompraListar', function ($scope, $rootScope, DataService, $compile, $state, AuthService, jwtHelper) {
    var idModal;
    var indexRemover;
    $scope.resultadosCompras = [];

    var token = AuthService.getToken();


    var permicao = jwtHelper.decodeToken(token)['Permição'];
    $scope.permicaoJSON = {};
    for (i = 0; i < permicao.length; i++) {
        if (permicao[i] === '4D') {
            $scope.permicaoJSON['compra'] = true;
            $scope.permicaoJSON['compraDeletar'] = true;
        }
        if (permicao[i] === '4C') {
            $scope.permicaoJSON['compra'] = true;
            $scope.permicaoJSON['compraEditar'] = true;
        }
    }

    $scope.pendente = function () {
        DataService.realizarGet('http://ifg.redesbrasil.com/compras').then(function (response) {
            $scope.pendenteResultados = response.data;

        });
    }

    $scope.canceladas = function () {
        DataService.realizarGet('http://ifg.redesbrasil.com/compras/' + 1).then(function (response) {
            $scope.canceladosResultados = response.data;

        });
    }

    $scope.cancelamento = function (id, index) {
        $scope.title = "CANCELAMENTO DE COMPRA";
        $scope.msg = "TEM CERTEZA QUE DESEJA CANCELAR A COMPRA " + id;
        indexRemover = index;
        idModal = id;

        angular.element('#modal_mensagens').modal('show');

    }

    $scope.enviar = function () {
        var obj = {
            'pkCompra': idModal
        }
        DataService.realizarPut('http://ifg.redesbrasil.com/compras/', obj).then(function (data) {
            console.log(data);
            if (indexRemover != undefined) {
                $scope.pendenteResultados.splice(indexRemover, 1);
            }

            DataService.realizarGet('http://ifg.redesbrasil.com/compras/' + 1).then(function (response) {
                $scope.canceladosResultados =[];
                $scope.canceladosResultados = response.data;

            });

        });
        angular.element('#modal_mensagens').modal('toggle');
    }

    $scope.abrirModalExclusao = function (id, index, valor) {

        $scope.modulo = "A COMPRA " + id + ", " + "COM VALOR DE R$";
        $scope.modulo_valor = valor;
        indexRemover = index;
        idModal = id;

        angular.element('#modal_excluir').modal('show');

    };

    $scope.modalExcluir = function () {
        DataService.realizarDelete('http://ifg.redesbrasil.com/compras/' + idModal).then(function (data) {
            if (indexRemover != undefined) {
                $scope.pendenteResultados.splice(indexRemover, 1);
            }
        });
         angular.element('#modal_excluir').modal('toggle');
    }


});
