app.controller('Login', function ($scope,$location,$state,DataService,AuthService) {
    angular.element(document.querySelector("body")).addClass("login-container login-cover");
    /* data.get('https://jsonplaceholder.typicode.com/posts/').then(function (data) {
     console.log(data.data);
     });*/
    $scope.submit = function () {
        $scope.botaoLogin=true;
        DataService.realizarPost('http://ifg.redesbrasil.com/auth/login',$scope.form).then(function (data) {
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
app.controller('Funcionario', function ($scope,$rootScope, DataService) {
    $scope.cargo = null;
    $scope.cargoResultados = [];

    selectCargos();
    function selectCargos() {
        DataService.realizarGet('http://ifg.redesbrasil.com/cargos').then(function (data) {
            $scope.cargoResultados = data.data;
        });
        //$scope.cargoResultados = [ {  "pk_cargos": "1","nome": "ADMIN","status": "ATIVO"}, {"pk_cargos": "3","nome": "matheus","status": "ATIVO"}];
    };

    $scope.salvarCargo = function () {
        //var nome = {"nome" : $scope.vm.nomeCargo};
        //sconsole.log(nome);
        // Chamara função para salvar
        console.log($scope.form2);
        DataService.realizarPost('http://ifg.redesbrasil.com/cargos', $scope.form2).then(function (data) {
            selectCargos();
        });

        //depois que salvar o cargo no model eu chamo a função;
        //$modalInstance.close();
        //angular.element(document.getElementById("testeFechar"))
        ///$scope.vm = {};
    };

    $scope.salvar = function () {
        //console.log($scope.vm);
        //$scope.vm = {};
        ///var teste = {"t":$scope.form};
        DataService.realizarPost('http://ifg.redesbrasil.com/funcionarios', $scope.form).then(function (data) {
            //console.log(data);
            $scope.mensagem = data;
        });

        $scope.mensagem = "Funcionario Salvo com Sucesso";
    }

    })
    // $rootScope.bodylayout = '';
    //angular.element(document.querySelector("body")).removeClass("login-container login-cover");