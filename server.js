/**
 * Created by said on 22.02.2015.
 */
var express = require('express');
var app = express();
var path = require('path');

var html_dir = path.resolve('app/');

console.log(html_dir);

app.use(express.static(html_dir));

app.get('/resources/assettypelist', function (req, res) {


    res.json([
        {
            "type_id": 1,
            "assetTypeName": "SPQR Assesment Tool",
            "version": "V2",
            "description": "best tool ever",
            "make": "SPQR",
            "function": "Assessment",
            "comment": ""
        }, {
            "type_id": 2,
            "assetTypeName": "SPQR Testing Tool",
            "version": "V3",
            "description": "",
            "make": "SPQR",
            "function": "Testing",
            "comment": ""
        }, {
            "type_id": 3,
            "assetTypeName": "Help Tool",
            "version": "",
            "description": "",
            "make": "",
            "function": "Help",
            "comment": ""
        }, {
            "type_id": 4,
            "assetTypeName": "Mounting System",
            "version": "X3",
            "description": "",
            "make": "",
            "function": "Mounting",
            "comment": ""
        }, {
            "type_id": 5,
            "assetTypeName": "UML Design",
            "version": "",
            "description": "",
            "make": "SPQR",
            "function": "Modelling",
            "comment": ""
        }, {
            "type_id": 6,
            "assetTypeName": "Wireframe Design",
            "version": "V2",
            "description": "",
            "make": "SPQR",
            "function": "Modelling",
            "comment": ""
        }, {
            "type_id": 7,
            "assetTypeName": "License Management Tool",
            "version": "1.374",
            "description": "",
            "make": "Example",
            "function": "Management",
            "comment": ""
        }, {
            "type_id": 8,
            "assetTypeName": "ERP System Professional",
            "version": "V15",
            "description": "ERP-System",
            "make": "SPQR",
            "function": "Enterprise Resource Planing",
            "comment": ""
        }, {
            "type_id": 9,
            "assetTypeName": "Information Manager",
            "version": "",
            "description": "",
            "make": "",
            "function": "",
            "comment": ""
        }, {
            "type_id": 10,
            "assetTypeName": "Key Manager",
            "version": "V5",
            "description": "",
            "make": "",
            "function": "",
            "comment": ""
        }, {
            "type_id": 11,
            "assetTypeName": "Email Server",
            "version": "3.1",
            "description": "",
            "make": "SPQR",
            "function": "",
            "comment": ""
        }, {
            "type_id": 12,
            "assetTypeName": "SPQR Phone Tracer",
            "version": "2.4",
            "description": "",
            "make": "SPQR",
            "function": "Tracing",
            "comment": ""
        }, {
            "type_id": 13,
            "assetTypeName": "SPQR Surveillance System",
            "version": "",
            "description": "",
            "make": "SPQR",
            "function": "Monitoring",
            "comment": ""
        }, {
            "type_id": 6,
            "assetTypeName": "Wireframe Design",
            "version": "V2",
            "description": "",
            "make": "SPQR",
            "function": "Modelling",
            "comment": ""
        }]);


});

//sends back all Assets
app.get('/resources/assetlist/25/1', function (req, res) {
    res.json(
        {
            "total": 8,
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
                },
                {
                    "asset_id": 4,
                    "location_id": 1,
                    "type_id": 1,
                    "logo_id": undefined,
                    "name": "Free License",
                    "comment": "",
                    "construction_date": "01.01.2015",
                    "opening_value": 0,
                    "currency": "euro"
                },
                {
                    "asset_id": 5,
                    "location_id": 1,
                    "type_id": 1,
                    "logo_id": undefined,
                    "name": "Free License",
                    "comment": "",
                    "construction_date": "01.01.2015",
                    "opening_value": 0,
                    "currency": "euro"
                },
                {
                    "asset_id": 6,
                    "location_id": 1,
                    "type_id": 1,
                    "logo_id": undefined,
                    "name": "Free License",
                    "comment": "",
                    "construction_date": "01.01.2015",
                    "opening_value": 0,
                    "currency": "euro"
                },
                {
                    "asset_id": 7,
                    "location_id": 1,
                    "type_id": 1,
                    "logo_id": undefined,
                    "name": "Free License",
                    "comment": "",
                    "construction_date": "01.01.2015",
                    "opening_value": 0,
                    "currency": "euro"
                },
                {
                    "asset_id": 8,
                    "location_id": 1,
                    "type_id": 1,
                    "logo_id": undefined,
                    "name": "Free License",
                    "comment": "",
                    "construction_date": "01.01.2015",
                    "opening_value": 0,
                    "currency": "euro"
                },
                {
                    "asset_id": 9,
                    "location_id": 1,
                    "type_id": 1,
                    "logo_id": undefined,
                    "name": "Free License",
                    "comment": "",
                    "construction_date": "01.01.2015",
                    "opening_value": 0,
                    "currency": "euro"
                }]
        });
});

//sends back all assets by type_id = 1
app.get('/resources/assetlist/25/1/1', function (req, res) {
    res.json(
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
                    "asset_id": 3,
                    "location_id": 1,
                    "type_id": 1,
                    "logo_id": undefined,
                    "name": "Free License",
                    "comment": "",
                    "construction_date": "01.01.2015",
                    "opening_value": 0,
                    "currency": "euro"
                },
                {
                    "asset_id": 4,
                    "location_id": 1,
                    "type_id": 1,
                    "logo_id": undefined,
                    "name": "Free License",
                    "comment": "",
                    "construction_date": "01.01.2015",
                    "opening_value": 0,
                    "currency": "euro"
                }]
        }
    )
});


var server = app.listen(8080, function () {

    var host = server.address().adress;
    var port = server.address().port;

    console.log('Example app listending at http://%s:%s', host, port);

});
