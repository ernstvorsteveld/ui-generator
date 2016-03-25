(function () {

    'use strict';

    var app = angular.module('app', ['ngRoute', 'ngResource']);

    app.constant("URLS", {
        "api": {
            "ui_config": '/api/ui/config/:name',
            "users": "/api/users/:id"
        }
    });

    app.config(['$routeProvider', "URLS", function ($routeProvider) {
        $routeProvider
            .when('/index', {
                controller: 'IndexController',
                templateUrl: 'index/index.html',
                controllerAs: 'index'
            })
            .when('/edit', {
                controller: 'EditController',
                templateUrl: 'edit/edit.html',
                controllerAs: 'edit'
            })
            .when('/list', {
                controller: 'ListController',
                templateUrl: 'list/list.html',
                controllerAs: 'list'
            })
            .otherwise({redirectTo: '/index'});

    }]);

}());
