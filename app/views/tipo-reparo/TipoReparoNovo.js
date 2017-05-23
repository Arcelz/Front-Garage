app.controller('ReparoTipoNovo', function ($scope, $rootScope, DataService) {
    $scope.salvar = function () {
        if ($scope.formulario.$valid) {
            $scope.botao = true;
            DataService.realizarPost('http://ifg.redesbrasil.com/tipos-reparos', $scope.form).then(function (data) {
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