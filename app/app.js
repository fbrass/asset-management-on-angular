'use strict';

// Declare app level module which depends on views, and components
var assetManagementApp = angular.module('myApp', [
    'ngRoute',
    'angularFileUpload',
    'ui.bootstrap'
]);

assetManagementApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
            when('/', {
                redirectTo: '/asset-type-list'
            }).
            when('/asset-type-list', {
                templateUrl: 'partials/asset-type-list.html',
                controller: 'AssetTypeListCtrl',
                activeTab: 'asset-type'
            }).
            when('/asset-type/:type_id', {
                templateUrl: 'partials/edit-asset-type.html',
                controller: 'EditAssetTypeCtrl',
                activeTab:'asset-type'
            }).
            when('/create-asset-type',{
                templateUrl:'partials/edit-asset-type.html',
                controller:'EditAssetTypeCtrl',
                activeTab:'asset-type'
            }).
            when('/asset/', {
                templateUrl: 'partials/asset-list.html',
                controller: 'AssetCtrl',
                activeTab: 'asset'
            }).
            when('/asset/:type_id', {
                templateUrl: 'partials/asset-list.html',
                controller: 'AssetListedByTypeCtrl',
                activeTab: 'asset'
            }).
            when('/edit-asset/:asset_id', {
                templateUrl: 'partials/edit-asset.html',
                controller: 'EditAssetCtrl',
                activeTab: 'asset'
            }).
            when('/create-asset', {
                templateUrl: 'partials/edit-asset.html',
                controller: 'EditAssetCtrl',
                editMode: 'create',
                activeTab: 'asset'
            }).
            when('/about', {
                templateUrl: 'partials/about.html',
                controller: 'AboutCtrl',
                activeTab: 'about'
            }).
            otherwise({
                redirectTo: '/asset-type-list'
            });
    }
]);

assetManagementApp.controller('NavCtrl', ['$scope', '$route', function ($scope, $route) {
    $scope.$route = $route;
}]);

assetManagementApp.controller('AssetTypeListCtrl', ['$scope', function ($scope) {

    var mockAssetTypes = [
        {
            "type_id": 1,
            "assetTypeName": "SPQR Assesment Tool",
            "version": "V2",
            "description": "best tool ever",
            "make": "SPQR",
            "function": "Assessment",
            "comment": ""
        },
        {
            "type_id": 2,
            "assetTypeName": "SPQR Testing Tool",
            "version": "V3",
            "description": "",
            "make": "SPQR",
            "function": "Testing",
            "comment": ""
        },
        {
            "type_id": 3,
            "assetTypeName": "Help Tool",
            "version": "",
            "description": "",
            "make": "",
            "function": "Help",
            "comment": ""
        },
        {
            "type_id": 4,
            "assetTypeName": "Mounting System",
            "version": "X3",
            "description": "",
            "make": "",
            "function": "Help",
            "comment": ""
        },
        {
            "type_id": 5,
            "assetTypeName": "UML Design",
            "version": "",
            "description": "",
            "make": "SPQR",
            "function": "Help",
            "comment": ""
        }];


    $scope.assetTypeActive = mockAssetTypes;

}]);

assetManagementApp.controller('EditAssetTypeCtrl',['$scope',function($scope){

}]);

assetManagementApp.controller('AssetListedByTypeCtrl', ['$scope', '$routeParams',
    function ($scope, $routeParams) {

        $scope.paginationInfo = {
            searchText: undefined,
            pageSize: 25,
            page: 1,
            hasNext: true,
            hasPrev: false,
            count: 0
        };

        $scope.getPaginated = function () {
            var search;

            if ($scope.paginationInfo.searchText && $scope.paginationInfo.searchText.length > 1) {
                search = $scope.paginationInfo.searchText;
            } else {
                search = undefined;
            }

            var args;
            if (search) {
                args = {
                    pageSize: $scope.paginationInfo.pageSize,
                    page: $scope.paginationInfo.page,
                    searchText: search
                };
            } else {
                args = {
                    pageSize: $scope.paginationInfo.pageSize,
                    page: $scope.paginationInfo.page
                };
            }

            //service aufruf!!! bzw. einfügen der Mockobjekte
            var mockAssets;

            if ($routeParams.type_id == 1) {

                mockAssets =
                {
                    "total": 2,
                    "assets": [
                        {
                            "asset_id": 1,
                            "location_id": 1,
                            "type_id": 1,
                            "name": "Premium Licence",
                            "comment": "needs to be checked",
                            "construction_date": "01.01.2013",
                            "opening_value": 1200,
                            "currency": "euro"
                        },
                        {
                            "asset_id": 3,
                            "location_id": 1,
                            "type_id": 1,
                            "name": "Free Licence",
                            "comment": "",
                            "construction_date": "01.01.2015",
                            "opening_value": 0,
                            "currency": "euro"
                        }]
                };
            }

            $scope.assets = mockAssets.assets;
            $scope.paginationInfo.count = mockAssets.total;
            $scope.paginationInfo.hasPrev = $scope.paginationInfo.page > 1;
            $scope.paginationInfo.hasNext = mockAssets.assets.length >= $scope.paginationInfo.pageSize;

        };

        $scope.paginatePrev = function () {
            if ($scope.paginationInfo.hasPrev) {
                $scope.paginationInfo.page -= 1;
                $scope.getPaginated();
            }
        };

        $scope.paginateNext = function () {
            if ($scope.paginationInfo.hasNext) {
                $scope.paginationInfo.page += 1;
                $scope.getPaginated();
            }
        };

        $scope.search = function () {
            //search wurde noch nicht implementiert und eignet sich auch nicht für mockobjekte ;)
        };

        $scope.$watch('paginationInfo.searchText', function () {
            $scope.paginationInfo.page = 1;
        });

        $scope.isSearchEnabled = function () {
            return $scope.paginationInfo.searchText && $scope.paginationInfo.searchText.length > 1;
        };

        //initial load of data
        $scope.getPaginated();

    }]);


assetManagementApp.controller('AssetCtrl', ['$scope',
    function ($scope) {
        $scope.paginationInfo = {
            searchText: undefined,
            pageSize: 25,
            page: 1,
            hasNext: true,
            hasPrev: false,
            count: 0
        };


        $scope.getPaginated = function () {
            var search;

            if ($scope.paginationInfo.searchText && $scope.paginationInfo.searchText.length > 1) {
                search = $scope.paginationInfo.searchText;
            } else {
                search = undefined;
            }

            var args;
            if (search) {
                args = {
                    pageSize: $scope.paginationInfo.pageSize,
                    page: $scope.paginationInfo.page,
                    searchText: search
                };
            } else {
                args = {
                    pageSize: $scope.paginationInfo.pageSize,
                    page: $scope.paginationInfo.page
                };
            }

            //service aufruf!!! bzw. einfügen der Mockobjekte
            var mockAssets =
            {
                "total": 3,
                "assets": [
                    {
                        "asset_id": 1,
                        "location_id": 1,
                        "type_id": 1,
                        "name": "Premium Licence",
                        "comment": "needs to be checked",
                        "construction_date": "01.01.2013",
                        "opening_value": 1200,
                        "currency": "euro"
                    },
                    {
                        "asset_id": 2,
                        "location_id": 1,
                        "type_id": 1,
                        "name": "Premium Licence",
                        "comment": "",
                        "construction_date": "01.01.2015",
                        "opening_value": 1300,
                        "currency": "euro"
                    },
                    {
                        "asset_id": 3,
                        "location_id": 1,
                        "type_id": 1,
                        "name": "Free Licence",
                        "comment": "",
                        "construction_date": "01.01.2015",
                        "opening_value": 0,
                        "currency": "euro"
                    }]
            };

            $scope.assets = mockAssets.assets;
            $scope.paginationInfo.count = mockAssets.total;
            $scope.paginationInfo.hasPrev = $scope.paginationInfo.page > 1;
            $scope.paginationInfo.hasNext = mockAssets.assets.length >= $scope.paginationInfo.pageSize;

        };

        $scope.paginatePrev = function () {
            if ($scope.paginationInfo.hasPrev) {
                $scope.paginationInfo.page -= 1;
                $scope.getPaginated();
            }
        };

        $scope.paginateNext = function () {
            if ($scope.paginationInfo.hasNext) {
                $scope.paginationInfo.page += 1;
                $scope.getPaginated();
            }
        };

        $scope.search = function () {
            //search wurde noch nicht implementiert und eignet sich auch nicht für mockobjekte ;)
        };

        $scope.$watch('paginationInfo.searchText', function () {
            $scope.paginationInfo.page = 1;
        });

        $scope.isSearchEnabled = function () {
            return $scope.paginationInfo.searchText && $scope.paginationInfo.searchText.length > 1;
        };

        //initial load of data
        $scope.getPaginated();

    }]);


assetManagementApp.controller('EditAssetCtrl', ['$scope', '$route', '$routeParams', '$location',
    function ($scope, $route, $routeParams, $location ) {
        var editMode = $route.current.editMode !== 'create';

        $scope.isEditMode = editMode;

        $scope.titleText = editMode ? 'Edit Asset' : 'New Asset';
        $scope.subTitleText = editMode ? '' : 'what a luck';
        $scope.legendText = $scope.titleText;
        $scope.saveAssetText = editMode ? 'Save' : 'Create';
        $scope.cancelText = 'Cancel';

        function dateToYMD(date) {
            var d = date.getDate();
            var m = date.getMonth() + 1;
            var y = date.getFullYear();
            return '' + y + '-' + (m <= 9 ? '0' + m : m) + '-' + (d <= 9 ? '0' + d : d);
        }


        var defaultForm = {
            name: '',
            comment: '',
            construction_date: dateToYMD(new Date()),
            opening_value: 0,
            currency: ''
        };

        if (editMode) {
            //hier muss der service noch implementiert werden
            $scope.asset = {
                name: 'Premium Licence',
                comment: 'needs to be checked',
                construction_date: dateToYMD(new Date()),
                opening_value: 1200,
                currency: 'euro'

            };
        } else {
            $scope.asset = angular.copy(defaultForm);
        }

        $scope.saveAsset = function (anAsset) {
            //service zum erstellen eines Assets hier benutzten!!!!

            //unterscheidung zwischen edit und save nicht vergessen

            //location ändern zum der asset list oder was gewünscht ist!!

            $location.path('/asset');
            $location.replace();

        };

        $scope.cancelEdit = function () {
            $location.path(/assets/ + $routeParams.asset_id);
        };


    }

]);

assetManagementApp.controller('AboutCtrl', ['$scope', function ($scope) {


}]);



