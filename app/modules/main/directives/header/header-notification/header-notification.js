'use strict';

angular.module('hortaApp')
	.directive('headerNotification',function(){
		return {
        templateUrl:'modules/main/directives/header/header-notification/header-notification.html',
        restrict: 'E',
        replace: true,
    	}
	});


