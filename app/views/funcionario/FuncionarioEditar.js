app.controller('FuncionarioEditar', function ($scope, $state, DataService, $stateParams, $rootScope) {
    $scope.form = {};
    var id = $stateParams.id; //pega o paramentro informado na url

    if (id == "") {
        $state.go('common.funcionarioListar');
    }


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
        //  $("#renderedCombo2 :selected").remove();
        // ----------------FIM-----------------------

        //exibir o cargo que veio do banco
        $scope.select = angular.element(document.querySelector('#renderedCombo2'));
        $scope.select.html('<option  label="' + response.data[0].nome + '" value="string:' + response.data[0].pk_cargos + '">' + response.data[0].nome + '</option>');

        teste();
        // ----------------FIM-----------------------
    });

    //responsavel para exebir os demais cargos não ta funcionando direito

    function  teste(){ DataService.realizarGet('http://ifg.redesbrasil.com/cargos').then(function (datas) {
        $scope.cargoResultados = datas.data;
        //console.log($scope.cargoResultados,"Primeira Consulta para preencher");

    });
    }
    // ----------------FIM-----------------------





    $scope.salvar = function () {
        $scope.form.cpf = $("#cpf").val();
        $scope.form.telefone = $("#telefone").val();
        $scope.form.celular = $("#celular").val();
        $scope.form.cep = $("#cep").val();

        if ($scope.form.cpf !== "" && $scope.form.telefone !== "" && $scope.form.celular !== "" && $scope.form.cep !== "") {
            $scope.formulario.$valid = true;

        };

        //Caso o fkCargo vier null eu seto o valor que esta no value
        if ($scope.form.fkCargo === null) {
            var ValorA = $("#renderedCombo2 option:selected").val();
            $scope.form.fkCargo = ValorA;
        }
        //----------------FIM-----------------------

        if ($scope.formulario.$valid) {
            if ($scope.avatar !== undefined) {
                $scope.form['avatar'] = $scope.avatar.base64;
            }

            $scope.botao = true; //para desativar o botão para que o usuario não faça varias requisções
            DataService.realizarPut('http://ifg.redesbrasil.com/funcionarios', $scope.form).then(function (response) {
                if (response.data.status == 400) {
                    $scope.botao = false; //ativa o botao em caso de erro
                } else {
                    $scope.botao = true; //para desativar o botão para que o usuario não faça varias requisções
                    $state.go('common.funcionarioListar');

                }
            });

        }
    }


});


