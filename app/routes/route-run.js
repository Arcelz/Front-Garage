app.run(function ($transitions, $state, $location, jwtHelper, AuthService) {

    $transitions.onStart({to: 'common.**'}, function (trans) {
        var token = AuthService.getToken();
        if (token === undefined) {
            return trans.router.stateService.target('login');
        }
        else if (AuthService.getToken() != undefined) {
            if (jwtHelper.isTokenExpired(token)) {
                if (trans.to().login === undefined) {
                    return trans.router.stateService.target('login');
                }
            }
        }
        var permi = trans.to().permicao;
        var Permicao = jwtHelper.decodeToken(token)['Permicao'];
        if (!Permicao[permi]) {
            return trans.router.stateService.target('error', {error: '500', errorMessage: 'Você nao tem permição'});
        }
    });
    $transitions.onStart({}, function (trans) {
        var token = AuthService.getToken();
        var loca = trans.to().url;
        // keep user logged in after page refresh
        if (AuthService.getToken() != undefined) {
            if (jwtHelper.isTokenExpired(token)) {
                if (trans.to().login === undefined) {
                    return trans.router.stateService.target('login');
                }
            }
            else if (loca === '/login') {
                return trans.router.stateService.target('home');
            }
        }
        else if (trans.to().login === undefined) {
            return trans.router.stateService.target('login');
        }
    });
})