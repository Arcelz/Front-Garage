app.controller('VeiculoNovo', function ($scope, $state, $rootScope, DataService, $document, $window, $location) {

    $scope.buscaTipo = function () {
        DataService.realizarGet('http://ifg.redesbrasil.com/tipos-veiculos').then(function (data) {
            $scope.buscasTipos = data.data;
            //console.log($scope.cargoResultados,"Primeira Consulta para preencher");
            $("#selectCategoria option").css("text-transform", "uppercase");

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

    $scope.salvarVeiculo = function () {

        if ($scope.formulario.pk_veiculo.$modelValue === undefined) {
            var condicao, condicao2, condicao3;

            if ($scope.form === undefined || $scope.form === null) {
                $scope.exebirErroSelectCategoria = true;
                $scope.exebirErroSelectMarca = true;
                $scope.exebirErroSelectModelo = true;
                condicao = 0;
                condicao2 = 0;
                condicao3 = 0;
            } else {
                if ($scope.form.fkTipo === undefined || $scope.form.fkTipo === '' || $scope.form.fkTipo === null) {
                    $scope.form.fkTipo = $("#selectCategoria option:selected").val();

                    if ($scope.form.fkTipo != '') {
                        $scope.exebirErroSelectTipo = false;
                        condicao = 1;
                    } else {
                        $scope.exebirErroSelectTipo = true;
                        condicao = 0;
                    }


                }
                else if ($scope.form.fkMarca === undefined || $scope.form.fkMarca === '' || $scope.form.fkMarca === null) {
                    $scope.form.fkMarca = $("#selectMarca option:selected").val();

                    if ($scope.form.fkMarca != '') {
                        $scope.exebirErroSelectMarca = false;
                        condicao2 = 1;
                    } else {
                        $scope.exebirErroSelectMarca = true;
                        condicao2 = 0;
                    }
                }
                else if ($scope.form.fkModelo === undefined || $scope.form.fkModelo === '' || $scope.form.fkModelo === null) {
                    $scope.form.fkModelo = $("#selectModelo option:selected").val();

                    if ($scope.form.fkModelo != '') {
                        $scope.exebirErroSelectModelo = false;
                        condicao3 = 1;
                    } else {
                        $scope.exebirErroSelectModelo = true;
                        condicao3 = 0;
                    }
                } else {
                    condicao = 1;
                    condicao2 = 1;
                    condicao3 = 1;
                }


            };

            if ($scope.formulario.$valid && condicao3 == 1 && condicao2 == 1 && condicao == 1) {
                $scope.botao = true;
                //  console.log($scope.form,"enviar");
                var obj = {
                    placa: $scope.form.placa,
                    fkTipo: $scope.form.fkTipo,
                    fkMarca: $scope.form.fkMarca,
                    fkModelo: $scope.form.fkModelo,
                    ano: $scope.form.ano,
                    valorCompra: $scope.form.valorCompra
                }

                //     console.log(obj,"obj");
                DataService.realizarPost('http://ifg.redesbrasil.com/veiculos', obj).then(function (data) {

                    if (data.data.status == 400) {
                        $scope.mensagem = data.data.message;
                        $scope.botao = false;
                    } else {
                        $scope.mensagem = data.data.message;
                        $scope.botao = true;
                        $scope.form = {};
                    }


                });

                $scope.exebirErroSelectCategoria = false;
                $scope.exebirErroSelectMarca = false;
                $scope.exebirErroSelectModelo = false;
            };


        } else {
            $("#selectCategoria option[value='?']").remove();
            $("#selectMarca option[value='?']").remove();
            $("#selectModelo option[value='?']").remove();

            if ($scope.form.fkTipo === undefined) {
                $scope.form.fkTipo = $("#selectCategoria option:selected").val();
            }
            if ($scope.form.fkMarca === undefined) {
                $scope.form.fkMarca = $("#selectMarca option:selected").val();
            }
            if ($scope.form.fkModelo === undefined) {
                $scope.form.fkModelo = $("#selectModelo option:selected").val();
            }
            //sconsole.log($scope.form, "PUT");
            DataService.realizarPut('http://ifg.redesbrasil.com/veiculos', $scope.form).then(function (data) {
                if (data.data.status == 400) {
                  
                  
                } else {
                   
                  $state.go('common.veiculoListar');
                }

            });

        }

    };


    $scope.salvarTipo = function (formulario) {

        if ($scope.modal === undefined || $scope.modal === '' || $scope.modal === null) {
            $scope.exebirErrorModal = true;
            $scope.botaoModal = true;
        } else {
            var obj = {
                nome: $scope.modal.nome
            }

            //console.log(obj);
            DataService.realizarPost('http://ifg.redesbrasil.com/tipos-veiculos', obj).then(function (data) {
                $scope.mensagem = data.data.message;
                $scope.select = angular.element(document.querySelector('#selectCategoria'));
                $scope.select.append('<option selected  label="' + data.data.nome + '" value="' + data.data.pk_tipo + '"  >' + data.data.nome + '</option>');//inseri o novo cargo no final

            });
            $scope.modal.nome = "";
            $('#modal_form_categoria').modal('toggle');
        }

        $scope.exebirErroSelectCategoria = false;
    };

    $scope.salvarMarca = function () {

        if ($scope.modal === undefined || $scope.modal === '' || $scope.modal === null) {
            $scope.exebirErrorModal = true;
            $scope.botaoModal = true;
        } else {
            var obj = {
                nome: $scope.modal.nome
            }
            //console.log(obj);
            DataService.realizarPost('http://ifg.redesbrasil.com/marcas', obj).then(function (data) {
                $scope.mensagem = data.data.message;

                $scope.select = angular.element(document.querySelector('#selectMarca'));
                $scope.select.append('<option selected  label="' + data.data.nome + '" value="' + data.data.pk_marca + '"  >' + data.data.nome + '</option>');//inseri o novo cargo no final
                // console.log(data);
            });


            $scope.modal.nome = "";

            $('#modal_form_marca').modal('toggle');
        }

        $scope.exebirErroSelectMarca = false;
    };

    $scope.salvarModelo = function () {

        if ($scope.modal === undefined || $scope.modal === '' || $scope.modal === null) {
            $scope.exebirErrorModal = true;
            $scope.botaoModal = true;
        } else {
            var obj = {
                nome: $scope.modal.nome
            }
            // console.log(obj);
            DataService.realizarPost('http://ifg.redesbrasil.com/modelos', obj).then(function (data) {
                $scope.mensagem = data.data.message;
                $scope.form = {
                    fkModelo: data.data.pk_modelo
                };
                $scope.select = angular.element(document.querySelector('#selectModelo'));
                $scope.select.append('<option selected  label="' + data.data.nome + '" value="' + data.data.pk_modelo + '"  >' + data.data.nome + '</option>');//inseri o novo cargo no final

              //  console.log(data);

            });
           /// console.log($scope.form, "fk");
            $scope.modal.nome = "";
            $('#modal_form_modelo').modal('toggle');
        }

        $scope.exebirErroSelectModelo = false;
    };


    $scope.validarModar = function () {
        if ($scope.modal.nome === undefined || $scope.modal.nome === '') {
            $scope.exebirErrorModal = true;
            $scope.botaoModal = true;
        } else {
            $scope.exebirErrorModal = false;
            $scope.botaoModal = false;
        }


    };


    $scope.validacaoSelect = function () {

        $scope.exebirErroSelectCategoria = false;
        $scope.exebirErroSelectMarca = false;
        $scope.exebirErroSelectModelo = false;

        var t = $("#selectCategoria option:selected").val();
        var t2 = $("#selectMarca option:selected").val();
        var t3 = $("#selectModelo option:selected").val();
        //alert(t);
        if (t == '') {
            $scope.exebirErroSelectCategoria = true;
        }
        if (t2 == '') {
            $scope.exebirErroSelectMarca = true;
        }
        if (t3 == '') {
            $scope.exebirErroSelectModelo = true;
        }

    };

});