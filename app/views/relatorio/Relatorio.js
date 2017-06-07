app.controller('Relatorio', function ($scope, $compile, $state, $rootScope, $localStorage, DataService, GeraTela, MudarCor) {
    MudarCor.mudarCor();
    $scope.relatoriosResultados = [];
    $scope.lembretes = [];
    DataService.realizarGet('http://ifg.redesbrasil.com/relatorios').then(function (data) {
        for (var i = 0; i < data.data.length; i++) {
            $scope.relatoriosResultados.push({
                id: i + 1,
                nome: data.data[i]
            });
        }
    });
    var arrayNomes = [];
    var tipo = [];
    var nomeCampo = [];
    $scope.changeRelatorio = function () {
        if ($scope.form.relatorio_id === 1) {
            DataService.realizarGet('http://ifg.redesbrasil.com/relatorios/' + $scope.form.relatorio_id).then(function (data) {
                $scope.lembretes = data.data;
                $scope.nomeTabela = 'Relatorio contas a pagar por fornecedor';
                /*var myObj = {
                    "Nome": [  //nome onde sera colocado no ng-model e no id
                        "Data1",
                        "Data2",
                        "Numero"
                    ],
                    "Tipo": [ // tipo do campo a ser criado
                        "Data",
                        "Data",
                        "Numero"
                    ],
                    "Campo": [ // nome do label
                        "De",
                        "Ate",
                        "Valor"
                    ]
                };*/
                var objTable = { // objeto onde se passa os nomes dos campo das tabelas e seus valores abaixo
                    "Nome": [
                        "ID",
                        "Nome",
                        "Valor"
                    ],
                    "Valor": [
                        "pk_fornecedor",
                        "nome",
                        "Valor"
                    ]
                };
              //  angular.element('#add').html($compile(GeraTela.relatorioFinanceiro(myObj))($scope));
                angular.element('#tabela').html($compile(GeraTela.tabelaRelatorio(objTable))($scope));
            });
        }
        else if ($scope.form.relatorio_id === 2) {
            $scope.nomeTabela = 'Relatorio contas pagas por fornecedor';
            DataService.realizarGet('http://ifg.redesbrasil.com/relatorios/' + $scope.form.relatorio_id).then(function (data) {
                $scope.lembretes = data.data;
                var objTable = { // objeto onde se passa os nomes dos campo das tabelas e seus valores abaixo
                    "Nome": [
                        "ID",
                        "Nome",
                        "Valor"
                    ],
                    "Valor": [
                        "pk_fornecedor",
                        "nome",
                        "Valor"
                    ]
                };
                angular.element('#tabela').html($compile(GeraTela.tabelaRelatorio(objTable))($scope));
            });
        }
    }
    $scope.debug = {};
    $scope.open = function (e) {
        e.stopPropagation();
        $scope.debug[e.toElement.id] = true;
    }
});