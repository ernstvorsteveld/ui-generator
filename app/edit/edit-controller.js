(function () {

    'use strict';

    var injectParams = ['UiSpecificationService', '$scope', '$log', '$location', 'UserService'];

    var controller = function (UiSpecificationService, $scope, $log, $location, UserService) {

        var vm = {};
        vm.model = {};

        $log.debug("Location search: " + angular.toJson($location.search(), true));
        vm.specs = UiSpecificationService.load($location.search()['ui']);

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
    angular.module('app').controller('EditController', controller);

})();
