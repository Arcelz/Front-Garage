app.controller('PermissaoNovo', function ($scope, $document, $state, $rootScope, $localStorage, DataService, MudarCor) {
    MudarCor.mudarCor();

    $scope.tiposResultados = {};
    $scope.veiculosResultados = {};
    DataService.realizarGet('http://ifg.redesbrasil.com/grupos').then(function (data) {
        $scope.gruposResultados = data.data;
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
            else {
                return 'Deletar';
            }
        }, groupBy: 'permissao',
    };
    DataService.realizarGet('http://ifg.redesbrasil.com/permissoes').then(function (data) {
        $scope.permissao = [];
        $scope.example9data = [];
        for (var i = 0; i < data.data.length; i++) {
            $scope.example9data.push({
                id: data.data[i].pk_permissao,
                label: data.data[i].nome,
                permissao: data.data[i].permissao
            });
        }
    });
    $scope.changeGrupo = function () {
        DataService.realizarGet('http://ifg.redesbrasil.com/grupos-permissao/' + $scope.form.grupo_id).then(function (data) {
            $scope.permissao = [];
            for (var j = 0; j < $scope.example9data.length; j++) {
                for (var i = 0; i < data.data.length; i++) {
                    if ($scope.example9data[j].id === data.data[i].permissao_id) {
                        $scope.permissao.push($scope.example9data[j]);
                    }
                }
            }
        });
    }
    $scope.salvar = function () {
        if ($scope.form.grupo_id === undefined || $scope.form.grupo_id === "") {
            $scope.form.grupo_id = $("#selectGrupo option:selected").val();
        }
        if ($scope.formulario.$valid && $scope.permissao !== undefined) {
            $scope.form['permissao_id'] = $scope.permissao;
            $scope.botao = true;
            DataService.realizarPost('http://ifg.redesbrasil.com/grupos-permissao', $scope.form).then(function (data) {
                if (data.data.status === 200) {
                    $state.go('common.permissaoNovo');
                }
                else if (data.data.status === 400) {
                    $scope.botao = false;
                }
            });
        }
    }
    $scope.salvarModalTipo = function () {
        if ($scope.modalFormulario.$valid) {
            DataService.realizarPost('http://ifg.redesbrasil.com/tipos-reparos', $scope.modal).then(function (data) {
                $scope.botao = false;
                angular.element('#selectTipo').append('<option  value="' + data.data.pk_tipo + '" selected>' + data.data.nome + '</option>');
                angular.element('#modal_tipo_reparo').modal('toggle');
            });
        }
    }
});