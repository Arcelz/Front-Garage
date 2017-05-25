app.controller('Error', function ($scope, $stateParams, $rootScope) {
    $scope.error = $stateParams.error;
    $scope.errorMessage = $stateParams.errorMessage;
});