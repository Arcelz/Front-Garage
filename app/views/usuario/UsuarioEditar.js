app.controller('UsuarioEditar', function ($scope, $state, $q, DataService, $stateParams, $rootScope) {
    $scope.form = {};
    var id = $stateParams.id; //pega o paramentro informado na url
    if (id === "") {
        $state.go('common.usuarioListar');
    }
    $scope.funcionarioResultados = [];
    $scope.grupoResultados = [];
    DataService.realizarGet('http://ifg.redesbrasil.com/funcionarios').then(function (data) {
        $scope.funcionarioResultados = data.data;
        DataService.realizarGet('http://ifg.redesbrasil.com/grupos').then(function (data2) {
            $scope.grupoResultados = data2.data;
            var clicked = true;
            var clickedGrupo = true;
            DataService.realizarGet('http://ifg.redesbrasil.com/usuarios/' + id).then(function (response) {
                $scope.form.login = response.data[0].login;
                $scope.form.senha2 = '**********';
                $scope.form.senha = '**********';
                angular.element('#renderedCombo2').append('<option  value="' + response.data[0].pk_funcionario + '" selected>' + response.data[0].f_nome + '</option>');
                angular.element('#renderedCombo3').append('<option  value="' + response.data[0].pk_grupo + '" selected>' + response.data[0].g_nome + '</option>');
                $scope.loadGrupos = function () {
                    if (clickedGrupo) {
                        clickedGrupo = false;
                        $(".select2-results__option.select2-results__option--highlighted").remove();
                        $("#renderedCombo3 option[value=" + response.data[0].pk_grupo + "]").remove();
                    }
                }
                $scope.loadFuncionarios = function () {
                    if (clicked) {
                        clicked = false;
                        $(".select2-results__option.select2-results__option--highlighted").remove();
                        $("#renderedCombo2 option[value=" + response.data[0].pk_funcionario + "]").remove();
                    }
                }
            });
        });
    });
    $scope.salvar = function () {
        if ($scope.form.funcionario_id === undefined || $scope.form.funcionario_id === "?") {
            $scope.form.funcionario_id = $("#renderedCombo2 option:selected").val();
        }
        if ($scope.form.grupo_id === undefined || $scope.form.grupo_id === "") {
            $scope.form.grupo_id = $("#renderedCombo3 option:selected").val();
        }
        console.log($scope.form)
        if ($scope.form.funcionario_id != "" && $scope.form.grupo_id != "") {
            $scope.botao = true;
            DataService.realizarPut('http://ifg.redesbrasil.com/usuarios/' + id, $scope.form).then(function (response) {
                if (response.data.status === 200) {
                    $state.go('common.usuarioListar');
                }
                else if (response.data.status === 400) {
                    $scope.botao = false;
                }
            })
        }
    }
});