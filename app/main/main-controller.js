(function () {

    'use strict';

    var injectParams = ['uiSpecificationService', '$scope'];

    var controller = function (uiSpecificationService, $scope) {

        var vm = {};
        vm.values = {
            "x" : 0
        };

        vm.specs = uiSpecificationService.load("name");
        vm.specs.$promise.then(function(data) {
            angular.forEach(data.templates, function(spec) {
                vm.values[spec.property] = spec.property;
            });
        });

        vm.model = {
            "property.name.1" : "1",
            "property.name.2" : "2",
            "property.name.3" : "3",
            "property.name.4" : "4"
        };

        vm.save = function() {
            console.log(vm.values);
        };

        vm.myValue = "_";

        vm.myValues = {
            "a" : "_",
            "b" : "_",
            "c" : "_",
            "d" : "_",
            "e" : "_"
        };

        return vm;
    };

    controller.$inject = injectParams;
    angular.module('app').controller('MainController', controller);

})();
