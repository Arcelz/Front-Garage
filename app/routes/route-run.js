app.run(run);
function run($rootScope, $location, AuthService, jwtHelper) {
    $rootScope.$on("$locationChangeStart", function (event, next, current) {
        var location = $location.path();
        var token = AuthService.getToken();
        // keep user logged in after page refresh
        if (AuthService.getToken() != undefined) {
            if (jwtHelper.isTokenExpired(token)) {
                console.log('Token vencido');
                $location.path('/login');
            }
            else if (location == '/login') {
                alert('vc ta logado ja');
                $location.path('/');
            }
            else {
                console.log('pode continuar');
            }
        }

        // redirect to login page if not logged in and trying to access a restricted page
        else {
            $location.path('/login');
        }
    })
}