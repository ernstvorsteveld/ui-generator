(function () {

    'use strict';

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
                form: '=',
                valueField: '=',
                model: '='
            },
            link: linker
        };
    };

    var app = angular.module('app');
    app.directive('fieldDirective', fieldDirective);

}());