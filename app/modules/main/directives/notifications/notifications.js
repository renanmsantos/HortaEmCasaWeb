'use strict';

angular.module('hortaApp')
	.directive('notifications',function(){
		return {
        templateUrl:'modules/main/directives/notifications/notifications.html',
        restrict: 'E',
        replace: true,
    	}
	});


