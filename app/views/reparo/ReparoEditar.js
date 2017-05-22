app.controller('ReparoEditar', function ($scope, $state, $q, DataService, $stateParams, $rootScope) {
    $scope.form = {};
    var id = $stateParams.id; //pega o paramentro informado na url
    $scope.veiculosResultados = [];
    $scope.tiposResultados = [];

    DataService.realizarGet('http://ifg.redesbrasil.com/veiculos').then(function (data) {
        $scope.veiculosResultados = data.data;
        DataService.realizarGet('http://ifg.redesbrasil.com/tipos-reparos').then(function (data2) {
            $scope.tiposResultados = data2.data;
            var clicked = true;
            var clickedVeiculo = true;
            DataService.realizarGet('http://ifg.redesbrasil.com/reparos/' + id).then(function (response) {
                console.log(response)
                DataService.realizarGet('http://ifg.redesbrasil.com/veiculos/' + response.data[0].fk_veiculo).then(function (data) {
                    angular.element('#selectVeiculo').append('<option  value="' + data.data[0].pk_veiculo + '" selected>Modelo: ' + data.data[0].nomeModelo + ' Placa: ' + data.data[0].placa + '</option>');
                });
                DataService.realizarGet('http://ifg.redesbrasil.com/tipos-reparos/' + response.data[0].fk_tipos).then(function (data2) {
                    angular.element('#selectTipo').append('<option  value="' + data2.data[0].pk_tipo + '" selected>' + data2.data[0].nome + '</option>');
                });
                $scope.form.valor = parseInt(response.data[0].valor);
                $scope.form.descricao = response.data[0].descricao;

                $scope.loadVeiculos = function () {
                    if (clickedVeiculo) {
                        clickedVeiculo = false;
                        $(".select2-results__option.select2-results__option--highlighted").remove();
                        $("#selectVeiculo option[value=" + response.data[0].fk_veiculo + "]").remove();
                    }
                }
                $scope.loadTipos = function () {
                    if (clicked) {
                        clicked = false;
                        $(".select2-results__option.select2-results__option--highlighted").remove();
                        $("#selectTipo option[value=" + response.data[0].fk_tipos + "]").remove();
                    }
                }
            });
        });
    });


    $scope.salvar = function () {
        if ($scope.form.fkTipo === undefined || $scope.form.fkTipo === "") {
            $scope.form.fkTipo = $("#selectTipo option:selected").val();
        }
        if ($scope.form.fkVeiculo === undefined || $scope.form.fkVeiculo === "") {
            $scope.form.fkVeiculo = $("#selectVeiculo option:selected").val();
        }
        if ($scope.form.fkVeiculo != "" && $scope.form.fkTipo != "") {
            console.log($scope.form)
            DataService.realizarPut('http://ifg.redesbrasil.com/reparos/' + id, $scope.form).then(function (response) {
                console.log(response)
                $scope.botao = false;
                $state.go('common.reparoListar');
            });
        }
    }
});