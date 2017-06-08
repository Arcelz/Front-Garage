app.controller('ReparoEditar', function ($scope, $state, $q, $stateParams, DataService, MudarCor) {
    MudarCor.mudarCor();

    $scope.form = {};
    var id = $stateParams.id; //pega o paramentro informado na url
    if (id === "") {
        $state.go('common.reparoListar');
    }
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
                $scope.form.valor = response.data[0].valor;
                $scope.form.descricao = response.data[0].descricao;
                $scope.formulario.tipo.$error.required = false;
                $scope.formulario.veiculo.$error.required = false;
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
            $scope.botao = true;
            DataService.realizarPut('http://ifg.redesbrasil.com/reparos/' + id, $scope.form).then(function (response) {
                if (response.data.status === 200) {
                    $state.go('common.reparoListar');
                }
                else if (response.data.status === 400) {
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