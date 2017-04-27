app.config(function ($routeProvider, $locationProvider) {

    $routeProvider

        .when('/', {
            templateUrl: 'app/views/home.html',
            controller: 'HomeCtrl'
        })

        .when('/categorias', {
            templateUrl: 'app/views/categoria/cadastro-categorias.html',
            controller: 'CategoriaCtrl'
        })
        .when('/fornecedores', {
            templateUrl: 'app/views/fornecedor/cadastro-fornecedores.html',
            controller: 'FornecedorCtrl'
        })
        .when('/usuarios', {
            templateUrl: 'app/views/usuario/cadastro-usuarios.html',
            controller: 'UsuarioCtrl'
        })
        .when('/clientes', {
            templateUrl: 'app/views/cliente/cadastro-clientes.html',
            controller: 'ClienteCtrl'
        })
        .when('/funcionarios', {
            templateUrl: 'app/views/funcionario/cadastro-funcionarios.html',
            controller: 'FuncionarioCtrl'
        })
        .when('/marcas', {
            templateUrl: 'app/views/marca/cadastro-marcas.html',
            controller: 'MarcaCtrl'
        })
        .when('/modelos', {
            templateUrl: 'app/views/modelo/cadastro-modelos.html',
            controller: 'ModeloCtrl'
        })
        .when('/veiculos', {
            templateUrl: 'app/views/veiculo/cadastro-veiculos.html',
            controller: 'VeiculoCtrl'
        })
        .otherwise({redirectTo: '/'});
});