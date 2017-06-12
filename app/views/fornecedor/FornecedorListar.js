app.controller('FornecedorListar', function ($scope, $rootScope, DataService,AuthService, jwtHelper) {
    var idModalExclusao;
    var indexRemover;
    $scope.lembretes = [];

     var token = AuthService.getToken();
    
    var permicao = jwtHelper.decodeToken(token)['Permição'];
    $scope.permicaoJSON = {};
    for (i = 0; i < permicao.length; i++) {
        if (permicao[i] === '8D') {
            $scope.permicaoJSON['fornecedor'] = true;
            $scope.permicaoJSON['fornecedorDeletar'] = true;
        }
        if (permicao[i] === '8C') {
            $scope.permicaoJSON['fornecedor'] = true;
            $scope.permicaoJSON['fornecedorEditar'] = true;
        }
    }

    DataService.realizarGet('http://ifg.redesbrasil.com/fornecedores').then(function (response) {
        if (response.data.length) {
            $scope.lembretes = response.data;
            //console.log(response.data);
        } else {
            $scope.messagem = "Nenhum";
        }

    });

    $scope.exibirModal = function (id, index,nome) {
        $rootScope.indexRemover = index;
        $scope.modulo = 'FORNECEDOR';
        $scope.modulo_nome = nome;
        $rootScope.idModalExclusao = id;
        angular.element('#modal_excluir').modal();

    };

    $scope.modalExcluir = function () {

        DataService.realizarDelete('http://ifg.redesbrasil.com/fornecedores/' + $rootScope.idModalExclusao).then(function (data) {


            $scope.lembretes.splice($rootScope.indexRemover, 1);
            angular.element('#modal_excluir').modal('toggle');



        });

    };


});
