/**
 * Created by said on 18.02.2015.
 */
var assetManagementController = angular.module('assetManagementController', [

]);


assetManagementController.controller('NavCtrl', ['$scope', '$route', function ($scope, $route) {
    $scope.$route = $route;
}]);

assetManagementController.controller('AssetTypeListCtrl', ['$scope', function ($scope) {

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

assetManagementController.controller('EditAssetTypeCtrl', ['$scope', function ($scope) {

}]);

assetManagementController.controller('AssetListedByTypeCtrl', ['$scope', '$routeParams',
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
                            "logo_id": undefined,
                            "name": "Premium License",
                            "comment": "needs to be checked",
                            "construction_date": "01.01.2013",
                            "opening_value": 1200,
                            "currency": "euro"
                        },
                        {
                            "asset_id": 3,
                            "location_id": 1,
                            "type_id": 1,
                            "logo_id": undefined,
                            "name": "Free License",
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


assetManagementController.controller('AssetCtrl', ['$scope',
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
                        "logo_id": undefined,
                        "name": "Premium License",
                        "comment": "needs to be checked",
                        "construction_date": "01.01.2013",
                        "opening_value": 1200,
                        "currency": "euro"
                    },
                    {
                        "asset_id": 2,
                        "location_id": 1,
                        "type_id": 1,
                        "logo_id": undefined,
                        "name": "Premium License",
                        "comment": "",
                        "construction_date": "01.01.2015",
                        "opening_value": 1300,
                        "currency": "euro"
                    },
                    {
                        "asset_id": 3,
                        "location_id": 1,
                        "type_id": 1,
                        "logo_id": undefined,
                        "name": "Free License",
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


assetManagementController.controller('EditAssetCtrl', ['$scope', '$route', '$routeParams', '$location', '$upload',
    function ($scope, $route, $routeParams, $location, $upload) {
        var editMode = $route.current.editMode !== 'create';

        $scope.isEditMode = editMode;

        $scope.titleText = editMode ? 'Edit Asset' : 'New Asset';
        $scope.subTitleText = editMode ? '' : '';
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
                name: 'Premium License',
                comment: 'needs to be checked',
                "logo_id": undefined,
                construction_date: dateToYMD(new Date()),
                opening_value: 1200,
                currency: 'euro'

            };
        } else {
            $scope.asset = angular.copy(defaultForm);
        }

        $scope.saveAsset = function (anAsset) {
            anAsset.imageUrl = undefined; //Not known on the server!


            //service zum erstellen eines Assets hier benutzten!!!!

            //unterscheidung zwischen edit und save nicht vergessen

            //location ändern zum der asset list oder was gewünscht ist!!

            $location.path('/asset');
            $location.replace();

        };

        $scope.cancelEdit = function () {
            $location.path(/assets/ + $routeParams.asset_id);
        };

        $scope.removeImage = function () {
            $scope.imageUrl = undefined;
            $scope.asset.logoId = undefined;
        };

        $scope.onFileSelect = function ($files) {

            console.log($files);

            // $files: an array of files selected, each file has name, size, and type.
            for (var i = 0; i < $files.length; i++) {
                var file = $files[i];
                $scope.upload = $upload.upload({
                    url: 'file',
                    method: 'POST',
                    file: file
                }).progress(function (evt) {
                    console.log('percent: ' + parseInt(100.0 * evt.loaded / evt.total));
                }).success(function (data /*, status, headers, config*/) { // file is uploaded successfully

                    console.log("bis hier hin");
                    console.log(data);
                    console.log("bis hier hin2");
                    $scope.uploads = data;


                    if (data != null && data.length > 0) {
                        var i = data[0];
                        console.log("bis hier hin3");
                        $scope.asset.logo_id = i.logo_id;
                        $scope.imageUrl = i.imageUrl;
                    }
                });
            }
        }


    }

]);

assetManagementController.controller('AboutCtrl', ['$scope', function ($scope) {


}]);