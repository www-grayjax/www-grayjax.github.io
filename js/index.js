'use strict';

window.angular
    .module('grayjax', ['ngRoute'])
    .config([
        '$routeProvider',
        '$locationProvider',
        function routingConfig($routeProvider, $locationProvider) {
            $routeProvider
                .when('/', {
                    pageId: 'home',
                    templateUrl: '/views/home.nghtml'
                })
                .when('/products', {
                    pageId: 'products',
                    templateUrl: '/views/products.nghtml'
                })
                .when('/services', {
                    pageId: 'services',
                    templateUrl: '/views/services.nghtml'
                })
                .otherwise('/');

            $locationProvider.html5Mode(true);
        }
    ])
    .controller('GrayJaxRoot', [
        '$scope',
        function GrayJaxRootController($scope) {
            $scope.$on('$routeChangeSuccess', function onRouteChangeSuccess(event, currentRoute) {
                $scope.pageId = currentRoute.pageId;
            });
        }
    ]);
