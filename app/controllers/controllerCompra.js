app.controller('CompraNovo', function ($scope, $rootScope, DataService, $document, $window, $location) {
    $scope.fornecedoresResultados = []

    $scope.buscarFornecedor = function () {
        DataService.realizarGet('http://ifg.redesbrasil.com/fornecedores').then(function (response) {
            $scope.fornecedoresResultados = response.data;
        });

    }

    $scope.buscarFuncionario = function () {
        DataService.realizarGet('http://ifg.redesbrasil.com/funcionarios').then(function (response) {
            $scope.funcionariosResultados = response.data;
        });
    }

    $scope.adicionarFornecedor = function (teste) {
        $scope.form.nome = $("#selectBuscaFornecedor option:selected").text();
        $scope.form.fkFornecedor = $scope.form.buscaCampoFornecedor;
    }

    $scope.adicionarFuncionario = function () {
        $scope.form2.nome = $("#selectBuscaFuncionario option:selected").text();
        $scope.form2.fkFuncionario = $scope.form2.buscaCampoFuncionario;

    }
    $scope.pesquisarVeiculo = function () {
        // alert($scope.consulta);

        if ($scope.consulta == undefined || $scope.consulta == '') {
            $scope.vazio = true;
        } else {

            var obj = {
                consulta: $scope.consulta
            }
            DataService.realizarPost('http://ifg.redesbrasil.com/veiculos', obj).then(function (response) {

                if (response.data.status == 400) {
                    $scope.VeiculoPesquisa = {};
                    $scope.mensagem = response.data.message;
                } else {
                    $scope.mensagem = false;
                    $scope.VeiculoPesquisa = response.data;
                }

                console.log(response);
            });

        }


    }
    $scope.adicionarVeiculoCarrinho = function (veiculo) {

        $scope.VeiculoPesquisa = {};
        console.log(veiculo);
        $scope.painelCarrinho = true;
        // $scope.carrinhoVeiculos = veiculo;
        $scope.nome = veiculo.nome;
        $scope.placa = veiculo.placa;
        $scope.ano = veiculo.ano;
        $scope.valor_compra = veiculo.valor_compra;
        $scope.form = {
            fkVeiculo: veiculo.pk_veiculo,
            valor_compra: veiculo.valor_compra
        }
    };

    $scope.salvar = function () {
        if ($scope.formulario.$valid) {
            var objeto = {
                fkFornecedor: $scope.form.fkFornecedor,
                fkFuncionario: $scope.form2.fkFuncionario,
                valorCompra: $scope.form.valor_compra,
                fkVeiculo : $scope.form.fkVeiculo
            }
            console.log(objeto,"dados");
            DataService.realizarPost('http://ifg.redesbrasil.com/compras', objeto).then(function (response) {
                $scope.mensagem = response.data.message;          

                console.log(response);
            });

        }


        


    };


    $scope.validarInupt = function () {


        if ($scope.consulta == undefined) {
            $scope.vazio = true;
        } else {
            $scope.vazio = false;
        }

    }


});