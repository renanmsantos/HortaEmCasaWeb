'use strict';
/**
 * @ngdoc overview
 * @name hortaApp
 * @description
 * # hortaApp
 *
 * Main module of the application.
 */
angular
    .module('hortaApp', [
        'oc.lazyLoad',
        'ui.router',
        'ngStorage',
        'ui.bootstrap',
        'angular-loading-bar'
    ])
    .config(['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider', function ($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {

        $ocLazyLoadProvider.config({
            debug: false,
            events: true,
        });

        $urlRouterProvider.otherwise('/login');

        $stateProvider

            .state('login', {
                templateUrl: 'modules/login/views/login.html',
                url: '/login',
                controller: 'LoginCtrl',
                resolve: {
                    loadMyFiles:function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name:'hortaApp',
                            files:[
                                'modules/login/controllers/login.js',
                                'modules/login/services/AuthenticationService.js'
                            ]
                        })
                    }
                }
            })

            .state('main', {
                url: '/main',
                templateUrl: 'modules/main/views/main.html',
                resolve: {
                    loadMyDirectives: function ($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name: 'hortaApp',
                            files: [
                                'modules/main/directives/header/header.js',
                                'modules/main/directives/header/header-notification/header-notification.js',
                                'modules/main/directives/sidebar/sidebar.js'
                            ]
                        }),
                        $ocLazyLoad.load(
                            {
                                name: 'toggle-switch',
                                files: ["bower_components/angular-toggle-switch/angular-toggle-switch.min.js",
                                    "bower_components/angular-toggle-switch/angular-toggle-switch.css"
                                ]
                            }),
                        $ocLazyLoad.load(
                            {
                                name: 'ngAnimate',
                                files: ['bower_components/angular-animate/angular-animate.js']
                            })
                        $ocLazyLoad.load(
                            {
                                name: 'ngCookies',
                                files: ['bower_components/angular-cookies/angular-cookies.js']
                            })
                        $ocLazyLoad.load(
                            {
                                name: 'ngResource',
                                files: ['bower_components/angular-resource/angular-resource.js']
                            })
                        $ocLazyLoad.load(
                            {
                                name: 'ngSanitize',
                                files: ['bower_components/angular-sanitize/angular-sanitize.js']
                            })
                        $ocLazyLoad.load(
                            {
                                name: 'ngTouch',
                                files: ['bower_components/angular-touch/angular-touch.js']
                            })
                    }
                }
            })

            .state('main.painel', {
                url: '/painel',
                controller: 'PainelCtrl',
                templateUrl: 'modules/painel/views/painel.html',
                resolve: {
                    loadMyFiles: function ($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name: 'hortaApp',
                            files: [
                                'modules/painel/controllers/painel.js'
                            ]
                        })
                    }
                }
            })

            .state('main.espaco', {
                url: '/espaco',
                controller: 'EspacoCtrl',
                templateUrl: 'modules/espaco/views/espaco.html',
                resolve: {
                    loadMyFiles: function ($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name: 'hortaApp',
                            files: [
                                'modules/espaco/controllers/espaco.js'
                            ]
                        })
                    }
                }
            })

            .state('main.horta', {
                url: '/horta',
                controller: 'HortaCtrl',
                templateUrl: 'modules/horta/views/horta.html',
                resolve: {
                    loadMyFiles: function ($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name: 'hortaApp',
                            files: [
                                'modules/horta/controllers/horta.js'
                            ]
                        })
                    }
                }
            })


    }])
    .run(['$rootScope', '$http', '$location', '$localStorage', function($rootScope, $http, $location, $localStorage){

        if ($localStorage.currentUser) {
            $http.defaults.headers.common.Authorization = 'Bearer ' + $localStorage.currentUser.token;
        }
        // redirect to login page if not logged in and trying to access a restricted page
        $rootScope.$on('$locationChangeStart', function () {
            var publicPages = ['/login'];
            var restrictedPage = publicPages.indexOf($location.path()) === -1;
            if (restrictedPage && !$localStorage.currentUser) {
                $location.path('/login');
            }
        });

    }]);

    
