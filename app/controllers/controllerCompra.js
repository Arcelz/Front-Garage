app.controller('CompraNovo', function ($scope,$rootScope, DataService, $document, $window, $location) {
    $scope.fornecedoresResultados = []

        $scope.buscarFornecedor = function(){
                DataService.realizarGet('http://ifg.redesbrasil.com/fornecedores').then(function(response){           
                     $scope.fornecedoresResultados = response.data; 
            }); 

        }       

         $scope.buscarFuncionario = function(){
                  DataService.realizarGet('http://ifg.redesbrasil.com/funcionarios').then(function(response){           
                     $scope.funcionariosResultados = response.data; 
            });
        }

        $scope.adicionarFornecedor = function(teste){
                $scope.form.nome = $("#selectBuscaFornecedor option:selected").text();
                $scope.form.fk_fornecedor = $scope.form.buscaCampoFornecedor;
        }       

        $scope.adicionarFuncionario = function(){
             $scope.form2.nome = $("#selectBuscaFuncionario option:selected").text();
             $scope.form2.fk_funcionario = $scope.form2.buscaCampoFuncionario;

        }
        $scope.pesquisarVeiculo = function(){    
           // alert($scope.form.consulta);
           var obj = {
               consulta : $scope.form.consulta
           }        
                DataService.realizarPost('http://ifg.redesbrasil.com/veiculos',obj).then(function(response){

                    if(response.data.status == 400){
                          $scope.VeiculoPesquisa = {};
                        $scope.mensagem = response.data.message;
                    }else{
                        $scope.mensagem = false;
                        $scope.VeiculoPesquisa = response.data; 
                    }           
                
                console.log(response);
            });

        }
        $scope.adicionarVeiculoCarrinho = function(veiculo){
            
         $scope.VeiculoPesquisa = {};
            console.log(veiculo);
            $scope.painelCarrinho = true;
          // $scope.carrinhoVeiculos = veiculo;
          $scope.nome = veiculo.nome;
          $scope.placa = veiculo.placa;
          $scope.ano = veiculo.ano;
          $scope.valor_compra = veiculo.valor_compra;
         $scope.form = {
             fk_veiculo : veiculo.pk_veiculo,
             valor_compra : veiculo.valor_compra
         }
        };


});