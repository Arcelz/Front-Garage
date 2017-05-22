angular.module('app.core')
        .factory('logger', logger);

    function logger(toastr) {
        var service = {
            error   : error,
            info    : info,
            success : success,
            warning : warning,
        };

        return service;
        /////////////////////

        function error(message, title) {
            toastr.error(message, title);
        }

        function info(message, title) {
            toastr.info(message, title);
        }

        function success(message) {
            toastr.success(message);
        }

        function warning(message, title) {
            toastr.warning(message, title);
        }
    };
