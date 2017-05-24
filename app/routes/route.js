app.config(function ($httpProvider, $stateProvider, $urlRouterProvider) {

    //$httpProvider.interceptors.push('tokenInterceptor');

    $stateProvider
        .state('common', {
            templateUrl: 'app/layout/menu.html',
            controller: 'MenuController',
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
            templateUrl: 'app/views/cargo/cadastro-cargos.html',
            controller: 'CargoListar',
            controllerAs: 'vm'
        })
        .state('common.cargoNovo', {
            url: '/cargos/novo',
            permicao: '1C',
            templateUrl: 'app/views/cargo/cadastro-cargos.html',
            controller: 'CargoNovo',
            controllerAs: 'vm'
        })
         .state('common.cargoEditar', {
            url: '/cargos/:id',
            permicao: '1C',
            templateUrl: 'app/views/cargo/cadastro-cargos.html',
            controller: 'CargoEditar',
            controllerAs: 'vm'
        })
        .state('common.clienteListar', {
            url: '/clientes',
            permicao: '2V',
            templateUrl: 'app/views/cliente/listar-clientes.html',
            controller: 'ClienteListar',
            controllerAs: 'vm'

        })
        .state('common.clienteNovo', {
            url: '/clientes/novo',
            permicao: '2C',
            templateUrl: 'app/views/cliente/cadastro-clientes.html',
            controller: 'ClienteNovo',
            controllerAs: 'vm'
        })
         .state('common.clienteEditar', {
            url: '/clientes/:id',
            permicao: '2C',
            templateUrl: 'app/views/cliente/cadastro-clientes.html',
            controller: 'ClienteEditar',
            controllerAs: 'vm'
        })
        .state('common.compraListar', {
            url: '/compras',
            permicao: '4V',
            templateUrl: 'app/views/compra/listar-compras.html',
            controller: 'CompraListar',
            controllerAs: 'vm'

        })
        .state('common.compraNovo', {
            url: '/compras/novo',
            permicao: '4C',
            templateUrl: 'app/views/compra/cadastro-compras.html',
            controller: 'CompraNovo',
            controllerAs: 'vm'
        })
        .state('common.compraEditar', {
            url: '/compras/:id',
            permicao: '4C',
            templateUrl: 'app/views/compra/cadastro-compras.html',
            controller: 'CompraEditar',
            controllerAs: 'vm'
        })
        .state('common.financeiroEntradaListar', {
            url: '/entradas',
            permicao: '6V',
            templateUrl: 'app/views/entrada/listar-entradas.html',
            controller: 'FinanceiroEntradaListar',
            controllerAs: 'vm'

        })
        .state('common.financeiroEntradaNovo', {
            url: '/entradas/novo',
            permicao: '6C',
            templateUrl: 'app/views/entrada/cadastro-entradas.html',
            controller: 'FinanceiroEntradaNovo',
            controllerAs: 'vm'
        })
        .state('common.financeiroEntradaEditar', {
            url: '/entradas/:id',
            permicao: '6C',
            templateUrl: 'app/views/entrada/cadastro-entradas.html',
            controller: 'FinanceiroEntradaNovo',
            controllerAs: 'vm'
        })
        .state('common.financeiroSaidaListar', {
            url: '/saidas',
            permicao: '7V',
            templateUrl: 'app/views/saida/listar-saidas.html',
            controller: 'FinanceiroSaidaListar',
            controllerAs: 'vm'
        })
        .state('common.financeiroSaidaNovo', {
            url: '/saidas/novo',
            permicao: '7C',
            templateUrl: 'app/views/saida/cadastro-saidas.html',
            controller: 'FinanceiroSaidaNovo',
            controllerAs: 'vm'
        })
         .state('common.financeiroSaidaEditar', {
            url: '/saidas/:id',
            permicao: '7C',
            templateUrl: 'app/views/saida/cadastro-saidas.html',
            controller: 'FinanceiroSaidaEditar',
            controllerAs: 'vm'
        })
        .state('common.fornecedorListar', {
            url: '/fornecedores',
            permicao: '8V',
            templateUrl: 'app/views/fornecedor/listar-fornecedores.html',
            controller: 'FornecedorListar',
            controllerAs: 'vm'
        })
        .state('common.fornecedorNovo', {
            url: '/fornecedores/novo',
            permicao: '8C',
            templateUrl: 'app/views/fornecedor/cadastro-fornecedores.html',
            controller: 'FornecedorSalvar',
            controllerAs: 'vm'
        })
         .state('common.fornecedorEditar', {
            url: '/fornecedores/:id',
            permicao: '8C',
            templateUrl: 'app/views/fornecedor/cadastro-fornecedores.html',
            controller: 'FornecedorEditar',
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
        .state('common.funcionarioEditar', {
            url: '/funcionarios/:id',
            permicao: '10C',
            templateUrl: 'app/views/funcionario/cadastro-funcionarios.html',
            controller: 'FuncionarioEditar',
            controllerAs: 'vm'

        })
        .state('common.grupoListar', {
            url: '/grupos',
            permicao: '12V',
            templateUrl: 'app/views/grupo/listar-grupos.html',
            controller: 'GrupoListar',
            controllerAs: 'vm'

        })
        .state('common.grupoNovo', {
            url: '/grupos/novo',
            permicao: '12C',
            templateUrl: 'app/views/grupo/cadastro-grupos.html',
            controller: 'GrupoSalvar',
            controllerAs: 'vm'

        })
        .state('common.grupoEditar', {
            url: '/grupos/:id',
            permicao: '12C',
            templateUrl: 'app/views/grupo/cadastro-grupos.html',
            controller: 'GrupoEditar',
            controllerAs: 'vm'

        })
        .state('common.marcaListar', {
            url: '/marcas',
            permicao: '14V',
            templateUrl: 'app/views/marca/listar-marcas.html',
            controller: 'MarcaListar',
            controllerAs: 'vm'
        })
        .state('common.marcaNovo', {
            url: '/marcas/novo',
            permicao: '14C',
            templateUrl: 'app/views/marca/cadastro-marcas.html',
            controller: 'MarcaNovo',
            controllerAs: 'vm'
        })
           .state('common.marcaEditar', {
            url: '/marcas/:id',
            permicao: '14C',
            templateUrl: 'app/views/marca/cadastro-marcas.html',
            controller: 'MarcaEditar',
            controllerAs: 'vm'
        })
        .state('common.modeloListar', {
            url: '/modelos',
            permicao: '15V',
            templateUrl: 'app/views/modelo/listar-modelos.html',
            controller: 'ModeloListar',
            controllerAs: 'vm'
        })
        .state('common.modeloNovo', {
            url: '/modelos/novo',
            permicao: '15C',
            templateUrl: 'app/views/modelo/cadastro-modelos.html',
            controller: 'ModeloNovo',
            controllerAs: 'vm'
        })
         .state('common.modeloEditar', {
            url: '/modelos/:id',
            permicao: '15C',
            templateUrl: 'app/views/modelo/cadastro-modelos.html',
            controller: 'ModeloEditar',
            controllerAs: 'vm'
        })
        .state('common.reparoListar', {
            url: '/reparos',
            permicao: '18V',
            templateUrl: 'app/views/reparo/listar-reparos.html',
            controller: 'ReparoListar',
            controllerAs: 'vm'
        })
        .state('common.reparoNovo', {
            url: '/reparos/novo',
            permicao: '18C',
            templateUrl: 'app/views/reparo/cadastro-reparos.html',
            controller: 'ReparoNovo',
            controllerAs: 'vm'
        })
        .state('common.reparoEditar', {
            url: '/reparos/:id',
            permicao: '18C',
            templateUrl: 'app/views/reparo/cadastro-reparos.html',
            controller: 'ReparoEditar',
            controllerAs: 'vm'
        })
        .state('common.tipoReparoListar', {
            url: '/tipo-reparos',
            permicao: '19C',
            templateUrl: 'app/views/tipo-reparo/listar-tipo-reparos.html',
            controller: 'ReparoTipoListar',
            controllerAs: 'vm'
        })
        .state('common.tipoReparoNovo', {
            url: '/tipo-reparos/novo',
            permicao: '19V',
            templateUrl: 'app/views/tipo-reparo/cadastro-tipo-reparos.html',
            controller: 'ReparoTipoNovo',
            controllerAs: 'vm'
        })
         .state('common.tipoReparoEditar', {
            url: '/tipo-reparos/:id',
            permicao: '19V',
            templateUrl: 'app/views/tipo-reparo/cadastro-tipo-reparos.html',
            controller: 'ReparoTipoEditar',
            controllerAs: 'vm'
        })
        .state('common.tipoVeiculoListar', {
            url: '/tipo-veiculos',
            permicao: '20C',
            templateUrl: 'app/views/tipo-veiculo/cadastro-tipo-veiculos.html',
            controller: 'TipoReparoListar',
            controllerAs: 'vm'
        })
        .state('common.tipoVeiculoNovo', {
            url: '/tipo-veiculos/novo',
            permicao: '20V',
            templateUrl: 'app/views/tipo-veiculo/cadastro-tipo-veiculos.html',
            controller: 'TipoReparoNovo',
            controllerAs: 'vm'
        })
        .state('common.tipoVeiculoEditar', {
            url: '/tipo-veiculos/:id',
            permicao: '20V',
            templateUrl: 'app/views/tipo-veiculo/cadastro-tipo-veiculos.html',
            controller: 'TipoReparoEditar',
            controllerAs: 'vm'
        })
         .state('common.usuarioListar', {
            url: '/usuarios',
            permicao: '20C',
            templateUrl: 'app/views/usuario/listar-usuarios.html',
            controller: 'UsuarioListar',
            controllerAs: 'vm'
        })
        .state('common.usuarioNovo', {
            url: '/usuarios/novo',
            permicao: '20V',
            templateUrl: 'app/views/usuario/cadastro-usuarios.html',
            controller: 'UsuarioNovo',
            controllerAs: 'vm'
        })
         .state('common.usuarioEditar', {
            url: '/usuarios/:id',
            permicao: '20V',
            templateUrl: 'app/views/usuario/cadastro-usuarios.html',
            controller: 'UsuarioEditar',
            controllerAs: 'vm'
        })
        .state('common.veiculoListar', {
            url: '/veiculos',
            permicao: '23V',
            templateUrl: 'app/views/veiculo/listar-veiculos.html',
            controller: 'VeiculoListar',
            controllerAs: 'vm'
        })
        .state('common.veiculoNovo', {
            url: '/veiculos/novo',
            permicao: '23C',
            templateUrl: 'app/views/veiculo/cadastro-veiculos.html',
            controller: 'VeiculoNovo',
            controllerAs: 'vm'
        })
        .state('common.veiculoEditar', {
            url: '/veiculos/:id',
            permicao: '23C',
            templateUrl: 'app/views/veiculo/cadastro-veiculos.html',
            controller: 'VeiculoEditar',
            controllerAs: 'vm'
        })
        .state('common.vendaListar', {
            url: '/vendas',
            permicao: '23V',
            templateUrl: 'app/views/venda/listar-vendas.html',
            controller: 'VendaListar',
            controllerAs: 'vm'
        })
        .state('common.vendaNovo', {
            url: '/vendas/novo',
            permicao: '23C',
            templateUrl: 'app/views/venda/cadastro-vendas.html',
            controller: 'VendaNovo',
            controllerAs: 'vm'
        })
         .state('common.vendaEditar', {
            url: '/vendas/:id',
            permicao: '23C',
            templateUrl: 'app/views/venda/cadastro-vendas.html',
            controller: 'VendaEditar',
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
});
