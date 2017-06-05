app.controller('ReparoTipoNovo', function ($scope, $state, $rootScope, DataService) {
    $scope.salvar = function () {
        if ($scope.formulario.$valid) {
            $scope.botao = true;
            DataService.realizarPost('http://ifg.redesbrasil.com/tipos-reparos', $scope.form).then(function (data) {
                console.log(data)

                if (data.data.status === 200) {
                    $state.go('common.tipoReparoListar');
                }
                else if (data.data.status === 400) {
                    $scope.botao = false;
                }
            });
        }
    }
});