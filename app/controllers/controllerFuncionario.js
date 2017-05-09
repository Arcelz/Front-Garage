app.controller('FuncionarioSalvar', function ($scope,$rootScope, DataService) {
    $scope.fkCargo = null;                       
    $scope.cargoResultados = [];
    $scope.titulo = "Funcionario";

    selectCargos();
    //Função para buscar os cargos no WebSerice e coloca no dropdaw
    function selectCargos(){ 
        DataService.realizarGet('http://ifg.redesbrasil.com/cargos').then(function(data){           // console.log(data);
           
           $scope.cargoResultados = data.data;
         console.log($scope.cargoResultados,"dentro da Consulta");
        
        });        
        //$scope.cargoResultados = [ {  "pk_cargos": "1","nome": "ADMIN","status": "ATIVO"}, {"pk_cargos": "3","nome": "matheus","status": "ATIVO"}];
    }; 
    //Função salvar cargo 
     $scope.salvarCargo = function () {
        DataService.realizarPost('http://ifg.redesbrasil.com/cargos', $scope.form2).then(function () {         
                selectCargos();           
        });
         //$scope.cargoResultados = [];       
        console.log($scope.cargoResultados,"depois que Salvar");
    };

    //Função para salvar Funcionario
    $scope.salvar = function(){       
     DataService.realizarPost('http://ifg.redesbrasil.com/funcionarios', $scope.form).then(function(response){
        if(response.data.code == 400){
              alert(response.data.message);
        }else{
             console.log(response,"asdasd");
        }


     }); 
    }
});

app.controller('FuncionarioListar', function ($scope,$rootScope, DataService) {

  DataService.realizarGet('http://ifg.redesbrasil.com/funcionarios').then(function(response){
      if(response.data.length){
        $scope.lembretes = response.data;
      }else{
        $scope.messagem ="Nenhum";
      }

  });


});


app.controller('FuncionarioEditar', function ($scope, DataService,$stateParams) {

    var id = $stateParams.id;
      console.log(id);
      DataService.realizarGet('http://ifg.redesbrasil.com/funcionarios/'+id).then(function(response){
     $scope.form = {
        nome: response.data[0].nome,
        cpf: response.data[0].cpf,
        fkCargo: response.data[0].fk_cargo,
        email: response.data[0].email,

      };
     // $scope.fomr = response.data[0];
      
      //response.data;
      console.log($scope.form);

    });


  });






