app.controller('ReparoListar', function ($scope,$rootScope, DataService,MudarCor,AuthService, jwtHelper) {
    MudarCor.mudarCor();

    var idModalExclusao;
    var indexRemover;
    $scope.lembretes = [];

     var token = AuthService.getToken();
    
    var permicao = jwtHelper.decodeToken(token)['Permição'];
    $scope.permicaoJSON = {};
    for (i = 0; i < permicao.length; i++) {
        if (permicao[i] === '4D') {
            $scope.permicaoJSON['reparo'] = true;
            $scope.permicaoJSON['reparoDeletar'] = true;
        }
        if (permicao[i] === '4C') {
            $scope.permicaoJSON['reparo'] = true;
            $scope.permicaoJSON['reparoEditar'] = true;
        }
    }


    DataService.realizarGet('reparos').then(function(response){
        if(response.data.length){
            $scope.lembretes = response.data;
            //console.log(response.data);
        }else{
            $scope.messagem ="Nenhum";
        }
    });


       $scope.cancelamento = function (id, index) {
        $scope.title = "CANCELAMENTO DE REPARO";
        $scope.msg = "TEM CERTEZA QUE DESEJA CANCELAR O REPARO " + id;
        indexRemover = index;
        idModal = id;

        angular.element('#modal_mensagens').modal('show');

    }

    $scope.enviar = function () {
        var obj = {
            'pkCompra': idModal
        }
        DataService.realizarPut('reparos/'+ idModal).then(function (data) {
            
            if (indexRemover != undefined) {
                $scope.lembretes.splice(indexRemover, 1);
            }

            DataService.realizarGet('reparos').then(function (response) {
                $scope.lembretes =[];
                $scope.lembretes = response.data;

            });

        });
        angular.element('#modal_mensagens').modal('toggle');
    }


    $scope.exibirModal = function(id,index){
        indexRemover = index;
        $scope.modulo = 'REPARO'
        $scope.modulo_nome = id.descricao;
        $rootScope.idModalExclusao = id.pk_reparo;
        angular.element('#modal_excluir').modal();
    };

    $scope.modalExcluir = function(){
       DataService.realizarDelete('reparos/'+$rootScope.idModalExclusao).then(function(data){
       
            $scope.lembretes.splice(indexRemover, 1);
           angular.element('#modal_excluir').modal('toggle');
       });
    };
});
