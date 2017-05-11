app.run(function ($transitions, $state, $location, jwtHelper, AuthService, Permicao) {

    $transitions.onStart({to: 'common.**'}, function (trans) {
        var token = AuthService.getToken();

        var loca = trans.to().url.substring(1);
        var permi = trans.to().permicao;
        var Permicao = jwtHelper.decodeToken(token)['Permição'];
        var boleanPermicao = false;
        for(var i=10;i<Permicao.length;i++) {
            if (Permicao[i]==permi){
                return boleanPermicao = true;
            }
        }
        if (!boleanPermicao) {
            return trans.router.stateService.target('error', {error: '500', errorMessage: 'Ce nao tem permicao'});
        }
    });
    $transitions.onStart({}, function (trans) {
        var token = AuthService.getToken();

        var loca = trans.to().url;
        // keep user logged in after page refresh
        if (AuthService.getToken() != undefined) {
            if (jwtHelper.isTokenExpired(token)) {
                if (trans.to().login == undefined) {
                    return trans.router.stateService.target('login');
                }
            }
            else if (loca == '/login') {
                return trans.router.stateService.target('home');
            }
        }
        else if (trans.to().login == undefined) {
            return trans.router.stateService.target('login');
        }
    });
})