(function () {

    'use strict';

    var injectParams = ['$resource', "URLS"];

    var factory = function ($resource, URLS) {

        var UiConfig = $resource(URLS.api.ui_config, {}, {
            get: {method: 'GET', params: {name: '@name'}},
            create: {method: 'POST', params: {}}
        });

        var vm = {};

        vm.loadAll = function () {
            return UiConfig.query();
        };

        vm.load = function (name) {
            return UiConfig.get({name: name});
        };

        return vm;
    };

    factory.$inject = injectParams;
    angular.module('app').factory('uiSpecificationService', factory);

})();
