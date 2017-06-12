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