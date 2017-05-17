app.controller('UsuarioEditar', function ($scope,$state, $q, DataService, $stateParams, $rootScope) {
    $scope.form = {};
    var id = $stateParams.id; //pega o paramentro informado na url
    $scope.funcionarioResultados = [];
    var deferred = $q.defer();
    var resultadoGrupo;
    DataService.realizarGet('http://ifg.redesbrasil.com/funcionarios').then(function (data) {
        deferred.resolve(data);
    });
    DataService.realizarGet('http://ifg.redesbrasil.com/grupos').then(function (data) {
        resultadoGrupo = data.data;
    });
    $scope.grupoResultados = [];
    var clicked = true;
    var clickedGrupo = true;
    DataService.realizarGet('http://ifg.redesbrasil.com/usuarios/' + id).then(function (response) {

        $scope.form.login = response.data[0].login;
        $scope.form.senha2 = '**********';
        $scope.form.senha = '**********';

        angular.element('#renderedCombo2').append('<option  value="' + response.data[0].pk_funcionario + '" selected>' + response.data[0].f_nome + '</option>');
        angular.element('#renderedCombo3').append('<option  value="' + response.data[0].pk_grupo + '" selected>' + response.data[0].g_nome + '</option>');

        deferred.promise.then(function (resolve) {
            $scope.loadFuncionarios = function () {
                if (clicked) {
                    $scope.funcionarioResultados = resolve.data;
                    clicked = false;
                    $("#renderedCombo2 option[value=" + response.data[0].pk_funcionario + "]").remove();
                }
            }
            $scope.loadGrupos = function () {
                if (clickedGrupo) {
                    $scope.grupoResultados = resultadoGrupo;
                    clickedGrupo = false;
                    $("#renderedCombo3 option[value=" + response.data[0].pk_grupo + "]").remove();
                }
            }
        }, function (reject) {
            alert('Erro: ' + reject);
        });
    });
    $scope.salvar = function () {
        $scope.form.funcionario_id = $("#renderedCombo2 option:selected").val();
        $scope.form.grupo_id = $("#renderedCombo3 option:selected").val();
        console.log($scope.form)
        DataService.realizarPut('http://ifg.redesbrasil.com/usuarios/' + id, $scope.form).then(function (response) {
            console.log(response)
            $scope.botao = false;
            $state.go('home');
        })
    }
})