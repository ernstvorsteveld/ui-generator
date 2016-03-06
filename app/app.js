(function () {

    'use strict';

    var app = angular.module('app', ['ngRoute', 'ngResource']);

    app.constant("URLS", {
        "api": {
            "ui_config": '/api/ui/config/:name',
            "users" : "/api/users/:id"
        }
    });

    app.config(['$routeProvider', "URLS", function ($routeProvider) {
        $routeProvider
            .when('/main', {
                controller: 'MainController',
                templateUrl: 'main/main.html',
                controllerAs: 'main'
            })
            .otherwise({redirectTo: '/main'});
    }]);

}());
