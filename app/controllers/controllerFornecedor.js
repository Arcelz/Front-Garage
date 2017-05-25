app.controller('FornecedorSalvar', function ($scope, $rootScope, DataService, $document, $window, $location) {

    //Função para salvar Funcionario
    $scope.salvar = function () {

        if ($scope.form.pk_fornecedor === undefined) {
            if ($scope.formulario.$valid) {
                $scope.botao = true; //para desativar o botão para que o usuario não faça varias requisções      
                DataService.realizarPost('http://ifg.redesbrasil.com/fornecedores', $scope.form).then(function (response) {
                    if (response.data.status == 400) {
                        $scope.mensagem = response.data.message;
                        $scope.botao = false;
                    } else {
                        $scope.botao = true;
                        $scope.mensagem = response.data.message;
                        $scope.form = {};
                    }
                });

            }

        } else {

            DataService.realizarPut('http://ifg.redesbrasil.com/fornecedores', $scope.form).then(function (response) {
                console.log(response);
                if (response.data.status == 400) {
                    $scope.mensagem = response.data.message;
                    $scope.botao = false;
                } else {
                    $scope.botao = true;
                    $scope.mensagem = response.data.message;
                    $scope.form = {};
                }
            });
        }


    };
    // ----------------FIM-----------------------
});

app.controller('FornecedorListar', function ($scope, $rootScope, DataService) {
    var idModalExclusao;
    $scope.lembretes = [];
    DataService.realizarGet('http://ifg.redesbrasil.com/fornecedores').then(function (response) {
        if (response.data.length) {
            $scope.lembretes = response.data;
            //console.log(response.data);
        } else {
            $scope.messagem = "Nenhum";
        }

    });

    $scope.exibirModal = function (id) {
        //data-target="#modal_default"
        //console.log(id,nome);
        //$scope.modalNome = nome;
        $rootScope.idModalExclusao = id;


        $('#modal_default').modal('show');

    };

    $scope.excluirFuncionario = function () {
        //var id = $rootScope.idModalExclusao;
        //console.log( $rootScope.idModalExclusao.pk_funcionario);
        DataService.realizarDelete('http://ifg.redesbrasil.com/fornecedores/' + $rootScope.idModalExclusao.pk_fornecedor).then(function (data) {
            var index = -1;
            var comArr = eval($scope.lembretes);
            var i;
            for (i = 0; i < comArr.length; i++) {
                if (comArr[0].nomes === $rootScope.idModalExclusao.nomes) {
                    index = 1;
                    break;
                }
                if (index === -1) {
                    console.log("adsasd");
                }

                $scope.lembretes.splice(index, 1);
            }


            // var indiceLista = $scope.lembretes.indexOf($rootScope.idModalExclusao);
            //$scope.lembretes.splice(indiceLista,1);

        });

    };


});


app.controller('FornecedorEditar', function ($scope, DataService, $stateParams, $rootScope) {
    $scope.form = {};
    var id = $stateParams.id;
    var idC;
    var nome;
    //console.log(id);
    DataService.realizarGet('http://ifg.redesbrasil.com/fornecedores/' + id).then(function (response) {
        // console.log(response,"vindo");
        $scope.form = {
            pk_fornecedor: response.data[0].pk_fornecedor,
            nome: response.data[0].nome,
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


        };

    });


});






