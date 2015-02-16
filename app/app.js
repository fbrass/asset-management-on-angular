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

        var mockAssetTypes = [
            {
                "assetTypeId": 1,
                "assetTypeName": "SPQR Assesment Tool",
                "version": "V2",
                "description": "best tool ever",
                "make": "SPQR",
                "function": "Assessment",
                "comment": ""
            },
            {
                "assetTypeId": 2,
                "assetTypeName": "SPQR Testing Tool",
                "version": "V3",
                "description": "",
                "make": "SPQR",
                "function": "Testing",
                "comment": ""
            },
            {
                "assetTypeId": 3,
                "assetTypeName": "Help Tool",
                "version": "",
                "description": "",
                "make": "",
                "function": "Help",
                "comment": ""
            },
            {
                "assetTypeId": 4,
                "assetTypeName": "Mounting System",
                "version": "X3",
                "description": "",
                "make": "",
                "function": "Help",
                "comment": ""
            },
            {
                "assetTypeId": 5,
                "assetTypeName": "UML Design",
                "version": "",
                "description": "",
                "make": "SPQR",
                "function": "Help",
                "comment": ""
            }];


        $scope.assetTypeActive =mockAssetTypes;

    }]).
    controller('AssetCtrl', ['$scope', function ($scope) {

    }]).
    controller('AboutCtrl', ['$scope', function ($scope) {
    }]);



