app.controller('ModeloEditar', function ($scope, $state,DataService,$stateParams,$rootScope) {
  $scope.form = {};
  var id = $stateParams.id;


  DataService.realizarGet('modelos/'+id).then(function(response){
    console.log(response,"vindo");
    $scope.form = {
      pk_modelo: response.data[0].pk_modelo,
      nome: response.data[0].nome,

    };

  });

   $scope.salvar = function(){

      if($scope.formulario.$valid )
      {
        $scope.botao = true; //para desativar o botão para que o usuario não faça varias requisções
        DataService.realizarPut('modelos', $scope.form).then(function(response){
          if(response.data.status == 400){            
            $scope.botao = false;
          }else{
            $scope.botao = true;
            $state.go('common.modeloListar');
          }
        });

      }

    

  };

});
