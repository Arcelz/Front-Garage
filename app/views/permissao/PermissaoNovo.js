app.controller('PermissaoNovo', function ($scope, $document, $state, $rootScope, $localStorage, DataService, MudarCor) {
    MudarCor.mudarCor();

    $scope.tiposResultados = {};
    $scope.veiculosResultados = {};
    DataService.realizarGet('grupos/').then(function (data) {
        $scope.gruposResultados = data.data;
        console.log(data.data);
    });
    $scope.example9settings = {enableSearch: true};
    $scope.example9settings = {
        groupByTextProvider: function (groupValue) {
            if (groupValue === 'C') {
                return 'Criar';
            }
            else if (groupValue === 'V') {
                return 'Visualizar'
            }
            else if (groupValue === 'D') {
                return 'Deletar';
            }
            else {
                return 'Outros';
            }
        }, groupBy: 'permissao',
    };
    DataService.realizarGet('permissoes/').then(function (data) {
        $scope.permissao = [];
        $scope.example9data = [];
        var key = Object.keys(data.data);
        for (var i = 0; i < key.length; i++) {
            var ar = '';
            if (key[i].indexOf("Criar") != -1) {
                ar = 'C';
            }
            else if (key[i].indexOf("Visualizar") != -1) {
                ar = 'V';
            }
            else if (key[i].indexOf("Deletar") != -1) {
                ar = 'D';
            }
            $scope.example9data.push({
                id: key[i],
                label: key[i],
                permissao: ar
            });
        }
    });
    $scope.changeGrupo = function () {
        DataService.realizarGet('grupos-permissao/' + $scope.form.grupo_id).then(function (data) {
            console.log(data.data);
            $scope.permissao = [];
            for (var j = 0; j < $scope.example9data.length; j++) {
                for (var i = 0; i < data.data.length; i++) {
                    if ($scope.example9data[j].id === data.data[i].nome) {
                        $scope.permissao.push($scope.example9data[j]);
                    }
                }
            }
        });
    }
    $scope.salvar = function () {
        console.log($scope.form);
        if ($scope.form.grupo_id === undefined || $scope.form.grupo_id === "") {
            $scope.form.grupo_id = $("#selectGrupo option:selected").val();
        }
        if ($scope.formulario.$valid && $scope.permissao !== undefined) {
            $scope.form['permissao_id'] = $scope.permissao;
            $scope.botao = true;
            console.log($scope.form);
            DataService.realizarPost('grupos-permissao', $scope.form).then(function (data) {
                if (data.data.status === 200) {
                    $state.go('common.permissaoNovo');
                    $scope.botao = false;

                }
                else if (data.data.status === 400) {
                    $scope.botao = false;
                }
            });
        }
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