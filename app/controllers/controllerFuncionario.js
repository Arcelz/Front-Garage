app.controller('FuncionarioSalvar', function ($scope,$rootScope, data) {
    $scope.fkCargo = null;                       
    $scope.cargoResultados = [];
    $scope.titulo = "Funcionario";

    selectCargos();
    //Função para buscar os cargos no WebSerice e coloca no dropdaw
    function selectCargos(){ 
        data.get('http://ifg.redesbrasil.com/cargos').then(function(data){           // console.log(data);
           
           $scope.cargoResultados = data.data;
         console.log($scope.cargoResultados,"dentro da Consulta");
        
        });        
        //$scope.cargoResultados = [ {  "pk_cargos": "1","nome": "ADMIN","status": "ATIVO"}, {"pk_cargos": "3","nome": "matheus","status": "ATIVO"}];
    }; 
    //Função salvar cargo 
     $scope.salvarCargo = function () {
        data.realizarPost('http://ifg.redesbrasil.com/cargos', $scope.form2).then(function () {         
                selectCargos();           
        });
         //$scope.cargoResultados = [];       
        console.log($scope.cargoResultados,"depois que Salvar");
    };

    //Função para salvar Funcionario
    $scope.salvar = function(){
       
        data.realizarPost('http://ifg.redesbrasil.com/funcionarios', $scope.form).then(function(data){
           
          $scope.mensagem ="Funcionario Salvo com Sucesso";
          
        });
        
    }   


});

app.controller('FuncionarioListar', function ($scope,$rootScope, data) {


});