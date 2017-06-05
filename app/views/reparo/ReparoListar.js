app.controller('ReparoListar', function ($scope,$rootScope, DataService,MudarCor) {
    MudarCor.mudarCor();

    var idModalExclusao;
    var indexRemover;
    $scope.lembretes = [];
    DataService.realizarGet('http://ifg.redesbrasil.com/reparos').then(function(response){
        if(response.data.length){
            $scope.lembretes = response.data;
            //console.log(response.data);
        }else{
            $scope.messagem ="Nenhum";
        }
    });
    $scope.exibirModal = function(id,index){
        indexRemover = index;
        $scope.modulo = 'REPARO'
        $scope.modulo_nome = id.descricao;
        $rootScope.idModalExclusao = id.pk_reparo;
        angular.element('#modal_excluir').modal();
    };
    $scope.modalExcluir = function(){
       DataService.realizarDelete('http://ifg.redesbrasil.com/reparos/'+$rootScope.idModalExclusao).then(function(data){
        console.log(data);
            $scope.lembretes.splice(indexRemover, 1);
           angular.element('#modal_excluir').modal('toggle');
       });
    };
});
