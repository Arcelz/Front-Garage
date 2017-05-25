angular.module('app.core')
    .factory('MudarCor', MudarCor);

function MudarCor($localStorage, $q) {
    return {
        mudarCor: function () {
            var letraGeral = $localStorage.corLetraGeral;
            var fundoGeral = $localStorage.corFundoGeral;
            var letraSuperior = $localStorage.corLetraSuperior;
            var fundoSuperior = $localStorage.corFundoSuperior;

            if (letraSuperior !== undefined && fundoSuperior !== undefined) {
                $(".navbar.navbar-inverse.bg-indigo").css({'background-color': fundoSuperior});
                $(".navbar.navbar-inverse.bg-indigo a").css({'color': letraSuperior});
            }

            if (letraGeral !== undefined && fundoGeral !== undefined) {
                $("#menuLateral").css({'background-color': fundoGeral});
                $(".panel-body").css({'background-color': fundoGeral, 'color': letraGeral});// cor de fundo do conteudo
                $(".breadcrumb-line").css({'background-color': fundoGeral});// cor de fundo da parte de cima onde fica a navegacao
                $(".panel-heading").css({'background-color': fundoGeral});// cor de fundo do titulo do conteudo
                $(".panel-heading h5").css({'color': letraGeral});// cor da letra do titulo do conteudo
                $(".panel-body legend").css({'color': letraGeral});// cor da letra do subtitulo do conteudo
                $(".breadcrumb-line a").css({'color': letraGeral});// cor da letra navegacao
                $(".navigation.navigation-main.navigation-accordion li span").css({'color': letraGeral});
                $(".navigation.navigation-main.navigation-accordion li a").css({'color': letraGeral});
                $(".sidebar-user-material-content h6").css({'color': letraGeral});
                $(".table.datatable-basic").css({'background-color': fundoGeral});
                $(".table.datatable-basic").css({'color': letraGeral});
                $(".corIcone i").css({'color': letraGeral});
            }
        }
    }
}
