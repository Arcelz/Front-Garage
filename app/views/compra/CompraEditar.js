app.controller('CompraEdidar', function ($scope, $rootScope, DataService) {

    $scope.cancelamento = function(id, index){
        $scope.titulo = "CANCELAMENTO DA COMPRA";
        $scope.msg = "TEM CERTEZA QUE DESEJA CANCELAR A COMPRA: "+id;

         angular.element('#modal_mensagens').modal('show');

    }


});