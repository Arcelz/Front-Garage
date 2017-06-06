app.controller('CompraNovo', function ($scope, $rootScope, DataService, $document, $window, $location, $compile, $state) {
    var objetoCompra;
    var valorTotalFinal = 0;
    var parcela;
    var condicao = false;

    $scope.fornecedoresResultados = []

    $scope.buscarFornecedor = function () {
        DataService.realizarGet('http://ifg.redesbrasil.com/fornecedores').then(function (response) {
            $scope.fornecedoresResultados = response.data;
        });

    };

    $scope.buscarFuncionario = function () {
        DataService.realizarGet('http://ifg.redesbrasil.com/funcionarios').then(function (response) {
            $scope.funcionariosResultados = response.data;
        });
    };

    $scope.adicionarFornecedor = function (teste) {
        $scope.form2.nomeFornecedor = $("#selectBuscaFornecedor option:selected").text();
        $scope.form2.fkFornecedor = $scope.form2.buscaCampoFornecedor;
    };

    $scope.adicionarFuncionario = function () {
        $scope.form2.nome = $("#selectBuscaFuncionario option:selected").text();
        $scope.form2.fkFuncionario = $scope.form2.buscaCampoFuncionario;

    };

    $scope.buscaTipo = function () {
        DataService.realizarGet('http://ifg.redesbrasil.com/tipos-veiculos').then(function (data) {
            $scope.buscasTipos = data.data;
        });
    };

    $scope.buscaMarca = function () {
        DataService.realizarGet('http://ifg.redesbrasil.com/marcas').then(function (data) {
            $scope.buscasMarcas = data.data;
        });
    };

    $scope.buscaModelo = function () {
        DataService.realizarGet('http://ifg.redesbrasil.com/modelos').then(function (data) {
            $scope.buscasModelos = data.data;
        });

    };


    $scope.salvar = function () {
        if ($scope.form.fkModelo === undefined || $scope.form.fkModelo === "") {
            $scope.form.fkModelo = $("#selectModelo option:selected").val();
        }
        if ($scope.form.fkMarca === undefined || $scope.form.fkMarca === "") {
            $scope.form.fkMarca = $("#selectMarca option:selected").val();
        }
        if ($scope.form.fkTipo === undefined || $scope.form.fkTipo === "") {
            $scope.form.fkTipo = $("#selectCategoria option:selected").val();
        }

        if ($scope.formulario.$valid && $scope.form.fkMarca != "" && $scope.form.fkMarca != "" && $scope.form.fkTipo != "") {
            objetoCompra = {
                fkFornecedor: $scope.form2.fkFornecedor,
                fkFuncionario: $scope.form2.fkFuncionario,                
                placa: $scope.form.placa,
                fkTipo: $scope.form.fkTipo,
                fkMarca: $scope.form.fkMarca,
                fkModelo: $scope.form.fkModelo,
                ano: $scope.form.ano,
                valorCompra: $scope.form.valorCompra
            }
            
            angular.element('#modal_parcelamento').modal('show');
        }
    };

    $scope.salvarCompra = function () {
        if (condicao) {
            parcela = 1
        } else {
            parcela = $("#selectParcela option:selected").val();
        }

        //ESTE BLOCO PEGA AS DATAS NO MODAL E COLOCA NO ARRAY
        var dataCliente = {};
        dataCliente = $scope.modal;
        //---- FIM ----

        var data = new Date();
       
        var hora = data.getHours(),
            minutos = data.getMinutes(),
            segundos = data.getSeconds();

        for (i = 0; i < parcela; i++) {
            var dia = dataCliente['vencimento' + i].getDate(),
                mes = dataCliente['vencimento' + i].getMonth() + 1,
                ano = dataCliente['vencimento' + i].getFullYear();
            var vencimentoCliente = [ano, mes, dia].join('/') + ' ' + [hora, minutos, segundos].join(':');

            objetoCompra['vencimento' + i] = vencimentoCliente;
            objetoCompra['parcela'] = parcela;
        }
        objetoCompra['valorTotal'] = valorTotalFinal;

         DataService.realizarPost('http://ifg.redesbrasil.com/compras', objetoCompra).then(function (response) {
              condicao = false;
              if (response.data.status == 400) {
  
              } else {
                  angular.element('#modal_parcelamento').modal('hide');
                  angular.element('#modal_parcelamento').hide();
                  angular.element('.modal-backdrop').hide();
                  angular.element("body").removeClass("modal-open");
  
                  $state.go('common.compraListar');
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

        $scope.valorTotal = objetoCompra.valorCompra;
        valorTotalFinal = objetoCompra.valorCompra;
        $scope.exibirValorTotal = true;
        $scope.exibirParcelas = false;
        angular.element('#exibirDatas').html($compile(html)($scope));


    };

    $scope.addParcelas = function () {
        condicao = false;
        $scope.exibirParcelas = true;

    };
    $scope.realizarCalculo = function () {
        parcela = $("#selectParcela option:selected").val(); //pega a parcela no select
        valorTotalFinal = objetoCompra.valorCompra / parcela;
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
        console.log(pesquisa.length);
        if (pesquisa == "" || pesquisa == undefined) {
            $scope.vazio = true;
        } else {
            $scope.vazio = false;
            var obj = {
                consulta: $scope.consulta
            }
            if (pesquisa.length >= 2) {
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


        }


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



    $scope.salvarModal = function () {


        if ($scope.modalMarcaFormulario === undefined) {


        } else if ($scope.modalMarcaFormulario.$valid) {
            var obj = {
                nome: $scope.modal.nome
            };

            DataService.realizarPost('http://ifg.redesbrasil.com/marcas', obj).then(function (data) {

                $scope.select = angular.element(document.querySelector('#selectMarca'));
                $scope.select.append('<option selected  label="' + data.data.nome + '" value="' + data.data.pk_marca + '"  >' + data.data.nome + '</option>');//inseri o novo cargo no final

            });

            $scope.modal.nome = "";

            $('#modal_form_marca').modal('toggle');
        }

        if ($scope.modalCategoriaFormulario === undefined) {

        } else if ($scope.modalCategoriaFormulario.$valid) {
            var obj = {
                nome: $scope.modal.nome
            };
            DataService.realizarPost('http://ifg.redesbrasil.com/tipos-veiculos', obj).then(function (data) {
                $scope.mensagem = data.data.message;
                $scope.select = angular.element(document.querySelector('#selectCategoria'));
                $scope.select.append('<option selected  label="' + data.data.nome + '" value="' + data.data.pk_tipo + '"  >' + data.data.nome + '</option>');//inseri o novo cargo no final
                $scope.fkMarca.$error.required = false;
            });
            $scope.modal.nome = "";
            $('#modal_form_categoria').modal('toggle');
        }

        if ($scope.modalModeloFormulario === undefined) {

        } else if ($scope.modalModeloFormulario.$valid) {
            var obj = {
                nome: $scope.modal.nome
            };
            DataService.realizarPost('http://ifg.redesbrasil.com/modelos', obj).then(function (data) {
                $scope.select = angular.element(document.querySelector('#selectModelo'));
                $scope.select.append('<option selected  label="' + data.data.nome + '" value="' + data.data.pk_modelo + '"  >' + data.data.nome + '</option>');//inseri o novo cargo no final               

            });

            $scope.modal.nome = "";
            $('#modal_form_modelo').modal('toggle');
        }
    };


});