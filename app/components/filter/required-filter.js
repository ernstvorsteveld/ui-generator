(function () {

    'use strict';

    var app = angular.module('app');
    app.filter('requiredFilter', function () {
        return function (enabled) {
            return enabled;
        };
    });

})();
