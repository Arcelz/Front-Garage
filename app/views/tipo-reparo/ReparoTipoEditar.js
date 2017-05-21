app.controller('ReparoTipoEditar', function ($scope, $state, $q, DataService, $stateParams, $rootScope) {
    $scope.form = {};
    var id = $stateParams.id; //pega o paramentro informado na url

    DataService.realizarGet('http://ifg.redesbrasil.com/tipos-reparos/' + id).then(function (data) {
        $scope.form.nome = data.data[0].nome;
    });


    $scope.salvar = function () {
        if ($scope.formulario.$valid) {
            DataService.realizarPut('http://ifg.redesbrasil.com/tipos-reparos/' + id, $scope.form).then(function (response) {
                console.log(response)
                $scope.botao = false;
                $state.go('common.tipoReparoListar');
            })
        }

    }
});