app.controller('MenuController', function ($scope, $state, $localStorage, AuthService, jwtHelper, MudarCor) {
    MudarCor.mudarCor();
    var token = AuthService.getToken();
    $scope.nomeUsuario = jwtHelper.decodeToken(token)['Nome'];

    $scope.logout = function () {
        AuthService.logout();
        $state.go('login');
    }
    var tamanho = 125;
    $scope.aumentar = function () {
        tamanho = tamanho + 20;
        $("body").css({'font-size': '' + tamanho + '%'});
    }
    $scope.diminuir = function () {
        tamanho = tamanho - 20;
        $("body").css({'font-size': '' + tamanho + '%'});
    }
    $scope.restaurar = function () {
        tamanho = 125;
        $("body").css({'font-size': '125%'});
    }
    $scope.cor = function () {
        $localStorage.corFundoSuperior = $scope.core.corFundoSuperior;
        $localStorage.corLetraSuperior = $scope.core.corLetraSuperior;
        $localStorage.corLetraGeral = $scope.core.corLetraGeral;
        $localStorage.corFundoGeral = $scope.core.corFundoGeral;

        $(".navbar.navbar-inverse.bg-indigo").css({'background-color': $scope.core.corFundoSuperior});
        $(".navbar.navbar-inverse.bg-indigo a").css({'color': $scope.core.corLetraSuperior});

        $("#menuLateral").css({'background-color': $scope.core.corFundoGeral});
        $(".panel-body").css({'background-color': $scope.core.corFundoGeral, 'color': $scope.core.corLetraGeral});// cor de fundo do conteudo
        $(".breadcrumb-line").css({'background-color': $scope.core.corFundoGeral});// cor de fundo da parte de cima onde fica a navegacao
        $(".panel-heading").css({'background-color': $scope.core.corFundoGeral});// cor de fundo do titulo do conteudo
        $(".panel-heading h5").css({'color': $scope.core.corLetraGeral});// cor da letra do titulo do conteudo
        $(".panel-body legend").css({'color': $scope.core.corLetraGeral});// cor da letra do subtitulo do conteudo
        $(".breadcrumb-line a").css({'color': $scope.core.corLetraGeral});// cor da letra navegacao
        $(".navigation.navigation-main.navigation-accordion li span").css({'color': $scope.core.corLetraGeral});
        $(".navigation.navigation-main.navigation-accordion li a").css({'color': $scope.core.corLetraGeral});
        $(".sidebar-user-material-content h6").css({'color': $scope.core.corLetraGeral});

    }
    var permicao = jwtHelper.decodeToken(token)['Permição'];
    $scope.permicaoJSON = {};
    for (i=0;i<permicao.length;i++){
        if (permicao[i] === '2C') {
            $scope.permicaoJSON['cliente'] = true;
            $scope.permicaoJSON['clienteCriar'] = true;
        }
        if (permicao[i] === '2V'){
            $scope.permicaoJSON['cliente'] = true;
            $scope.permicaoJSON['clienteVisualizar'] = true;
        }
        if (permicao[i] === '4C') {
            $scope.permicaoJSON['compra'] = true;
            $scope.permicaoJSON['compraCriar'] = true;
        }
        if (permicao[i] === '4V'){
            $scope.permicaoJSON['compra'] = true;
            $scope.permicaoJSON['compraVisualizar'] = true;
        }
        if (permicao[i] === '6C') {
            $scope.permicaoJSON['entrada'] = true;
            $scope.permicaoJSON['entradaCriar'] = true;
        }
        if (permicao[i] === '6V'){
            $scope.permicaoJSON['entrada'] = true;
            $scope.permicaoJSON['entradaVisualizar'] = true;
        }
        if (permicao[i] === '7C') {
            $scope.permicaoJSON['saida'] = true;
            $scope.permicaoJSON['saidaCriar'] = true;
        }
        if (permicao[i] === '7V'){
            $scope.permicaoJSON['saida'] = true;
            $scope.permicaoJSON['saidaVisualizar'] = true;
        }
        if (permicao[i] === '8C') {
            $scope.permicaoJSON['fornecedor'] = true;
            $scope.permicaoJSON['fornecedorCriar'] = true;
        }
        if (permicao[i] === '8V'){
            $scope.permicaoJSON['fornecedor'] = true;
            $scope.permicaoJSON['fornecedorVisualizar'] = true;
        }
        if (permicao[i] === '10C') {
            $scope.permicaoJSON['funcionario'] = true;
            $scope.permicaoJSON['funcionarioCriar'] = true;
        }
        if (permicao[i] === '10V'){
            $scope.permicaoJSON['funcionario'] = true;
            $scope.permicaoJSON['funcionarioVisualizar'] = true;
        }
        if (permicao[i] === '12C') {
            $scope.permicaoJSON['grupo'] = true;
            $scope.permicaoJSON['grupoCriar'] = true;
        }
        if (permicao[i] === '12V'){
            $scope.permicaoJSON['grupo'] = true;
            $scope.permicaoJSON['grupoVisualizar'] = true;
        }
        if (permicao[i] === '15C') {
            $scope.permicaoJSON['modelo'] = true;
            $scope.permicaoJSON['modeloCriar'] = true;
        }
        if (permicao[i] === '15V'){
            $scope.permicaoJSON['modelo'] = true;
            $scope.permicaoJSON['modeloVisualizar'] = true;
        }
        if (permicao[i] === '17C') {
            $scope.permicaoJSON['permissao'] = true;
            $scope.permicaoJSON['permissaoCriar'] = true;
        }
        if (permicao[i] === '18C') {
            $scope.permicaoJSON['reparo'] = true;
            $scope.permicaoJSON['reparoCriar'] = true;
        }
        if (permicao[i] === '18V'){
            $scope.permicaoJSON['reparo'] = true;
            $scope.permicaoJSON['reparoVisualizar'] = true;
        }
        if (permicao[i] === '19C') {
            $scope.permicaoJSON['tipoReparo'] = true;
            $scope.permicaoJSON['tipoReparoCriar'] = true;
        }
        if (permicao[i] === '19V'){
            $scope.permicaoJSON['tipoReparo'] = true;
            $scope.permicaoJSON['tipoReparoVisualizar'] = true;
        }
        if (permicao[i] === '20C'){
            $scope.permicaoJSON['usuario'] = true;
            $scope.permicaoJSON['usuarioCriar'] = true;
        }

        if (permicao[i] === '20V'){
            $scope.permicaoJSON['usuario'] = true;
            $scope.permicaoJSON['usuarioVisualizar'] = true;
        }
        if (permicao[i] === '23C'){
            $scope.permicaoJSON['veiculo'] = true;
            $scope.permicaoJSON['veiculoCriar'] = true;
        }
        if (permicao[i] === '23V'){
            $scope.permicaoJSON['veiculo'] = true;
            $scope.permicaoJSON['veiculoVisualizar'] = true;
        }
        if (permicao[i] === '24C'){
            $scope.permicaoJSON['venda'] = true;
            $scope.permicaoJSON['vendaCriar'] = true;
        }
        if (permicao[i] === '24V'){
            $scope.permicaoJSON['venda'] = true;
            $scope.permicaoJSON['vendaVisualizar'] = true;
        }
        }
});

