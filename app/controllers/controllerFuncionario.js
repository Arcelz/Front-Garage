app.controller('FuncionarioSalvar', function ($scope,$rootScope, DataService, $document, $window, $location) {
    $scope.form = {};
    $scope.mensagem = '';
     //Função para buscar os cargos no WebSerice e coloca no dropdaw
    $scope.fkCargo = null;                       
    $scope.cargoResultados = [];
   
    $scope.selectCargos =  function (){ 
        DataService.realizarGet('http://ifg.redesbrasil.com/cargos').then(function(data){           // console.log(data);
           
           $scope.cargoResultados = data.data;
         //console.log($scope.cargoResultados,"Primeira Consulta para preencher");
        
        });        
        
    }; 
    // ----------------FIM-----------------------
    
    //Função salvar cargo do Modal
     $scope.salvarCargo = function () {
        DataService.realizarPost('http://ifg.redesbrasil.com/cargos', $scope.form2).then(function (data) {         
                       //console.log(data,"Salvando Cargo");
                        $scope.form2 = ''; //Limpa o Campo dentro do Modal
                        alert(data.data.message); //exibir algum error
                        //faz a busca na api atras dos novos cargos
                       //  DataService.realizarGet('http://ifg.redesbrasil.com/cargos').then(function(datas){        
                            //console.log(datas,"Depois que salvou foi no banco");
                          //  atualizarDropdow(datas);
                            
                         // }); 
        });

     /*   function atualizarDropdow(data){         
          var tamnho = data.data.length; //pega o tamanho do Array
          var i = tamnho -1; //diminuir pq começa com 0 o array;       
                $scope.select = angular.element(document.querySelector('#renderedCombo'));
                $scope.select.append('<option value'+data.data[i].pk_cargos +'>'+data.data[i].nome+'</option>' );//inseri o novo cargo no final
        };*/
         
    };
    // ----------------FIM-----------------------

    //Função para salvar Funcionario
    $scope.salvar = function(){
      if($scope.formulario.$valid ){
           $scope.botao = true; //para desativar o botão para que o usuario não faça varias requisções      
            DataService.realizarPost('http://ifg.redesbrasil.com/funcionarios', $scope.form).then(function(response){
          console.log(response);
            if(response.data.status == 400){
                  $scope.mensagem = response.data.message;
                  $scope.botao = false;
            }else{
                //console.log(response,"asdasd");
                $scope.mensagem = response.data.message;
                $scope.form = {};
            }
        });

      }
      
    };
  // ----------------FIM-----------------------
});

app.controller('FuncionarioListar', function ($scope,$rootScope, DataService) {
   var idModalExclusao;
  DataService.realizarGet('http://ifg.redesbrasil.com/funcionarios').then(function(response){
      if(response.data.length){
        $scope.lembretes = response.data;
        //console.log(response.data);
      }else{
        $scope.messagem ="Nenhum";
      }

  });

  $scope.exibirModal = function(id,nome){
    //data-target="#modal_default"
    console.log(id,nome);
    //$scope.modalNome = nome;    
    $rootScope.idModalExclusao = id;
    
    
   $('#modal_default').modal('show');

  };

  $scope.excluirFuncionario = function(){
    var id = $rootScope.idModalExclusao;
     console.log(id);
    DataService.realizarDelete('http://ifg.redesbrasil.com/funcionarios/'+id).then(function(data){
         DataService.realizarGet('http://ifg.redesbrasil.com/funcionarios').then(function(response){    
            $scope.lembretes.push(response.data);
               //console.log(response.data); 
          });       
        
    });  
  
  };


});


app.controller('FuncionarioEditar', function ($scope, DataService,$stateParams) {

    var id = $stateParams.id;
      console.log(id);
      DataService.realizarGet('http://ifg.redesbrasil.com/funcionarios/'+id).then(function(response){
        console.log(response);
     $scope.form = {
        nome: response.data[0].nomes,
        cpf: response.data[0].cpf,       
        email: response.data[0].email,
        logradouro: response.data[0].logradouro,
        cep: response.data[0].cep,
        bairro: response.data[0].bairro,
        cidade: response.data[0].cidade,
        contato: response.data[0].contato,
        contato1:response.data[0].contato1,
        estado:response.data[0].estado,
        pais:response.data[0].pais
      };
      $scope.select = angular.element(document.querySelector('#renderedCombo'));
      $scope.select.append('<option value'+response.data[0].pk_cargos +'>'+response.data[0].nome+'</option>' );
     // $scope.fomr = response.data[0];
      
      //response.data;
      console.log($scope.form);

    });


  });






