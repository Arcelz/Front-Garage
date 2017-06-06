app.controller('Relatorio', function ($scope, $compile, $state, $rootScope, $localStorage, DataService, GeraTela, MudarCor) {
    MudarCor.mudarCor();
    $scope.relatoriosResultados = [];
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
        console.log($scope.form.relatorio_id);
        if ($scope.form.relatorio_id === 1) {
           var  myObj = {
                "Nome": [  //nome onde sera colocado no ng-model e no id
                    "Ford",
                    "BMW",
                    "Fiat"
                ],
                "Tipo":[ // tipo do campo a ser criado
                    "Data",
                    "Data",
                    "Texto"
                ],
               "Campo":[ // nome do label
                   "De",
                   "Ate",
                   "Quando"
               ]
            };
            console.log(GeraTela.tabelaRelatorio())
            angular.element('#add').html($compile(GeraTela.relatorioFinanceiro(myObj))($scope));
            angular.element('#tabela').html($compile(GeraTela.tabelaRelatorio())($scope));
        }
        else if ($scope.form.relatorio_id === 2) {
            angular.element('#add').html($compile(GeraTela.relatorioFinanceiro())($scope));
        }
    }
    $scope.debug = {};
    $scope.open = function (e) {
        e.stopPropagation();
        $scope.debug[e.toElement.id] = true;
    }
});