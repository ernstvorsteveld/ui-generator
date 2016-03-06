(function () {

    'use strict';

    var injectParams = ['$resource', 'URLS'];

    var factory = function ($resource, URLS) {

        var Users = $resource(URLS.api.users, {}, {
            get: {method: 'GET', params: {id: '@id'}},
            create: {method: 'POST', params: {}}
        });

        var vm = {};

        vm.loadAll = function () {
            return Users.query();
        };

        vm.getById = function (id) {
            return Users.get({id: id});
        };

        vm.save = function (user) {
            return Users.create(user);
        };

        return vm;
    };

    factory.$inject = injectParams;
    angular.module('app').factory('UserFactory', factory);

})();
