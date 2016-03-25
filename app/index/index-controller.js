(function () {

    'use strict';

    var injectParams = ['UiSpecificationService', '$scope', '$log', '$location', 'UserService'];

    var controller = function (UiSpecificationService, $scope, $log, $location, UserService) {

        var vm = {};
        vm.model = {};

        vm.go = function(view, spec) {
            $location.path(view).search('ui', spec);
        };

        return vm;
    };

    controller.$inject = injectParams;
    angular.module('app').controller('IndexController', controller);

})();
