app.controller('ClienteSalvar', function ($scope,$rootScope, DataService) {

  $scope.salvar = function(){
   DataService.realizarPost('http://ifg.redesbrasil.com/clientes', $scope.form).then(function(response){
      if(response.data.status == 400){
            alert(response.data.message);
      }else{
           console.log(response,"asdasd");
           $scope.mensagem = response.data.message;
      }


   });
  }

});
