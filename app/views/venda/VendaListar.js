app.controller('VendaListar', function ($scope, $rootScope, $stateParams, DataService, AuthService, $compile, $state, jwtHelper) {
    var idModal;
    var indexRemover;
    var fkVeiculo;
    $scope.resultadosCompras = [];


    var id = $stateParams.id; //pega o paramentro informado na url
    if (id === "" || id === undefined) {
        $state.go('common.vendaListar');
    }

    var token = AuthService.getToken();

    var permicao = jwtHelper.decodeToken(token)['Permição'];
    $scope.permicaoJSON = {};
    for (i = 0; i < permicao.length; i++) {
        if (permicao[i] === '24D') {
            $scope.permicaoJSON['venda'] = true;
            $scope.permicaoJSON['vendaDeletar'] = true;
        }
        if (permicao[i] === '24C') {
            $scope.permicaoJSON['venda'] = true;
            $scope.permicaoJSON['vendaEditar'] = true;
        }
    }

    $scope.pendente = function () {
        DataService.realizarGet('http://ifg.redesbrasil.com/vendas').then(function (response) {
            console.log(response);
            $scope.pendenteResultados = response.data;
        });
    }

    $scope.canceladas = function () {
        DataService.realizarGet('http://ifg.redesbrasil.com/vendas/' + 1).then(function (response) {
          
            $scope.canceladosResultados = response.data;
        });
    }

    $scope.cancelamento = function (id, index,fk_Veiculo) {
        $scope.title = "CANCELAMENTO DE COMPRA";
        $scope.msg = "TEM CERTEZA QUE DESEJA CANCELAR A VENDA " + id;
        indexRemover = index;
        idModal = id;
        fkVeiculo = fk_Veiculo;

        angular.element('#modal_mensagens').modal('show');

    }

    $scope.enviar = function () {
        var obj = {
            'pkVenda': idModal,
            'fk_veiculo': fkVeiculo
        }
      
       DataService.realizarPut('http://ifg.redesbrasil.com/vendas/', obj).then(function (data) {
           
            if (indexRemover != undefined) {
                $scope.pendenteResultados.splice(indexRemover, 1);
            }

            DataService.realizarGet('http://ifg.redesbrasil.com/vendas/' + 1).then(function (response) {
                  $scope.canceladosResultados =[];
                $scope.canceladosResultados = response.data;
            });
        });
        angular.element('#modal_mensagens').modal('toggle');
    }

    $scope.abrirModalExclusao = function (id, index, valor,fk_Veiculo) {

        $scope.modulo = "A COMPRA " + id + ", " + "COM VALOR DE R$";
        $scope.modulo_valor = valor;
        indexRemover = index;
        idModal = id;
        fkVeiculo = fk_Veiculo;

        angular.element('#modal_excluir').modal('show');
    };

    $scope.modalExcluir = function () {
        var obj ={
            'pkVenda': idModal,
            'fk_veiculo': fkVeiculo
        };       

        DataService.realizarDelete('http://ifg.redesbrasil.com/vendas/'+idModal+'/'+fkVeiculo).then(function (data) {            
            if (indexRemover != undefined) {
                $scope.pendenteResultados.splice(indexRemover, 1);
            }
        });
        angular.element('#modal_excluir').modal('toggle');

    }


});
