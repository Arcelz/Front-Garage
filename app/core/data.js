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
    const link = 'http://localhost/php/GarageAPI/';
    return service;

    function realizarGet(caminho) {
        var config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;',
                'Authorization': AuthService.getToken()
            }
        };
        return $http.get(link+caminho, config)
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
        return $http.post(link+caminho, data, config)
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
                     toastr.error(response.data.status_message);
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
        return $http.delete(link+caminho, config)
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
                    toastr.error(response.data.status_message);
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
            return $http.put(link+caminho, data, config)
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
                        toastr.error(response.data.status_message);
                        return response;
                    });
        }
        else {
            return $http.put(link+caminho, data, config)
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
                        toastr.error(response.data.status_message);
                        return response;
                    });
        }
    }
}