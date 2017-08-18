app.controller('GrupoEditar', function ($scope, $state, $q, DataService, $stateParams, $rootScope) {
    $scope.form = {};
    var id = $stateParams.id; //pega o paramentro informado na url
    if (id === "") {
        $state.go('common.grupoListar');
    }
    DataService.realizarGet('grupos/' + id).then(function (data) {
        console.log(data.data);
        $scope.form.nome = data.data[0].nome;
        $scope.form.descricao = data.data[0].descricao;
    });
    $scope.salvar = function () {
        if ($scope.formulario.$valid) {
            $scope.botao = true;
            DataService.realizarPut('grupos/' + id, $scope.form).then(function (response) {
                if (response.data.status === 200) {
                    $state.go('common.grupoListar');
                }
                else if (response.data.status === 400) {
                    $scope.botao = false;
                }
            });
        }
    }
});