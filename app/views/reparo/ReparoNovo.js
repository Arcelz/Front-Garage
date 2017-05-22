app.controller('ReparoNovo', function ($scope, $rootScope, DataService) {
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
        if ($scope.formulario.$valid) {
            DataService.realizarPost('http://ifg.redesbrasil.com/reparos', $scope.form).then(function (data) {
                console.log(data)
            });
        }
        console.log($scope.form)

    }
    $scope.salvarModalTipo = function () {
        if ($scope.modalFormulario.$valid) {
            DataService.realizarPost('http://ifg.redesbrasil.com/tipos-reparos', $scope.modal).then(function (data) {
                console.log(data)
                angular.element('#selectTipo').append('<option  value="' + data.data.pk_tipo + '" selected>' + data.data.nome + '</option>');
            });
        }
    }
});