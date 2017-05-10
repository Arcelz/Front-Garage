angular
    .module('app.core')
    .factory('DataService', DataService);

/* @ngInject */
function DataService($http, AuthService) {
    var service = {
        test: test,
        realizarGet: realizarGet,
        realizarPost: realizarPost,
        realizarDelete: realizarDelete,
        realizarPut: realizarPut
    };
    var config = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;',
            'Authorization': AuthService.getToken()
        }
    };
    return service;
    function test() {
        return alert("data service ok");
    }

    function realizarGet(caminho) {
        return $http.get(caminho, config)
            .then(function successCallback(response) {
                    return response;
                }
                , function errorCallback(response) {
                    return response;
                });
    }

    function realizarPost(caminho, data) {
        var data = $.param(data);
        return $http.post(caminho, data, config)
            .then(function successCallback(response) {
                    return response;
                }
                , function errorCallback(response) {
                    return response;
                });
    }

      function realizarDelete(caminho) {        
        return $http.delete(caminho, config)
            .then(function successCallback(response) {
                    return response;
                }
                , function errorCallback(response) {
                    return response;
                });
    }

    function realizarPut(caminho, data) {
        var data = $.param(data);
        return $http.put(caminho, data, config)
            .then(function successCallback(response) {
                    return response;
                }
                , function errorCallback(response) {
                    return response;
                });
    }
}