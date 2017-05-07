angular
    .module('app.core')
    .factory('data', data);

/* @ngInject */
function data($http) {
    var service = {
        test: test,
        get: get,
        realizarPost: realizarPost
    };
    var config = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
        }
    };
    return service;
    function test() {
        return alert("data service ok");
    }

    function get(caminho) {
        return $http.get(caminho)
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
        return $http.post(caminho, data, config)
            .then(postCompleto)
            .catch(function (message) {
                console.log(('XHR Failed for post') + (message));
            });

        function postCompleto(data, status, headers, config) {
            return data;
        }
    }
}