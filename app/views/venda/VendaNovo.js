app.controller('VendaNovo', function ($scope, $rootScope, DataService, $document, $window, $location, $compile, $state) {
    var objetoVenda;
    var valorTotalFinal = 0;
    var parcela;
    var condicao = false;

    $scope.fornecedoresResultados = []

    $scope.buscarCliente = function () {
        DataService.realizarGet('http://ifg.redesbrasil.com/clientes').then(function (response) {
            $scope.clientesResultados = response.data;
        });

    };

    $scope.buscarFuncionario = function () {
        DataService.realizarGet('http://ifg.redesbrasil.com/funcionarios').then(function (response) {
            $scope.funcionariosResultados = response.data;
        });
    };

    $scope.adicionarCliente = function (teste) {
        $scope.form2.nomeCliente = $("#selectBuscaCliente option:selected").text();
        $scope.form2.fkCliente = $scope.form2.buscaCampoCliente;
    };

    $scope.adicionarFuncionario = function () {
        $scope.form2.nome = $("#selectBuscaFuncionario option:selected").text();
        $scope.form2.fkFuncionario = $scope.form2.buscaCampoFuncionario;

    };
    $scope.pesquisarVeiculo = function () {
        // alert($scope.consulta);

        if ($scope.consulta == undefined || $scope.consulta == '') {
            $scope.vazio = true;
        } else {

            var obj = {
                consulta: $scope.consulta
            }
            DataService.realizarPost('http://ifg.redesbrasil.com/veiculos', obj).then(function (response) {

                console.log(response);
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


    };
    $scope.adicionarVeiculoCarrinho = function (veiculo) {

        $scope.VeiculoPesquisa = {};
        console.log(veiculo);
        $scope.painelCarrinho = true;
        // $scope.carrinhoVeiculos = veiculo;
        $scope.nome = veiculo.nome;
        $scope.placa = veiculo.placa;
        $scope.ano = veiculo.ano;
        $scope.form = {
            fkVeiculo: veiculo.pk_veiculo
        }
    };

    $scope.salvar = function () {
        if ($scope.formulario.$valid) {

            objetoVenda = {
                fkCliente: $scope.form2.fkCliente,
                fkFuncionario: $scope.form2.fkFuncionario,
                fkVeiculo: $scope.form.fkVeiculo,
                valorVenda: $scope.form.valorCompra
            }

            angular.element('#modal_parcelamento').modal('show');
        }
    };

    $scope.salvarVenda = function () {
        if (condicao) {
            parcela = 1
        } else {
            parcela = $("#selectParcela option:selected").val();
        }

        var dataCliente = {};
        dataCliente = $scope.modal;


        if (parcela == "") {
            parcela = 1;
        }
        var data = new Date();
        var objetoFinal = {
            'fkCliente': objetoVenda.fkCliente,
            'fkFuncionario': objetoVenda.fkFuncionario,
            'valorVenda': objetoVenda.valorVenda,
            'fkVeiculo': objetoVenda.fkVeiculo
        };
        var hora = data.getHours(),
            minutos = data.getMinutes(),
            segundos = data.getSeconds();

        for (i = 0; i < parcela; i++) {
            var dia = dataCliente['vencimento' + i].getDate(),
                mes = dataCliente['vencimento' + i].getMonth() + 1,
                ano = dataCliente['vencimento' + i].getFullYear();
            var vencimentoCliente = [ano, mes, dia].join('/') + ' ' + [hora, minutos, segundos].join(':');

            objetoFinal['vencimento' + i] = vencimentoCliente;
            objetoFinal['parcela'] = parcela;
        }
        objetoFinal['valorTotal'] = valorTotalFinal;

        DataService.realizarPost('http://ifg.redesbrasil.com/vendas', objetoFinal).then(function (response) {
            condicao = false;
            if (response.data.status == 400) {

            } else {
                angular.element('#modal_parcelamento').modal('hide');
                angular.element('#modal_parcelamento').hide();
                angular.element('.modal-backdrop').hide();
                angular.element("body").removeClass("modal-open");               
                $state.go('common.vendaListar');
            }

        });


    }


    $scope.addDinheiro = function () {
        condicao = true;
        var html = "";
        html +=
            "<div class='content-group-lg'> \n" +
            "<h6 class='text-semibold'></h6> \n" +
            "<div class='input-group'>\n" +
            "<span class='input-group-addon'><i class='icon-calendar'></i></span>\n" +
            "<input id='dataVencimento0'  ng-model='modal.vencimento0' placeholder='Selecione Data de Vencimento' class='form-control' ng-click='open0($event)' is-open='opened0' type='text' datepicker-popup='dd/M/yyyy' /> \n" +
            "</div> \n" +
            "</div>\n";

        $scope.valorTotal = objetoVenda.valorVenda;
        valorTotalFinal = objetoVenda.valorVenda;
        $scope.exibirValorTotal = true;
        $scope.exibirParcelas = false;
        angular.element('#exibirDatas').html($compile(html)($scope));


    };

    $scope.addParcelas = function () {
        condicao = false;
        $scope.exibirParcelas = true;

    };
    $scope.realizarCalculo = function () {
        parcela = $("#selectParcela option:selected").val();
        valorTotalFinal = objetoVenda.valorVenda / parcela;
        var html = "";

        for (var i = 0; i < parcela; i++) {
            html +=
                "<div class='content-group-lg'> \n" +
                "<h6 class='text-semibold'></h6> \n" +
                "<div class='input-group'>\n" +
                "<span class='input-group-addon'><i class='icon-calendar'></i></span>\n" +
                "<input id='dataVencimento" + i + "' ng-disabled='dataInput" + i + "' ng-model='modal.vencimento" + i + "' placeholder='Selecione a " + i + " Data de Vencimento' class='form-control' ng-click='open" + i + "($event)' is-open='opened" + i + "' type='text' datepicker-popup='dd/M/yyyy' /> \n" +
                "</div> \n" +
                "</div>\n";
        }

        angular.element('#exibirDatas').html($compile(html)($scope));
        $scope.dataInput0 = false;
        $scope.dataInput1 = true;
        $scope.dataInput2 = true;
        $scope.dataInput3 = true;
        $scope.dataInput4 = true;
        $scope.modal = {};
        $scope.valorTotal = valorTotalFinal;
        $scope.exibirValorTotal = true;

    };

    $scope.validarInupt = function (pesquisa) {

        if (pesquisa == "" || pesquisa == undefined) {
            $scope.vazio = true;
        } else {
            $scope.vazio = false;
            var obj = {
                consulta: $scope.consulta
            }
            DataService.realizarPost('http://ifg.redesbrasil.com/veiculos', obj).then(function (response) {

                console.log(response);
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

        /* if ($scope.consulta == undefined) {
             $scope.vazio = true;
         } else {
             $scope.vazio = false;
         }*/

    };

    $scope.open0 = function (e) {
        e.stopPropagation();
        $scope.opened0 = true;
        $scope.dataInput1 = false;
    }
    $scope.open1 = function (e) {
        e.stopPropagation();
        $scope.opened1 = true;
        $scope.dataInput2 = false;

    }
    $scope.open2 = function (e) {
        e.stopPropagation();
        $scope.opened2 = true;
        $scope.dataInput3 = false;
    }
    $scope.open3 = function (e) {
        e.stopPropagation();
        $scope.opened3 = true;
        $scope.dataInput4 = false;
    }
    $scope.open4 = function (e) {
        e.stopPropagation();
        $scope.opened4 = true;
    }

    $scope.verificarData = function (e) {
        console.log($scope.modal);
        if ($scope.modal.vencimento1 < $scope.modal.vencimento0) {
            alert("A Data de Vencimento não pode ser menor que a Anterior");
            // $('#dataVencimento1').datepicker('setDate', null);
            var $data = $('#dataVencimento1').datepicker();
            //$('#dataVencimento1').val('').datepicker('update');
            $data.datepicker('setDate', null);

        } else {
            $scope.dataInput2 = false;
        }
        if ($scope.modal.vencimento2 < $scope.modal.vencimento1) {
            alert("A Data de Vencimento não pode ser menor que a Anterior");
            $scope.modal.vencimento2 = {};

        } else {

            $scope.dataInput3 = false;
        }
        if ($scope.modal.vencimento3 < $scope.modal.vencimento2) {
            alert("A Data de Vencimento não pode ser menor que a Anterior");
            $scope.modal.vencimento3 = {};

        } else {

            $scope.dataInput4 = false;
        }
        if ($scope.modal.vencimento4 < $scope.modal.vencimento3) {
            alert("A Data de Vencimento não pode ser menor que a Anterior");
            $scope.modal.vencimento4 = {};
        }

    }




});