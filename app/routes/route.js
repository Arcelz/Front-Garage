app.config(function ($httpProvider, $stateProvider, $urlRouterProvider) {

    //$httpProvider.interceptors.push('tokenInterceptor');

    $stateProvider
        .state('common', {
            templateUrl: 'app/layout/menu.html',
            abstract: true,
        })
        .state('home', {
            url: '/',
            parent: 'common',
            templateUrl: 'app/views/home.html',
            controller: 'Home',
            controllerAs: 'vm'
        })
        .state('common.cargoListar', {
            url: '/cargos/novo',
            permicao: '1V',
            templateUrl: 'app/cargo/cadastro-cargos.html',
            controller: 'CargoListar',
            controllerAs: 'vm'
        })
        .state('common.cargoNovo', {
            url: '/cargos/novo',
            permicao: '1C',
            templateUrl: 'app/cargo/cadastro-cargos.html',
            controller: 'CargoNovo',
            controllerAs: 'vm'
        })
        .state('common.clienteListar', {
            url: '/clientes',
            permicao: '2V',
            templateUrl: 'app/cliente/listar-clientes.html',
            controller: 'ClienteListar',
            controllerAs: 'vm'

        })
        .state('common.clienteNovo', {
            url: '/clientes',
            permicao: '2C',
            templateUrl: 'app/cliente/cadastro-clientes.html',
            controller: 'ClienteNovo',
            controllerAs: 'vm'
        })
        .state('common.compraListar', {
            url: '/compras',
            permicao: '4V',
            templateUrl: 'app/compra/listar-compras.html',
            controller: 'CompraListar',
            controllerAs: 'vm'

        })
        .state('common.compraNovo', {
            url: '/compras/novo',
            permicao: '4C',
            templateUrl: 'app/compra/cadastro-compras.html',
            controller: 'CompraNovo',
            controllerAs: 'vm'
        })
        .state('common.financeiroEntradaListar', {
            url: '/entradas',
            permicao: '6V',
            templateUrl: 'app/entrada/listar-entradas.html',
            controller: 'FinanceiroEntradaListar',
            controllerAs: 'vm'

        })
        .state('common.financeiroEntradaNovo', {
            url: '/entradas/novo',
            permicao: '6C',
            templateUrl: 'app/entrada/cadastro-entradas.html',
            controller: 'FinanceiroEntradaNovo',
            controllerAs: 'vm'
        })
        .state('common.financeiroSaidaListar', {
            url: '/saidas',
            permicao: '7V',
            templateUrl: 'app/saida/listar-saidas.html',
            controller: 'FinanceiroSaidaListar',
            controllerAs: 'vm'
        })
        .state('common.financeiroSaidaNovo', {
            url: '/saidas/novo',
            permicao: '7C',
            templateUrl: 'app/saida/cadastro-saidas.html',
            controller: 'FinanceiroSaidaNovo',
            controllerAs: 'vm'
        })
        .state('common.fornecedorListar', {
            url: '/fornecedores',
            permicao: '8V',
            templateUrl: 'app/fornecedor/listar-fornecedores.html',
            controller: 'FornecedoresListar',
            controllerAs: 'vm'
        })
        .state('common.fornecedorNovo', {
            url: '/fornecedores/novo',
            permicao: '8C',
            templateUrl: 'app/fornecedor/cadastro-fornecedores.html',
            controller: 'FornecedoresNovo',
            controllerAs: 'vm'
        })
        .state('common.funcionarioListar', {
            url: '/funcionarios',
            permicao: '10V',
            templateUrl: 'app/views/funcionario/listar-funcionarios.html',
            controller: 'FuncionarioListar',
            controllerAs: 'vm'

        })
        .state('common.funcionarioNovo', {
            url: '/funcionarios/novo',
            permicao: '10C',
            templateUrl: 'app/views/funcionario/cadastro-funcionarios.html',
            controller: 'FuncionarioSalvar',
            controllerAs: 'vm'

        })
        .state('common.grupoListar', {
            url: '/grupos',
            permicao: '12V',
            templateUrl: 'app/grupo/listar-grupos.html',
            controller: 'GrupoListar',
            controllerAs: 'vm'

        })
        .state('common.grupoNovo', {
            url: '/grupos/novo',
            permicao: '12C',
            templateUrl: 'app/grupo/cadastro-grupos.html',
            controller: 'GrupoSalvar',
            controllerAs: 'vm'

        })
        .state('common.marcaListar', {
            url: '/marcas',
            permicao: '14V',
            templateUrl: 'app/marca/listar-marcas.html',
            controller: 'MarcaListar',
            controllerAs: 'vm'
        })
        .state('common.marcaNovo', {
            url: '/marcas/novo',
            permicao: '14C',
            templateUrl: 'app/marca/cadastro-marcas.html',
            controller: 'MarcaNovo',
            controllerAs: 'vm'
        })
        .state('common.modeloListar', {
            url: '/modelos',
            permicao: '15V',
            templateUrl: 'app/modelo/cadastro-modelos.html',
            controller: 'ModeloListar',
            controllerAs: 'vm'
        })
        .state('common.modeloNovo', {
            url: '/modelos/novo',
            permicao: '15C',
            templateUrl: 'app/modelo/cadastro-modelos.html',
            controller: 'ModeloNovo',
            controllerAs: 'vm'
        })
        .state('common.reparoListar', {
            url: '/raparos',
            permicao: '18C',
            templateUrl: 'app/reparo/cadastro-reparos.html',
            controller: 'ReparoListar',
            controllerAs: 'vm'
        })
        .state('common.reparoNovo', {
            url: '/reparos/novo',
            permicao: '18V',
            templateUrl: 'app/reparo/cadastro-reparos.html',
            controller: 'ReparoNovo',
            controllerAs: 'vm'
        })
        .state('common.tipoReparoListar', {
            url: '/tipo-reparos',
            permicao: '19C',
            templateUrl: 'app/tipo-reparo/cadastro-tipo-reparos.html',
            controller: 'ReparoTipoListar',
            controllerAs: 'vm'
        })
        .state('common.tipoReparoNovo', {
            url: '/tipo-reparos/novo',
            permicao: '19V',
            templateUrl: 'app/tipo-reparo/cadastro-tipo-reparos.html',
            controller: 'ReparoTipoNovo',
            controllerAs: 'vm'
        })
        .state('common.tipoVeiculoListar', {
            url: '/tipo-veiculos',
            permicao: '20C',
            templateUrl: 'app/tipo-veiculo/cadastro-tipo-veiculos.html',
            controller: 'TipoReparoListar',
            controllerAs: 'vm'
        })
        .state('common.tipoVeiculoNovo', {
            url: '/tipo-veiculos/novo',
            permicao: '20V',
            templateUrl: 'app/tipo-veiculo/cadastro-tipo-veiculos.html',
            controller: 'TipoReparoNovo',
            controllerAs: 'vm'
        })
        .state('common.usuarioListar', {
            url: '/usuarios',
            permicao: '20C',
            templateUrl: 'app/usuario/cadastro-tipo-veiculos.html',
            controller: 'UsuarioListar',
            controllerAs: 'vm'
        })
        .state('common.usuarioNovo', {
            url: '/usuarios/novo',
            permicao: '20V',
            templateUrl: 'app/usuario/cadastro-usuarios.html',
            controller: 'UsuarioNovo',
            controllerAs: 'vm'
        })
        .state('common.veiculoListar', {
            url: '/veiculos',
            permicao: '23V',
            templateUrl: 'app/veiculo/listar-veiculos.html',
            controller: 'VeiculoListar',
            controllerAs: 'vm'
        })
        .state('common.veiculoNovo', {
            url: '/veiculos/novo',
            permicao: '23C',
            templateUrl: 'app/veiculo/cadastro-veiculos.html',
            controller: 'VeiculoNovo',
            controllerAs: 'vm'
        })
        .state('common.vendaListar', {
            url: '/vendas',
            permicao: '23V',
            templateUrl: 'app/venda/listar-vendas.html',
            controller: 'VendaListar',
            controllerAs: 'vm'
        })
        .state('common.vendaNovo', {
            url: '/vendas/novo',
            permicao: '23C',
            templateUrl: 'app/venda/cadastro-vendas.html',
            controller: 'VendaNovo',
            controllerAs: 'vm'
        })
        .state('error', {
            url: '/error',
            templateUrl: 'app/error/error.html',
            controller: 'Error',
            controllerAs: 'vm',
            params: {error: 'Error', errorMessage: 'Error'}
        })

        .state('login', {
            url: '/login',
            login: true,
            templateUrl: 'app/login/login.html',
            controller: 'Login',
            controllerAs: 'vm'
        });

    $urlRouterProvider.otherwise('/');
    /*

     $urlRouterProvider.otherwise('/');

     $stateProvider

     .state('home', {
     url: '/',
     controller:'Home',
     controllerAs: 'vm'
     })
     .state('login', {
     url: '/login',
     controller:'Login'
     })
     .state('categoria', {
     url: '/categorias',
     templateUrl: 'app/categoria/cadastro-categorias.html',
     controller:'Categoria'
     })
     .state('home.dashboard', {
     url: '/dashboard',
     templateUrl: 'app/dashboard/dashboard.html',
     })*/

});
