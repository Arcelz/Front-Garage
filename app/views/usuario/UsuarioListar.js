app.controller('UsuarioListar', function ($scope,$rootScope, DataService) {
    var idModalExclusao;
    var indexRemover;
    $scope.lembretes = [];
    DataService.realizarGet('usuarios').then(function(response){
        if(response.data.length){
            $scope.lembretes = response.data;
            //console.log(response.data);
        }else{
            $scope.messagem ="Nenhum";
        }

    });

    $scope.exibirModal = function(id,index){
        indexRemover = index;
        $scope.modulo = 'USUARIO'
        $scope.modulo_nome = id.login;
        $rootScope.idModalExclusao = id.usuario_id;
        angular.element('#modal_excluir').modal();
    };
    $scope.modalExcluir = function(){
        //var id = $rootScope.idModalExclusao;
        console.log( $rootScope.idModalExclusao);
       DataService.realizarDelete('usuarios/'+$rootScope.idModalExclusao).then(function(data){
        console.log(data);
            $scope.lembretes.splice(indexRemover, 1);
           angular.element('#modal_excluir').modal('toggle');
        });

    };


});
