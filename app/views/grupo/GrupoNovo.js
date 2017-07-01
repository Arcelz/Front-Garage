app.controller('GrupoSalvar', function ($scope,$state, $rootScope, DataService) {
    $scope.salvar = function () {
        console.log($scope.formulario.$valid)
        if ($scope.formulario.$valid) {
            $scope.botao = true;
            DataService.realizarPost('grupos', $scope.form).then(function (data) {
                if (data.data.status === 200) {
                    $state.go('common.grupoListar');
                }
                else if (data.data.status === 400) {
                    $scope.botao = false;
                }
            });
        }
    }
});