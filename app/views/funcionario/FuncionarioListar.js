app.controller('FuncionarioListar', function (AuthService, jwtHelper,$scope, $rootScope, DataService) {
    var funcionarioModalExclusao; // variavel para pegar todos os dados. 
    $scope.lembretes = [];
    var indexRemover;
    var idModalExclusao;

     var token = AuthService.getToken();
    
    var permicao = jwtHelper.decodeToken(token)['Permição'];
    $scope.permicaoJSON = {};
    for (i = 0; i < permicao.length; i++) {
        if (permicao[i] === '10D') {
            $scope.permicaoJSON['funcionario'] = true;
            $scope.permicaoJSON['funcionarioDeletar'] = true;
        }
        if (permicao[i] === '10C') {
            $scope.permicaoJSON['funcionario'] = true;
            $scope.permicaoJSON['funcionarioEditar'] = true;
        }
    }

    DataService.realizarGet('funcionarios').then(function (response) {
        if (response.data.length) {
            $scope.lembretes = response.data; //aqui alimenta o array que preenche a tela

        } else {
            $scope.messagem = "Nenhum";
        }

    });

    //funcção para exibir o modal 
    $scope.exibirModal = function (id, index, nome) {
        $rootScope.indexRemover = index;
        $scope.modulo = 'FUNCIONARIO';
        $scope.modulo_nome = nome;
        $rootScope.idModalExclusao = id;
        angular.element('#modal_excluir').modal();

    };
    // ----------------FIM-----------------------

    // função para excluir o funcionario
    $scope.modalExcluir = function () {

        DataService.realizarDelete('funcionarios/' + $rootScope.idModalExclusao).then(function (data) {


            $scope.lembretes.splice($rootScope.indexRemover, 1);
            angular.element('#modal_excluir').modal('toggle');

        });

    };
    // ----------------FIM-----------------------

});