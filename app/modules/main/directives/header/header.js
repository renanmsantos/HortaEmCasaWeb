'use strict';

angular.module('hortaApp')
	.directive('header',function(){
		return {
        templateUrl:'modules/main/directives/header/header.html',
        restrict: 'E',
        replace: true,
    	}
	});


