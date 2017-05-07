app.controller('Login', function ($scope,$location,$state,data,AuthService) {
    angular.element(document.querySelector("body")).addClass("login-container login-cover");
    /* data.get('https://jsonplaceholder.typicode.com/posts/').then(function (data) {
     console.log(data.data);
     });*/
    $scope.submit = function () {
        $scope.botaoLogin=true;
        data.realizarPost('http://ifg.redesbrasil.com/auth/login',$scope.form).then(function (data) {
            AuthService.setToken(data.data.Token);
            console.log(data.data);
            $scope.botaoLogin=false;
            $location.path('/');
        });
    }
});
app.controller('Home', function ($scope,$rootScope) {
    // $rootScope.bodylayout = '';
    angular.element(document.querySelector("body")).removeClass("login-container login-cover");
});
app.controller('Funcionario', function ($scope,$rootScope) {
    $scope.cargo = null;                       
    $scope.cargoResultados = [];

    selectCargos();
    function selectCargos(){ //função para inserir o select colocar a função de get;
           // $http({
            //method: 'GET',
            //url: '/Admin/GetTestAccounts',
            //data: { applicationId: 3 }
        //}).success(function (result) {
        //$scope.testAccounts = result;
        $scope.cargoResultados = [ {  "pk_cargos": "1","nome": "ADMIN","status": "ATIVO"}, {"pk_cargos": "3","nome": "matheus","status": "ATIVO"}];
    };

    $scope.salvarCargo  = function(){
        var nome = {"nome" : $scope.vm.nomeCargo};
        console.log(nome);
        // Chamara função para salvar
        selectCargos();//depois que salvar o cargo no model eu chamo a função;
        //$modalInstance.close();
        //angular.element(document.getElementById("testeFechar"))
    };

    $scope.salvar = function(){
        console.log($scope.vm);

        $scope.mensagem ="Funcionario Salvo com Sucesso";
    }


    // $rootScope.bodylayout = '';
    //angular.element(document.querySelector("body")).removeClass("login-container login-cover");

    


});