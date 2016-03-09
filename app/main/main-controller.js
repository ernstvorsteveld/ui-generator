(function () {

    'use strict';

    var injectParams = ['UiSpecificationService', '$scope', 'UserService'];

    var controller = function (UiSpecificationService, $scope, UserService) {

        var vm = {};
        vm.model = {};

        vm.specs = UiSpecificationService.load("name");

        vm.model = UserService.getById("1");

        vm.save = function () {
            console.log("specs");
            console.log(vm.specs);
            console.log("model");
            console.log(vm.model);
        };

        return vm;
    };

    controller.$inject = injectParams;
    angular.module('app').controller('MainController', controller);

})();
