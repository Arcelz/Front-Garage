app.controller('ClienteNovo', function ($scope,$rootScope, DataService, $document, $window, $location) {

    //Função para salvar Funcionario
    $scope.salvar = function(){

        if($scope.form.pk_cliente === undefined){
            if($scope.formulario.$valid )
            {
                $scope.botao = true; //para desativar o botão para que o usuario não faça varias requisções
                  DataService.realizarPost('http://ifg.redesbrasil.com/clientes', $scope.form).then(function(response){
                      if(response.data.status == 400){
                            $scope.mensagem = response.data.message;
                            $scope.botao = false;
                      }else{
                          $scope.botao = true;
                          $scope.mensagem = response.data.message;
                          $scope.form = {};
                      }
              });

          }

        }else{

                 DataService.realizarPut('http://ifg.redesbrasil.com/clientes', $scope.form).then(function(response){
                 console.log(response);
                      if(response.data.status == 400){
                            $scope.mensagem = response.data.message;
                            $scope.botao = false;
                      }else{
                          $scope.botao = true;
                          $scope.mensagem = response.data.message;
                          $scope.form = {};
                      }
              });
        }


    };
  // ----------------FIM-----------------------
});

app.controller('ClienteListar', function ($scope,$rootScope, DataService) {
   var idModalExclusao;
   $scope.lembretes = [];
  DataService.realizarGet('http://ifg.redesbrasil.com/clientes').then(function(response){
      if(response.data.length){
        $scope.lembretes = response.data;
        //console.log(response.data);
      }else{
        $scope.messagem ="Nenhum";
      }

  });

  $scope.exibirModal = function(id){
    //data-target="#modal_default"
    //console.log(id,nome);
    //$scope.modalNome = nome;
    $rootScope.idModalExclusao = id;


   $('#modal_default').modal('show');

  };

  $scope.excluirFuncionario = function(){
    //var id = $rootScope.idModalExclusao;
     //console.log( $rootScope.idModalExclusao.pk_funcionario);
    DataService.realizarDelete('http://ifg.redesbrasil.com/clientes/'+ $rootScope.idModalExclusao.pk_cliente).then(function(data){
        var index = -1;
        var comArr = eval($scope.lembretes);
        var i;
        for( i=0; i< comArr.length; i++){
          if(comArr[0].nomes === $rootScope.idModalExclusao.nomes ){
              index =1;
              break;
          }
          if(index === -1){
            console.log("adsasd");
          }

          $scope.lembretes.splice(index,1);
        }



        // var indiceLista = $scope.lembretes.indexOf($rootScope.idModalExclusao);
         //$scope.lembretes.splice(indiceLista,1);

    });

  };


});
