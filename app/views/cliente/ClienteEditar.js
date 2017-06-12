
app.controller('ClienteEditar', function ($scope, $state, DataService, $stateParams, $rootScope) {
    $scope.form = {};
    var id = $stateParams.id;
    if (id == "") {
        $state.go('common.clienteListar');
    }
    console.log(id);

    DataService.realizarGet('http://ifg.redesbrasil.com/clientes/' + id).then(function (response) {
        console.log(response.data);
        $scope.form = {
            pk_cliente: response.data[0].pk_cliente,
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


    $scope.salvar = function () {
        $scope.form.cpf = $("#cpf").val();
        $scope.form.telefone = $("#telefone").val();
        $scope.form.celular = $("#celular").val();
        $scope.form.cep = $("#cep").val();

        if ($scope.form.cpf !== "" && $scope.form.telefone !== "" && $scope.form.celular !== "" && $scope.form.cep !== "") {
            $scope.formulario.$valid = true;

        };

        if ($scope.formulario.$valid) {
            $scope.botao = true; //para desativar o botão para que o usuario não faça varias requisções
            DataService.realizarPut('http://ifg.redesbrasil.com/clientes', $scope.form).then(function (response) {
                if (response.data.status == 400) {
                    $scope.botao = false;
                } else {
                    $scope.botao = true;
                    $scope.form = {};
                    $state.go('common.clienteListar');
                }
            });

        }
    };


});
