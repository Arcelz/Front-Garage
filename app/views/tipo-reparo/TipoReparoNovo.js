app.controller('ReparoTipoNovo', function ($scope, $rootScope, DataService) {
    $scope.salvar = function () {
            if ($scope.formulario.$valid) {
                DataService.realizarPost('http://ifg.redesbrasil.com/tipos-reparos',$scope.form).then(function (data) {
                    console.log(data)
                });
            }
        }
});