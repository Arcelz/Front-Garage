app.controller('ReparoTipoEditar', function ($scope, $state, $q, DataService, $stateParams, $rootScope) {
    $scope.form = {};
    var id = $stateParams.id; //pega o paramentro informado na url
    if (id === "") {
        $state.go('common.tipoReparoListar');
    }
    DataService.realizarGet('tipos-reparos/' + id).then(function (data) {
        $scope.form.nome = data.data[0].nome;
    });
    $scope.salvar = function () {
        if ($scope.formulario.$valid) {
            $scope.botao = true;
            DataService.realizarPut('tipos-reparos/' + id, $scope.form).then(function (response) {
                if (response.data.status === 200) {
                    $state.go('common.tipoReparoListar');
                }
                else if (response.data.status === 400) {
                    $scope.botao = false;
                }
            });
        }
    }
});