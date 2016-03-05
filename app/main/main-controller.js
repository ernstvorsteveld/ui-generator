(function () {

    'use strict';

    var injectParams = ['uiSpecificationService'];

    var controller = function (uiSpecificationService) {
        var vm = {};

        vm.specs = uiSpecificationService.load("name");

        return vm;
    };

    controller.$inject = injectParams;
    angular.module('app').controller('mainController', controller);

})();
