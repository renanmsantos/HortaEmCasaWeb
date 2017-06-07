'use strict';

angular.module('hortaApp')
    .controller('LoginCtrl', function ($scope, $http, $location, AuthenticationService) {
        $scope.logar = function(){
            if( $scope.form.$valid ){
                AuthenticationService.Login($scope.login, function (result) {
                    if (result === true) {
                        $location.path( "/home" );
                    } else {
                        $scope.mensagem = "(*) Login e/ou senha inválidos."
                    }
                });
            }
        }
    });