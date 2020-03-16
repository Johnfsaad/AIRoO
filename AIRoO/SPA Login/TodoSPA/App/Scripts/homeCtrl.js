'use strict';
angular.module('todoApp')
    .controller('homeCtrl', ['$scope', 'adalAuthenticationService', '$location', function ($scope, adalService, $location) {
    //Assign to login button in index.html
    $scope.login = function () {
        adalService.login();
    };
    $scope.logout = function () {
        adalService.logOut();
    };
    $scope.isActive = function (viewLocation) {        
        return viewLocation === $location.path();
    };
}]);