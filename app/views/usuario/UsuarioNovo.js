app.controller('UsuarioNovo', function ($scope,$state, $rootScope,MudarCor, DataService) {
    MudarCor.mudarCor();
    $scope.funcionarioResultados = {};
    DataService.realizarGet('funcionarios').then(function (data) {
        $scope.funcionarioResultados = data.data;
        console.log(data.data);
    });
    $scope.grupoResultados = {};
    DataService.realizarGet('grupos').then(function (data) {
        $scope.grupoResultados = data.data;
        console.log(data.data);
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
                $scope.botao = true;
                DataService.realizarPost('usuarios',$scope.form).then(function (data) {
                    if (data.data.status === 200) {
                        $state.go('common.usuarioListar');
                    }
                    else if (data.data.status === 400) {
                        $scope.botao = false;
                    }
                });
            }
        }

})