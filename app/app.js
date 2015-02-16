'use strict';

// Declare app level module which depends on views, and components
var assetManagementApp = angular.module('myApp', [
    'ngRoute'
]);

assetManagementApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
            when('/', {
                redirectTo: '/asset-type'
            }).
            when('/asset-type', {
                templateUrl: 'partials/asset-type.html',
                controller: 'AssetTypeCtrl',
                activeTab: 'asset-type'
            }).
            when('/asset', {
                templateUrl: 'partials/asset.html',
                controller: 'AssetCtrl',
                activeTab: 'asset'
            }).
            when('/about', {
                templateUrl: 'partials/about.html',
                controller: 'AboutCtrl',
                activeTab: 'about'
            }).
            otherwise({
                redirectTo: '/asset-type'
            });
    }
]);

assetManagementApp.controller('NavCtrl', ['$scope', '$route', function ($scope, $route) {
    $scope.$route = $route;
}]).
    controller('AssetTypeCtrl', ['$scope', function ($scope) {


    }]).controller('AssetCtrl', ['$scope', function ($scope) {

    }]).controller('AboutCtrl', ['$scope', function ($scope) {
    }]);



