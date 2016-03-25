(function () {

    'use strict';

    var injectParams = ['UiSpecificationService', '$scope', '$log', '$location', 'UserService'];

    var controller = function (UiSpecificationService, $scope, $log, $location, UserService) {

        var vm = {};
        vm.model = {};

        vm.specs = UiSpecificationService.load($location.search()['ui']);

        vm.model = UserService.getAll(); //getById("1");
        vm.selectedUser = {};

        vm.click = function () {
            console.log("selectedUSer");
            console.log(vm.selectedUser);
        };

        return vm;
    };

    controller.$inject = injectParams;
    angular.module('app').controller('ListController', controller);

})();
