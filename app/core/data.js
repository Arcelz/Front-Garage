angular
    .module('app.core')
    .factory('DataService', DataService);

/* @ngInject */
function DataService($http, AuthService, toastr) {
    var service = {
        realizarGet: realizarGet,
        realizarPost: realizarPost,
        realizarDelete: realizarDelete,
        realizarPut: realizarPut
    };

    return service;

    function realizarGet(caminho) {
        var config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;',
                'Authorization': AuthService.getToken()
            }
        };
        return $http.get(caminho, config)
            .then(function successCallback(response) {
                    return response;
                }
                , function errorCallback(response) {
                    return response;
                });
    }

    function realizarPost(caminho, data) {
        var config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;',
                'Authorization': AuthService.getToken()
            }
        };
        var data = $.param(data);
        return $http.post(caminho, data, config)
            .then(function successCallback(response) {
                    if (response.data.status === 200) {
                        toastr.success(response.data.status_message);
                    }
                    else if (response.data.status === 400) {
                        toastr.error(response.data.status_message);
                    }
                    return response;
                }
                , function errorCallback(response) {
                    return response;
                });
    }

    function realizarDelete(caminho) {
        var config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;',
                'Authorization': AuthService.getToken()
            }
        };
        return $http.delete(caminho, config)
            .then(function successCallback(response) {
                    if (response.data.status === 200) {
                        toastr.success(response.data.status_message);
                    }
                    else if (response.data.status === 400) {
                        toastr.error(response.data.status_message);
                    }
                    return response;
                }
                , function errorCallback(response) {
                    return response;
                });
    }

    function realizarPut(caminho, data) {
        var config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;',
                'Authorization': AuthService.getToken()
            }
        };
        if (data !== undefined){
            var data = $.param(data);
            return $http.put(caminho, data, config)
                .then(function successCallback(response) {
                        if (response.data.status === 200) {
                            toastr.success(response.data.status_message);
                        }
                        else if (response.data.status === 400) {
                            toastr.error(response.data.status_message);
                        }
                        return response;
                    }
                    , function errorCallback(response) {
                        return response;
                    });
        }
        else {
            return $http.put(caminho, data, config)
                .then(function successCallback(response) {
                        if (response.data.status === 200) {
                            toastr.success(response.data.status_message);
                        }
                        else if (response.data.status === 400) {
                            toastr.error(response.data.status_message);
                        }
                        return response;
                    }
                    , function errorCallback(response) {
                        return response;
                    });
        }
    }
}