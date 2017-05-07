angular.module('app.core')
        .factory('tokenInterceptor', function($localStorage){
            var interceptor = {};
           
            interceptor.request = function(config){
                config.headers = config.headers || {};
                if($localStorage.token){
                    config.headers['Authorization'] = $localStorage.token;
                    config.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8;';
                    console.log('Adicionando token na requisição');
                    console.log(config.headers);
                }
                return config;
            };
            return interceptor;


        });