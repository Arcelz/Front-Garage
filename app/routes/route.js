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
          .state('acessibilidade', {
            url: '/acessibilidade',
            parent: 'common',
            templateUrl: 'app/views/acessibilidade/acessibilidade.html'

        })
        .state('common.cargoListar', {
            url: '/cargos/novo',
            permicao: 'cargoListar',
            templateUrl: 'app/views/cargo/cadastro-cargos.html',
            controller: 'CargoListar',
            controllerAs: 'vm'
        })
        .state('common.cargoNovo', {
            url: '/cargos/novo',
            permicao: 'cargoCriar',
            templateUrl: 'app/views/cargo/cadastro-cargos.html',
            controller: 'CargoNovo',
            controllerAs: 'vm'
        })
        .state('common.cargoEditar', {
            url: '/cargos/:id',
            permicao: 'cargoCriar',
            templateUrl: 'app/views/cargo/cadastro-cargos.html',
            controller: 'CargoEditar',
            controllerAs: 'vm'
        })
        .state('common.clienteListar', {
            url: '/clientes',
            permicao: 'clienteVisualizar',
            templateUrl: 'app/views/cliente/listar-clientes.html',
            controller: 'ClienteListar',
            controllerAs: 'vm'

        })
        .state('common.clienteNovo', {
            url: '/clientes/novo',
            permicao: 'clienteCriar',
            templateUrl: 'app/views/cliente/cadastro-clientes.html',
            controller: 'ClienteNovo',
            controllerAs: 'vm'
        })
        .state('common.clienteEditar', {
            url: '/clientes/:id',
            permicao: 'clienteCriar',
            templateUrl: 'app/views/cliente/cadastro-clientes.html',
            controller: 'ClienteEditar',
            controllerAs: 'vm'
        })
        .state('common.compraListar', {
            url: '/compras',
            permicao: 'compraVisualizar',
            templateUrl: 'app/views/compra/listar-compras.html',
            controller: 'CompraListar',
            controllerAs: 'vm'

        })
        .state('common.compraNovo', {
            url: '/compras/novo',
            permicao: 'compraCriar',
            templateUrl: 'app/views/compra/cadastro-compras.html',
            controller: 'CompraNovo',
            controllerAs: 'vm'
        })
        .state('common.compraEditar', {
            url: '/compras/:id',
            permicao: 'compraCriar',
            templateUrl: 'app/views/compra/cadastro-compras.html',
            controller: 'CompraEditar',
            controllerAs: 'vm'
        })
        .state('common.financeiroEntradaListar', {
            url: '/entradas',
            permicao: 'financeiroEntradaVisualizar',
            templateUrl: 'app/views/financeiro-entrada/listar-financeiro-entradas.html',
            controller: 'FinanceiroEntradaListar',
            controllerAs: 'vm'

        })
        .state('common.financeiroEntradaNovo', {
            url: '/entradas/novo',
            permicao: 'financeiroEntradaCriar',
            templateUrl: 'app/views/entrada/cadastro-entradas.html',
            controller: 'FinanceiroEntradaNovo',
            controllerAs: 'vm'
        })
        .state('common.financeiroEntradaEditar', {
            url: '/entradas/:id',
            permicao: 'financeiroEntradaCriar',
            templateUrl: 'app/views/entrada/cadastro-entradas.html',
            controller: 'FinanceiroEntradaNovo',
            controllerAs: 'vm'
        })
        .state('common.financeiroSaidaListar', {
            url: '/saidas',
            permicao: 'financeiroSaidaVisualizar',
            templateUrl: 'app/views/financeiro-saida/listar-financeiro-saidas.html',
            controller: 'FinanceiroSaidaListar',
            controllerAs: 'vm'
        })
        .state('common.financeiroSaidaNovo', {
            url: '/saidas/novo',
            permicao: 'financeiroSaidaCriar',
            templateUrl: 'app/views/saida/cadastro-saidas.html',
            controller: 'FinanceiroSaidaNovo',
            controllerAs: 'vm'
        })
        .state('common.financeiroSaidaEditar', {
            url: '/saidas/:id',
            permicao: 'financeiroSaidaCriar',
            templateUrl: 'app/views/saida/cadastro-saidas.html',
            controller: 'FinanceiroSaidaEditar',
            controllerAs: 'vm'
        })
        .state('common.fornecedorListar', {
            url: '/fornecedores',
            permicao: 'fornecedorVisualizar',
            templateUrl: 'app/views/fornecedor/listar-fornecedores.html',
            controller: 'FornecedorListar',
            controllerAs: 'vm'
        })
        .state('common.fornecedorNovo', {
            url: '/fornecedores/novo',
            permicao: 'fornecedorCriar',
            templateUrl: 'app/views/fornecedor/cadastro-fornecedores.html',
            controller: 'FornecedorSalvar',
            controllerAs: 'vm'
        })
        .state('common.fornecedorEditar', {
            url: '/fornecedores/:id',
            permicao: 'fornecedorCriar',
            templateUrl: 'app/views/fornecedor/cadastro-fornecedores.html',
            controller: 'FornecedorEditar',
            controllerAs: 'vm'
        })
        .state('common.funcionarioListar', {
            url: '/funcionarios',
            permicao: 'funcionarioVisualizar',
            templateUrl: 'app/views/funcionario/listar-funcionarios.html',
            controller: 'FuncionarioListar',
            controllerAs: 'vm'

        })
        .state('common.funcionarioNovo', {
            url: '/funcionarios/novo',
            permicao: 'funcionarioCriar',
            templateUrl: 'app/views/funcionario/cadastro-funcionarios.html',
            controller: 'FuncionarioSalvar',
            controllerAs: 'vm'

        })
        .state('common.funcionarioEditar', {
            url: '/funcionarios/:id',
            permicao: 'funcionarioCriar',
            templateUrl: 'app/views/funcionario/cadastro-funcionarios.html',
            controller: 'FuncionarioEditar',
            controllerAs: 'vm'

        })
        .state('common.grupoListar', {
            url: '/grupos',
            permicao: 'grupoVisualizar',
            templateUrl: 'app/views/grupo/listar-grupos.html',
            controller: 'GrupoListar',
            controllerAs: 'vm'

        })
        .state('common.grupoNovo', {
            url: '/grupos/novo',
            permicao: 'grupoCriar',
            templateUrl: 'app/views/grupo/cadastro-grupos.html',
            controller: 'GrupoSalvar',
            controllerAs: 'vm'

        })
        .state('common.grupoEditar', {
            url: '/grupos/:id',
            permicao: 'grupoCriar',
            templateUrl: 'app/views/grupo/cadastro-grupos.html',
            controller: 'GrupoEditar',
            controllerAs: 'vm'

        })
        .state('common.marcaListar', {
            url: '/marcas',
            permicao: 'marcaVisualizar',
            templateUrl: 'app/views/marca/listar-marcas.html',
            controller: 'MarcaListar',
            controllerAs: 'vm'
        })
        .state('common.marcaNovo', {
            url: '/marcas/novo',
            permicao: 'marcaCriar',
            templateUrl: 'app/views/marca/cadastro-marcas.html',
            controller: 'MarcaNovo',
            controllerAs: 'vm'
        })
        .state('common.marcaEditar', {
            url: '/marcas/:id',
            permicao: 'marcaCriar',
            templateUrl: 'app/views/marca/cadastro-marcas.html',
            controller: 'MarcaEditar',
            controllerAs: 'vm'
        })
        .state('common.modeloListar', {
            url: '/modelos',
            permicao: 'modeloVisualizar',
            templateUrl: 'app/views/modelo/listar-modelos.html',
            controller: 'ModeloListar',
            controllerAs: 'vm'
        })
        .state('common.modeloNovo', {
            url: '/modelos/novo',
            permicao: 'modeloCriar',
            templateUrl: 'app/views/modelo/cadastro-modelos.html',
            controller: 'ModeloNovo',
            controllerAs: 'vm'
        })
        .state('common.modeloEditar', {
            url: '/modelos/:id',
            permicao: 'modeloCriar',
            templateUrl: 'app/views/modelo/cadastro-modelos.html',
            controller: 'ModeloEditar',
            controllerAs: 'vm'
        })
        .state('common.permissaoListar', {
            url: '/permissoes',
            permicao: 'permissaoListar',
            templateUrl: 'app/views/permissao/listar-permissoes.html',
            controller: 'PermissaoListar',
            controllerAs: 'vm'
        })
        .state('common.permissaoNovo', {
            url: '/permissoes/novo',
            permicao: 'permissaoCriar',
            templateUrl: 'app/views/permissao/cadastro-permissoes.html',
            controller: 'PermissaoNovo',
            controllerAs: 'vm'
        })
        .state('common.reparoListar', {
            url: '/reparos',
            permicao: 'reparoVisualizar',
            templateUrl: 'app/views/reparo/listar-reparos.html',
            controller: 'ReparoListar',
            controllerAs: 'vm'
        })
        .state('common.reparoNovo', {
            url: '/reparos/novo',
            permicao: 'reparoCriar',
            templateUrl: 'app/views/reparo/cadastro-reparos.html',
            controller: 'ReparoNovo',
            controllerAs: 'vm'
        })
        .state('common.reparoEditar', {
            url: '/reparos/:id',
            permicao: 'reparoCriar',
            templateUrl: 'app/views/reparo/cadastro-reparos.html',
            controller: 'ReparoEditar',
            controllerAs: 'vm'
        })
        .state('common.tipoReparoListar', {
            url: '/tipo-reparos',
            permicao: 'tipoReparoVisualizar',
            templateUrl: 'app/views/tipo-reparo/listar-tipo-reparos.html',
            controller: 'ReparoTipoListar',
            controllerAs: 'vm'
        })
        .state('common.tipoReparoNovo', {
            url: '/tipo-reparos/novo',
            permicao: 'tipoReparoCriar',
            templateUrl: 'app/views/tipo-reparo/cadastro-tipo-reparos.html',
            controller: 'ReparoTipoNovo',
            controllerAs: 'vm'
        })
        .state('common.tipoReparoEditar', {
            url: '/tipo-reparos/:id',
            permicao: 'tipoReparoCriar',
            templateUrl: 'app/views/tipo-reparo/cadastro-tipo-reparos.html',
            controller: 'ReparoTipoEditar',
            controllerAs: 'vm'
        })
        .state('common.tipoVeiculoListar', {
            url: '/tipo-veiculos',
            permicao: 'tipoVeiculoVisualizar',
            templateUrl: 'app/views/tipo-veiculo/cadastro-tipo-veiculos.html',
            controller: 'TipoVeiculoListar',
            controllerAs: 'vm'
        })
        .state('common.tipoVeiculoNovo', {
            url: '/tipo-veiculos/novo',
            permicao: 'tipoVeiculoCriar',
            templateUrl: 'app/views/tipo-veiculo/cadastro-tipo-veiculos.html',
            controller: 'TipoVeiculoNovo',
            controllerAs: 'vm'
        })
        .state('common.tipoVeiculoEditar', {
            url: '/tipo-veiculos/:id',
            permicao: 'tipoVeiculoCriar',
            templateUrl: 'app/views/tipo-veiculo/cadastro-tipo-veiculos.html',
            controller: 'TipoVeiculoEditar',
            controllerAs: 'vm'
        })
        .state('common.usuarioListar', {
            url: '/usuarios',
            permicao: 'usuarioVisualizar',
            templateUrl: 'app/views/usuario/listar-usuarios.html',
            controller: 'UsuarioListar',
            controllerAs: 'vm'
        })
        .state('common.usuarioNovo', {
            url: '/usuarios/novo',
            permicao: 'usuarioCriar',
            templateUrl: 'app/views/usuario/cadastro-usuarios.html',
            controller: 'UsuarioNovo',
            controllerAs: 'vm'
        })
        .state('common.usuarioEditar', {
            url: '/usuarios/:id',
            permicao: 'usuarioCriar',
            templateUrl: 'app/views/usuario/cadastro-usuarios.html',
            controller: 'UsuarioEditar',
            controllerAs: 'vm'
        })
        .state('common.veiculoListar', {
            url: '/veiculos',
            permicao: 'veiculoVisualizar',
            templateUrl: 'app/views/veiculo/listar-veiculos.html',
            controller: 'VeiculoListar',
            controllerAs: 'vm'
        })
        .state('common.veiculoNovo', {
            url: '/veiculos/novo',
            permicao: 'veiculoCriar',
            templateUrl: 'app/views/veiculo/cadastro-veiculos.html',
            controller: 'VeiculoNovo',
            controllerAs: 'vm'
        })
        .state('common.veiculoEditar', {
            url: '/veiculos/:id',
            permicao: 'veiculoCriar',
            templateUrl: 'app/views/veiculo/cadastro-veiculos.html',
            controller: 'VeiculoEditar',
            controllerAs: 'vm'
        })
        .state('common.vendaListar', {
            url: '/vendas',
            permicao: 'vendaVisualizar',
            templateUrl: 'app/views/venda/listar-vendas.html',
            controller: 'VendaListar',
            controllerAs: 'vm'
        })
        .state('common.vendaNovo', {
            url: '/vendas/novo',
            permicao: 'vendaCriar',
            templateUrl: 'app/views/venda/cadastro-vendas.html',
            controller: 'VendaNovo',
            controllerAs: 'vm'
        })
        .state('common.vendaEditar', {
            url: '/vendas/:id',
            permicao: 'vendaCriar',
            templateUrl: 'app/views/venda/cadastro-vendas.html',
            controller: 'VendaEditar',
            controllerAs: 'vm'
        })
        .state('common.relatorio', {
            url: '/relatorios',
            permicao: '24C',
            templateUrl: 'app/views/relatorio/relatorios.html',
            controller: 'Relatorio',
            controllerAs: 'vm',
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
