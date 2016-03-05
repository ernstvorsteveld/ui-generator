(function () {

    'use strict';

    var app = angular.module('app');

    var fieldDirective = function ($http, $compile) {

        var getTemplateUrl = function (field) {
            var type = field.type;
            switch (type) {
                case 'text':
                    return 'components/field-directive/text-field.html';
                default:
                    return 'components/field-directive/text-field.html';
            }
        };

        var linker = function (scope, element) {
            var templateUrl = getTemplateUrl(scope.field);
            if (templateUrl) {
                $http.get(templateUrl).success(function (data) {
                    element.html(data);
                    $compile(element.contents())(scope);
                });
            }
        };

        return {
            template: '',
            restrict: 'A',
            scope: {
                field: '=',
                formname: '='
            },
            link: linker
        };
    };

    app.directive('fieldDirective', fieldDirective);

}());