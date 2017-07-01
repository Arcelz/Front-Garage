app.controller('ReparoNovo', function ($scope,$compile, $state, $rootScope, $localStorage, DataService,MudarCor) {
    MudarCor.mudarCor();
    var objetoReparo = {};
    var valorTotalFinal = 0;
    var parcela;
    var condicao = false;

    $scope.tiposResultados = {};
    $scope.veiculosResultados = {};
    DataService.realizarGet('tipos-reparos').then(function (data) {
        $scope.tiposResultados = data.data;
    });
    DataService.realizarGet('veiculos/garagem').then(function (data) {
        $scope.veiculosResultados = data.data;
    });

    $scope.salvar = function () {
        if ($scope.form.fkTipo === undefined || $scope.form.fkTipo === "") {
            $scope.form.fkTipo = $("#selectTipo option:selected").val();
        }
        if ($scope.formulario.$valid && $scope.form.fkTipo != "") {
             angular.element('#modal_parcelamento').modal('show');
             objetoReparo = $scope.form;
            /*$scope.botao = true;
            DataService.realizarPost('http://ifg.redesbrasil.com/reparos', $scope.form).then(function (data) {
                console.log(data)
                if (data.data.status === 200) {
                    $state.go('common.reparoListar');
                }
                else if (data.data.status === 400) {
                    $scope.botao = false;
                }
            });*/
        }
    }

    $scope.salvarReparo = function () {
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

            objetoReparo['vencimento' + i] = vencimentoCliente;
            objetoReparo['parcela'] = parcela;
        }
        objetoReparo['valorTotal'] = valorTotalFinal;
        //console.log(objetoReparo);
         DataService.realizarPost('reparos', objetoReparo).then(function (response) {
              condicao = false;
              if (response.data.status == 400) {
  
              } else {
                  angular.element('#modal_parcelamento').modal('hide');
                  angular.element('#modal_parcelamento').hide();
                  angular.element('.modal-backdrop').hide();
                  angular.element("body").removeClass("modal-open");
  
                  $state.go('common.reparoListar');
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

        $scope.valorTotal = objetoReparo.valor;
        valorTotalFinal = objetoReparo.valor;
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
        valorTotalFinal = objetoReparo.valor / parcela;
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

    $scope.salvarModalTipo = function () {
        if ($scope.modalFormulario.$valid) {
            DataService.realizarPost('tipos-reparos', $scope.modal).then(function (data) {
                $scope.botao = false;
                angular.element('#selectTipo').append('<option  value="' + data.data.pk_tipo + '" selected>' + data.data.nome + '</option>');
                angular.element('#modal_tipo_reparo').modal('toggle');
            });
        }
    }
});