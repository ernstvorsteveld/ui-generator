(function () {

    'use strict';

    var injectParams = ['$resource', 'UserFactory'];

    var service = function ($resource, UserFactory) {

        var vm = {};

        vm.getById = function (id) {
            return UserFactory.getById(id);
        };

        vm.getAll = function() {
            return UserFactory.loadAll();
        };

        vm.save = function (user) {
            return UserFactory.save();
        };

        return vm;
    };

    service.$inject = injectParams;
    angular.module('app').service('UserService', service);

})();
