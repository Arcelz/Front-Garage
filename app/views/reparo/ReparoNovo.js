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
            if ($scope.formulario.$valid) {
                DataService.realizarPost('http://ifg.redesbrasil.com/reparos',$scope.form).then(function (data) {
                    console.log(data)
                });
            }
        }
})