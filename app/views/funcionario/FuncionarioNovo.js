app.controller('FuncionarioSalvar', function ($scope, $state, $rootScope, DataService, $document, $window, $location) {
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
            DataService.realizarPost('http://ifg.redesbrasil.com/funcionarios', $scope.form).then(function (response) {
                if (response.data.status == 400) {
                    $scope.botao = false; //ativa o botao em caso de erro
                } else {
                    $scope.botao = true; //para desativar o botão para que o usuario não faça varias requisções
                    $state.go('common.funcionarioListar');

                }
            });

        }




    };
    // ----------------FIM-----------------------
});