(function () {

    'use strict';

    var injectParams = ['uiSpecificationService', '$scope'];

    var controller = function (uiSpecificationService, $scope) {

        var vm = {};
        vm.model = {
        };

        vm.specs = uiSpecificationService.load("name");
        vm.specs.$promise.then(function(data) {
            angular.forEach(data.templates, function(spec) {
                vm.model[spec.property] = spec.property;
            });
        });

        vm.save = function() {
            console.log(vm.model);
        };

        return vm;
    };

    controller.$inject = injectParams;
    angular.module('app').controller('MainController', controller);

})();
