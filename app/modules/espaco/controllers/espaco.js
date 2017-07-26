'use strict';

angular.module('hortaApp')
    .controller('EspacoCtrl', function($scope, $http, $localStorage) {

        $scope.garden = {};

        $scope.getUser = function (){
            $http.get(url("user/login/" + $localStorage.currentUser.user) )
                .then(function (response) {
                    $scope.user = response.data;
                });
        }

        $scope.getAllGardens = function (){
            $http.get(url("garden/all"))
                .then(function (response) {
                    $scope.gardens = response.data;
                });
        }

        $scope.save = function() {
            if( $scope.form.$valid ){
                $scope.garden.types = [];
                $http.post(url("garden"), $scope.garden).then(function(response){
                    alert("Inserido");
                    $scope.getAllGardens();
                });
            }
        }

        $scope.getUser();
        $scope.getAllGardens();


    });
