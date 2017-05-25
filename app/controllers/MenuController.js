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
});

