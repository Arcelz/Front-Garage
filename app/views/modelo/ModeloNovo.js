app.controller('ModeloNovo', function ($scope,$rootScope, DataService,$state, $document, $window, $location) {

  //Função para salvar Funcionario
  $scope.salvar = function(){

    if($scope.form.pk_modelo === undefined){
      if($scope.formulario.$valid )
      {
        $scope.botao = true; //para desativar o botão para que o usuario não faça varias requisções
        DataService.realizarPost('http://ifg.redesbrasil.com/modelos', $scope.form).then(function(response){
          if(response.data.status == 400){            
            $scope.botao = false;
          }else{
            $scope.botao = true;
            $state.go('common.modeloListar');
          }
        });

      }

    }

  };
  // ----------------FIM-----------------------
});