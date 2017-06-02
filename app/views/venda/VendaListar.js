app.controller('VendaListar', function ($scope, $rootScope, DataService,AuthService, $compile, $state, jwtHelper) {
    var idModal;
    var indexRemover;
    $scope.resultadosCompras = [];
    var token = AuthService.getToken();


    var permicao = jwtHelper.decodeToken(token)['Permição'];
    $scope.permicaoJSON = {};
    for (i = 0; i < permicao.length; i++) {
        if (permicao[i] === '24D') {
            $scope.permicaoJSON['venda'] = true;
            $scope.permicaoJSON['vendaDeletar'] = true;
        }
    }

    $scope.carregarVendas = function () {
        DataService.realizarGet('http://ifg.redesbrasil.com/vendas').then(function (response) {

            if (response.data.length) {
                $scope.resultadosVendas = response.data;
            } else {
                $scope.mensagem = "Nenhuma Compra Cadastrado";
            }

        });
    }

    $scope.cancelamento = function (id, index) {
        $scope.title = "CANCELAMENTO DE COMPRA";
        $scope.msg = "TEM CERTEZA QUE DESEJA CANCELAR A VENDA " + id;
        indexRemover = index;
        idModal = id;

        angular.element('#modal_mensagens').modal('show');

    }

    $scope.enviar = function () {
        var obj = {
            'pkVenda': idModal
        }
        DataService.realizarPut('http://ifg.redesbrasil.com/vendas/', obj).then(function (data) {
            console.log(data);
            if (indexRemover != undefined) {
                $scope.resultadosVendas.splice(indexRemover, 1);
            }
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
        DataService.realizarDelete('http://ifg.redesbrasil.com/vendas/' + idModal).then(function (data) {
            console.log(data);
            if (indexRemover != undefined) {
                $scope.resultadosVendas.splice(indexRemover, 1);
            }
        });


    }


});
