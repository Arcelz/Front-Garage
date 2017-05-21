app.controller('ReparoTipoListar', function ($scope,$rootScope, DataService) {
    var idModalExclusao;
    var indexRemover;
    $scope.lembretes = [];
    DataService.realizarGet('http://ifg.redesbrasil.com/tipos-reparos').then(function(response){
        if(response.data.length){
            $scope.lembretes = response.data;
        }else{
            $scope.messagem ="Nenhum";
        }

    });

    $scope.exibirModal = function(id,index){
        indexRemover = index;
        $rootScope.idModalExclusao = id.pk_tipo;
        $scope.modulo = 'REPARO TIPO'
        $scope.modulo_nome = id.nome;
        angular.element('#modal_default').modal();
    };
    $scope.excluirFuncionario = function(){
        console.log( $rootScope.idModalExclusao);
       DataService.realizarDelete('http://ifg.redesbrasil.com/tipos-reparos/'+$rootScope.idModalExclusao).then(function(data){
        console.log(data);
            $scope.lembretes.splice(indexRemover, 1);

        });

    };


});
