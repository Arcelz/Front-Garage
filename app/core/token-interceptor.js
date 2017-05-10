angular.module('app.core')
        .factory('tokenInterceptor', function($localStorage,$q,$location){
            var interceptor = {};
           
            interceptor.request = function(config){
                config.headers = config.headers || {};
                if($localStorage.token){
                    config.headers['Authorization'] = $localStorage.token;
                    config.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8;';
                    //console.log('Adicionando token na requisição');
                   // console.log(config.headers);
                };
                
                return config;
            };

            interceptor.responseError =  function(rejection){
                    //console.log(rejection);
                    if(rejection != null && rejection.status== 404){
                            $location.path('/');
                    } 
                return $q.reject(rejection);
            };
            return interceptor;


        });