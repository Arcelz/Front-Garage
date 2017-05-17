app.controller('UsuarioListar', function ($scope,$rootScope, DataService) {
    var idModalExclusao;
    var indexRemover;
    $scope.lembretes = [];
    DataService.realizarGet('http://ifg.redesbrasil.com/usuarios').then(function(response){
        if(response.data.length){
            $scope.lembretes = response.data;
            //console.log(response.data);
        }else{
            $scope.messagem ="Nenhum";
        }

    });

    $scope.exibirModal = function(id,index){
        indexRemover = index;
        $rootScope.idModalExclusao = id.usuario_id;


        $('#modal_default').modal('show');

    };
    $scope.excluirFuncionario = function(){
        //var id = $rootScope.idModalExclusao;
        console.log( $rootScope.idModalExclusao);
       DataService.realizarDelete('http://ifg.redesbrasil.com/usuarios/'+$rootScope.idModalExclusao).then(function(data){
        console.log(data);
        if (indexRemover!= undefined){
            $scope.lembretes.splice(indexRemover, 1);
        }
        });

    };


});
