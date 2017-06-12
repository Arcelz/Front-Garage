
app.controller('ClienteListar', function ($scope, $rootScope, DataService,AuthService, jwtHelper) {
    var idModalExclusao;
    var indexRemover;
    $scope.lembretes = [];


    var token = AuthService.getToken();

    var permicao = jwtHelper.decodeToken(token)['Permição'];
    $scope.permicaoJSON = {};
    for (i = 0; i < permicao.length; i++) {
        if (permicao[i] === '2D') {
            $scope.permicaoJSON['cliente'] = true;
            $scope.permicaoJSON['clienteDeletar'] = true;
        }
        if (permicao[i] === '2C') {
            $scope.permicaoJSON['cliente'] = true;
            $scope.permicaoJSON['clienteEditar'] = true;
        }
    }

    DataService.realizarGet('http://ifg.redesbrasil.com/clientes').then(function (response) {
        if (response.data.length) {
            $scope.lembretes = response.data;
            //console.log(response.data);
        } else {
            $scope.messagem = "Nenhum";
        }

    });

    $scope.exibirModal = function (id, index, nome) {
        indexRemover = index;
        $scope.modulo = 'CLIENTE'
        $scope.modulo_nome = nome;
        $rootScope.idModalExclusao = id;
        angular.element('#modal_excluir').modal();

    };

    $scope.modalExcluir = function () {

        DataService.realizarDelete('http://ifg.redesbrasil.com/clientes/' + $rootScope.idModalExclusao).then(function (data) {
            $scope.lembretes.splice(indexRemover, 1);
            angular.element('#modal_excluir').modal('toggle');

        });

    };


});