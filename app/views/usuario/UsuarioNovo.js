app.controller('UsuarioNovo', function ($scope, $rootScope, DataService) {
    $scope.funcionarioResultados = {};
    DataService.realizarGet('http://ifg.redesbrasil.com/funcionarios').then(function (data) {
        $scope.funcionarioResultados = data.data;
    });
    $scope.grupoResultados = {};
    DataService.realizarGet('http://ifg.redesbrasil.com/grupos').then(function (data) {
        $scope.grupoResultados = data.data;
    });
    $scope.onBlur = function (form) {
        if ($scope.form.senha2 != undefined) {
            if ($scope.form.senha != $scope.form.senha2) {
                form.senha2.$error.validationError = true;
            }
            else {
                form.senha2.$error.validationError = false;
            }
        }
        $scope.verificarSenha = function (form) {
            if ($scope.form.senha != $scope.form.senha2) {
                form.senha2.$error.validationError = true;
            }
            else {
                form.senha2.$error.validationError = false;
            }
        }
    }
    $scope.salvar = function () {
            if ($scope.formulario.$valid) {
                DataService.realizarPost('http://ifg.redesbrasil.com/usuarios',$scope.form).then(function (data) {
                    $scope.botao = false;
                    $state.go('common.usuarioListar');
                });
            }
        }

})