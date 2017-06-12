app.controller('FuncionarioEditar', function ($scope,$state, DataService, $stateParams, $rootScope) {
    $scope.form = {};
    var id = $stateParams.id; //pega o paramentro informado na url

    if(id==""){
        $state.go('common.funcionarioListar');
    }
    //console.log(id);
    DataService.realizarGet('http://ifg.redesbrasil.com/funcionarios/' + id).then(function (response) {
         console.log(response);
        //tem que modar o array manualmente
        $scope.form = {
            pk_funcionario: response.data[0].pk_funcionario,
            nome: response.data[0].nomes,
            cpf: response.data[0].cpf,
            email: response.data[0].email,
            logradouro: response.data[0].logradouro,
            cep: response.data[0].cep,
            bairro: response.data[0].bairro,
            cidade: response.data[0].cidade,
            contato: response.data[0].contato,
            contato1: response.data[0].contato1,
            estado: response.data[0].estado,
            pais: response.data[0].pais,
            fkCargo: response.data[0].pk_cargos

        };
        // ----------------FIM-----------------------

        //exibir o cargo que veio do banco
        $scope.select = angular.element(document.querySelector('#renderedCombo2'));
        $scope.select.html('<option selected label="' + response.data[0].nome + '" value="string:' + response.data[0].pk_cargos + '">' + response.data[0].nome + '</option>');
        // ----------------FIM-----------------------
    });

    //responsavel para exebir os demais cargos não ta funcionando direito
    DataService.realizarGet('http://ifg.redesbrasil.com/cargos').then(function (datas) {
        console.log($scope.datas, "editar");
        $scope.cargoResultados = datas.data;
        //console.log($scope.cargoResultados,"Primeira Consulta para preencher");

    });
    // ----------------FIM-----------------------

    $scope.salvar = function () {

        DataService.realizarPut('http://ifg.redesbrasil.com/funcionarios', $scope.form).then(function (response) {
            console.log(response);
            if (response.data.status == 400) {
                $scope.mensagem = response.data.message;
                $scope.botao = false;
            } else {
                $scope.botao = true; ///para desativar o botão para que o usuario não faça varias requisções
                $scope.mensagem = response.data.message;
                $scope.form = {}; //limpa o formulario
            }
        });
    }


});


