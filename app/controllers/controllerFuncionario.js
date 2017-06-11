app.controller('FuncionarioSalvar', function ($scope, $rootScope, DataService, $document, $window, $location) {
    //  $scope.form = {};
    $scope.mensagem = '';
    //Função para buscar os cargos no WebSerice e coloca no dropdaw
    //$scope.fkCargo = null;                       
    $scope.cargoResultados = [];

    DataService.realizarGet('http://ifg.redesbrasil.com/cargos').then(function (data) {
        console.log(data, "Primeira Consulta");
        $scope.cargoResultados = data.data;
        //console.log($scope.cargoResultados,"Primeira Consulta para preencher");

    });
    // ----------------FIM-----------------------

    //Função salvar cargo do Modal
    $scope.salvarCargo = function () {

        if ($scope.formulario.$valid) {
            DataService.realizarPost('http://ifg.redesbrasil.com/cargos', $scope.form2).then(function (data) {
                console.log(data, "Salvando Cargo");
                $scope.form2 = ''; //Limpa o Campo dentro do Modal
                $scope.mensagem = data.data.message;

                //exibir algum error
                //faz a busca na api atras dos novos cargos
                DataService.realizarGet('http://ifg.redesbrasil.com/cargos').then(function (datas) {
                    console.log(datas, "Depois que salvou foi no banco");
                    atualizarDropdow(datas);
                });
            });

            function atualizarDropdow(data) {
                var tamnho = data.data.length; //pega o tamanho do Array
                var i = tamnho - 1; //diminuir pq começa com 0 o array; 

                $scope.select = angular.element(document.querySelector('#renderedCombo2'));
                $scope.select.append('<option  value="' + data.data[i].pk_cargos + '"  >' + data.data[i].nome + '</option>');//inseri o novo cargo no final

            };

        }


    };
    // ----------------FIM-----------------------

    //Função para salvar Funcionario
    $scope.salvar = function () {
        //Caso o fkCargo vier null eu seto o valor que esta no value
        if ($scope.form.fkCargo === null) {
            var ValorA = $("#renderedCombo2 option:selected").val();
            $scope.form.fkCargo = ValorA;
        }
        //----------------FIM-----------------------


        // Se vier undefined é pq está criando um novo funcionario, se nao vai para atualizar o funcionario
        if ($scope.form.pk_funcionario === undefined) {
            if ($scope.formulario.$valid) {
                $scope.form['avatar'] = $scope.avatar.base64;
                $scope.botao = true; //para desativar o botão para que o usuario não faça varias requisções
                DataService.realizarPost('http://ifg.redesbrasil.com/funcionarios', $scope.form).then(function (response) {
                    if (response.data.status == 400) {
                        $scope.mensagem = response.data.message;
                        $scope.botao = false; //ativa o botao em caso de erro
                    } else {
                        $scope.botao = true; //para desativar o botão para que o usuario não faça varias requisções
                        $scope.mensagem = response.data.message;
                        $scope.form = {};
                    }
                });

            }

        } else {

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


    };
    // ----------------FIM-----------------------
});


app.controller('FuncionarioListar', function ($scope, $rootScope, DataService) {
    var funcionarioModalExclusao; // variavel para pegar todos os dados. 
    $scope.lembretes = [];

    DataService.realizarGet('http://ifg.redesbrasil.com/funcionarios').then(function (response) {
        if (response.data.length) {
            $scope.lembretes = response.data; //aqui alimenta o array que preenche a tela

        } else {
            $scope.messagem = "Nenhum";
        }

    });

    //funcção para exibir o modal 
    $scope.exibirModal = function (id) {

        $rootScope.funcionarioModalExclusao = id;


        $('#modal_default').modal('show');

    };
    // ----------------FIM-----------------------

    // função para excluir o funcionario
    $scope.excluirFuncionario = function () {
        //var id = $rootScope.idModalExclusao;
        //console.log( $rootScope.idModalExclusao.pk_funcionario);
        DataService.realizarDelete('http://ifg.redesbrasil.com/funcionarios/' + $rootScope.funcionarioModalExclusao.pk_funcionario).then(function (data) {
            var index = -1;
            var comArr = eval($scope.lembretes);
            var i;
            for (i = 0; i < comArr.length; i++) {
                if (comArr[0].nomes === $rootScope.funcionarioModalExclusao.nomes) {
                    index = 1;
                    break;
                }
                if (index === -1) {
                    console.log("adsasd");
                }

                $scope.lembretes.splice(index, 1);
            }

        });

    };
// ----------------FIM-----------------------

});


app.controller('FuncionarioEditar', function ($scope, DataService, $stateParams, $rootScope) {
    $scope.form = {};
    var id = $stateParams.id; //pega o paramentro informado na url

    //console.log(id);
    DataService.realizarGet('http://ifg.redesbrasil.com/funcionarios/' + id).then(function (response) {
        // console.log(response,"vindo");
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


});






