app.controller('Relatorio', function ($scope, $compile, $state, $rootScope, $localStorage, DataService, GeraTela, MudarCor) {
    MudarCor.mudarCor();
    $scope.relatoriosResultados = [];
    $scope.lembretes = [];
    DataService.realizarGet('relatorios').then(function (data) {
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
    $scope.botaoPDF = false;
    $scope.changeRelatorio = function () {
        $scope.botaoPDF = true;
        if ($scope.form.relatorio_id === 1) {
            $scope.nomeTabela = 'Relatorio contas a pagar por fornecedor';
            DataService.realizarGet('relatorios/' + $scope.form.relatorio_id).then(function (data) {
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
                if (data.data.status === 400) {
                    angular.element('#tabela').html("Nenhum resultado");
                }
                else {
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
                        ],
                        "MascaraValor": [
                            false,
                            false,
                            true
                        ]
                    };
                    //  angular.element('#add').html($compile(GeraTela.relatorioFinanceiro(myObj))($scope));
                    angular.element('#tabela').html($compile(GeraTela.tabelaRelatorio(objTable))($scope));
                }
            });
        }
        else if ($scope.form.relatorio_id === 2) {
            $scope.nomeTabela = 'Relatorio contas pagas por fornecedor';
            DataService.realizarGet('relatorios/' + $scope.form.relatorio_id).then(function (data) {
                if (data.data.status === 400) {
                    angular.element('#tabela').html("Nenhum resultado");
                }
                else {
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
                        ],
                        "MascaraValor": [
                            false,
                            false,
                            true
                        ]
                    };
                    angular.element('#tabela').html($compile(GeraTela.tabelaRelatorio(objTable))($scope));
                }
            });
        }
        else if ($scope.form.relatorio_id === 3) {
            $scope.nomeTabela = 'Relatorio a pagar por cliente';
            DataService.realizarGet('relatorios/' + $scope.form.relatorio_id).then(function (data) {
                if (data.data.status === 400) {
                    angular.element('#tabela').html("Nenhum resultado");
                }
                else {
                    $scope.lembretes = data.data;
                    var objTable = { // objeto onde se passa os nomes dos campo das tabelas e seus valores abaixo
                        "Nome": [
                            "ID",
                            "Nome",
                            "Valor"
                        ],
                        "Valor": [
                            "pk_cliente",
                            "nome",
                            "Valor"
                        ],
                        "MascaraValor": [
                            false,
                            false,
                            true
                        ]
                    };
                    angular.element('#tabela').html($compile(GeraTela.tabelaRelatorio(objTable))($scope));
                }
            });
        }
        else if ($scope.form.relatorio_id === 4) {
            $scope.nomeTabela = 'Relatorio contas pagas por cliente';
            DataService.realizarGet('relatorios/' + $scope.form.relatorio_id).then(function (data) {
                $scope.lembretes = data.data;
                var objTable = { // objeto onde se passa os nomes dos campo das tabelas e seus valores abaixo
                    "Nome": [
                        "ID",
                        "Nome",
                        "Valor"
                    ],
                    "Valor": [
                        "pk_cliente",
                        "nome",
                        "Valor"
                    ],
                    "MascaraValor": [
                        false,
                        false,
                        true
                    ]
                };
                angular.element('#tabela').html($compile(GeraTela.tabelaRelatorio(objTable))($scope));
            });
        }
        else if ($scope.form.relatorio_id === 5) {
            $scope.nomeTabela = 'Relatorio reparos a pagar';
            DataService.realizarGet('relatorios/' + $scope.form.relatorio_id).then(function (data) {
                if (data.data.status === 400) {
                    angular.element('#tabela').html("Nenhum resultado");
                }
                else {
                    $scope.lembretes = data.data;
                    var objTable = { // objeto onde se passa os nomes dos campo das tabelas e seus valores abaixo
                        "Nome": [
                            "ID",
                            "Descricao",
                            "Placa",
                            "Valor"
                        ],
                        "Valor": [
                            "fk_compra",
                            "descricao",
                            "placa",
                            "Valor"
                        ],
                        "MascaraValor": [
                            false,
                            false,
                            false,
                            true
                        ]
                    };
                    angular.element('#tabela').html($compile(GeraTela.tabelaRelatorio(objTable))($scope));
                }
            });
        }
        else if ($scope.form.relatorio_id === 6) {
            $scope.nomeTabela = 'Relatorio reparos pagos';
            DataService.realizarGet('relatorios/' + $scope.form.relatorio_id).then(function (data) {
                if (data.data.status === 400) {
                    angular.element('#tabela').html("Nenhum resultado");
                }
                else {
                    $scope.lembretes = data.data;
                    var objTable = { // objeto onde se passa os nomes dos campo das tabelas e seus valores abaixo
                        "Nome": [
                            "ID",
                            "Descricao",
                            "Placa",
                            "Valor"
                        ],
                        "Valor": [
                            "fk_compra",
                            "descricao",
                            "placa",
                            "Valor"
                        ],
                        "MascaraValor": [
                            false,
                            false,
                            false,
                            true
                        ]
                    };
                    angular.element('#tabela').html($compile(GeraTela.tabelaRelatorio(objTable))($scope));
                }
            });
        }
    }
    $scope.debug = {};
    $scope.open = function (e) {
        e.stopPropagation();
        $scope.debug[e.toElement.id] = true;
    }
});