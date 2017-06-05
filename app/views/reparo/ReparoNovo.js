app.controller('ReparoNovo', function ($scope, $state, $rootScope, $localStorage, DataService,MudarCor) {
    MudarCor.mudarCor();

    $scope.tiposResultados = {};
    $scope.veiculosResultados = {};
    DataService.realizarGet('http://ifg.redesbrasil.com/tipos-reparos').then(function (data) {
        $scope.tiposResultados = data.data;
    });
    DataService.realizarGet('http://ifg.redesbrasil.com/veiculos').then(function (data) {
        $scope.veiculosResultados = data.data;
    });
    $scope.salvar = function () {
        if ($scope.form.fkTipo === undefined || $scope.form.fkTipo === "") {
            $scope.form.fkTipo = $("#selectTipo option:selected").val();
        }
        if ($scope.formulario.$valid && $scope.form.fkTipo != "") {
            $scope.botao = true;
            DataService.realizarPost('http://ifg.redesbrasil.com/reparos', $scope.form).then(function (data) {
                console.log(data)
                if (data.data.status === 200) {
                    $state.go('common.reparoListar');
                }
                else if (data.data.status === 400) {
                    $scope.botao = false;
                }
            });
        }
    }
    $scope.salvarModalTipo = function () {
        if ($scope.modalFormulario.$valid) {
            DataService.realizarPost('http://ifg.redesbrasil.com/tipos-reparos', $scope.modal).then(function (data) {
                $scope.botao = false;
                angular.element('#selectTipo').append('<option  value="' + data.data.pk_tipo + '" selected>' + data.data.nome + '</option>');
                angular.element('#modal_tipo_reparo').modal('toggle');
            });
        }
    }
});