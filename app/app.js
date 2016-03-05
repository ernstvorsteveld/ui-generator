(function () {

    'use strict';

    var app = angular.module('app', ['ngRoute', 'ngResource']);

    app.constant("URLS", {
        "api": {
            "ui_config": '/api/ui/config/:name'
        }
    });

    app.config(['$routeProvider', "URLS", function ($routeProvider) {
        $routeProvider
            .when('/main', {
                controller: 'mainController',
                templateUrl: 'main/main.html',
                controllerAs: 'main'
            })
            .otherwise({redirectTo: '/main'});
    }]);

}());
