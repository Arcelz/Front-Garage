angular
    .module('app.core')
    .factory('data', data);

/* @ngInject */
function data($http,AuthService) {
    var service = {
        test: test,
        get: get,
        realizarPost: realizarPost
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

    function get(caminho) {
        console.log(config);
        return $http.get(caminho,config)
            .then(getCompleto)
            .catch(function (message) {
                console.log(('XHR Failed for get') + (message));
                
            });

        function getCompleto(data, status, headers, config) {
            return data;
        }
    }

    function realizarPost(caminho, data) {
        var data = $.param(data);
        console.log(data);
        return $http.post(caminho, data)
            .then(postCompleto)
            .catch(function (message) {
                console.log(('XHR Failed for post',message.data));
                alert(message.data.message);
            });

        function postCompleto(data, status, headers, config) {
            return data;
        }
    }
}