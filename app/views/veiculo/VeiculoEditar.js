app.controller('VeiculoEditar', function ($scope, $rootScope,$stateParams, DataService, $state) {
    $scope.form = {};
    var id = $stateParams.id; //pega o paramentro informado na url
    $scope.resultadosVeiculos = [];

    if (id ===""){
        $state.go('common.veiculoListar')
    }
  

    DataService.realizarGet('veiculos/' + id).then(function (response) {

        $scope.form = {
            pk_veiculo: response.data[0].pk_veiculo,
            ano: response.data[0].ano,
            placa: response.data[0].placa,
            valorCompra: response.data[0].valor_compra
        }
        
        $("#selectCategoria option[value='string:" + response.data[0].pk_tipo + "']").remove();
        $("#selectMarca option[value='string:" + response.data[0].pk_marca + "']").remove();
        $("#selectModelo option[value='string:" + response.data[0].pk_modelo + "']").remove();

        angular.element('#selectCategoria').append('<option   label="' + response.data[0].nome + '" value="' + response.data[0].pk_tipo + '" selected="selected">' + response.data[0].nome + '</option>');
        angular.element('#selectMarca').append('<option   label="' + response.data[0].nomeMarca + '" value="' + response.data[0].pk_marca + '" selected="selected">' + response.data[0].nomeMarca + '</option>');
        angular.element('#selectModelo').append('<option   label="' + response.data[0].nomeModelo + '" value="' + response.data[0].pk_modelo + '" selected="selected">' + response.data[0].nomeModelo + '</option>');

       
    });




});