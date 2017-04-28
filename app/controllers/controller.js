app.controller('HomeCtrl', function ($scope) {
    $scope.title = 'Bem-vindo, esta é nossa página principal!';
});
app.controller('FornecedorCtrl', function ($scope) {
});
app.controller('UsuarioCtrl', function($scope,$http){
    $('select').material_select();
    $http.get('http://ifg.redesbrasil.com/usuarios',{
        headers: {'Authorization': $.cookie("token")}
    })
        .success(function(data, status, headers, config) {
            console.log(data);
        })
        .error(function(data, status, headers, config) {
            // erro!
            // você pode verificar o parâmetro "status" para ver o código HTTP do erro
        });
});
app.controller('ClienteCtrl', function ($scope) {
});
app.controller('CategoriaCtrl', function ($scope) {
});
app.controller('FuncionarioCtrl', function ($scope) {
});
app.controller('MarcaCtrl', function ($scope) {
});
app.controller('ModeloCtrl', function ($scope) {
});
app.controller('VeiculoCtrl', function ($scope) {
});