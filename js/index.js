'use strict';

window.angular
    .module('grayJax', ['ngRoute', 'ui.mask'])
    .config([
        '$routeProvider',
        '$locationProvider',
        function routingConfig($routeProvider, $locationProvider) {
            $routeProvider
                .when('/', {
                    pageId: 'home',
                    controller: 'Home',
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
        '$sce',
        function GrayJaxRootController($scope, $sce) {
            var CONTACT_US_EMAIL_ADDRESS = 'rangemonk@gmail.com';

            $scope.contactUsFormUrl = $sce.trustAsResourceUrl('https://formspree.io/' + CONTACT_US_EMAIL_ADDRESS);
            $scope.contactUsRequest = {}

            $scope.contactUs = function contactUs($event) {
                if (!$scope.contactUsForm.$valid) {
                    $event.preventDefault();

                    $scope.contactUsForm.$setSubmitted();

                    return;
                }
            }

            $scope.$on('$routeChangeSuccess', function onRouteChangeSuccess(event, currentRoute) {
                $scope.contactUsForm.$setUntouched();

                $scope.pageId = currentRoute.pageId;
            });
        }
    ])
    .controller('Home', [
        '$scope',
        '$routeParams',
        '$timeout',
        function HomeController($scope, $routeParams, $timeout) {
            if ($routeParams.hasContactedUs === 'true') {
                $scope.hasContactedUs = true;

                $timeout(function onTimeout() {
                    $scope.hideContactedUsBanner = true;
                }, 9667);
            }
        }
    ]);
