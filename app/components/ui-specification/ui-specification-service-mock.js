(function () {

    var vm = {};

    var data = {
        "templates": [
            {
                'id': 0,
                'name': 'firstname',
                'prompt' : 'Firstname',
                'required': true,
                'errors': {
                    'empty' : 'Firstname must have a value'
                },
                'property' : 'first_name',
                'placeHolder' : 'the placeholder text 1',
                'disable' : 'disabled',
                'tooltip' : 'tooltip text 1'
            },
            {
                'id': 10,
                'name': 'name',
                'prompt' : 'Name',
                'required': true,
                'errors': {
                    'empty' : 'Firstname must have a value'
                },
                'property' : 'name',
                'placeHolder' : 'the placeholder text name',
                'disable' : 'enabled',
                'tooltip' : 'tooltip text 1'
            },
            {
                'id': 1,
                'name': 'middlename',
                'prompt' : 'Middlename',
                'required': true,
                'errors': {
                    'empty' : 'Middlename must have a value'
                },
                'property' : 'middle_name',
                'placeHolder' : 'the placeholder text 2',
                'disable' : false,
                'tooltip' : 'tooltip text 2'
            },
            {
                'id': 2,
                'name': 'lastname',
                'prompt' : 'Lastname',
                'required': true,
                'errors': {
                    'empty' : 'Lastname must have a value'
                },
                'property' : 'last_name',
                'placeHolder' : 'the placeholder text 4',
                'disable' : false,
                'tooltip' : 'tooltip text 4'
            }]
    };

    vm.getData1 = function (name) {
        for (var i = 0; i < data.length; i++) {
            if (data[i].name === name) {
                return data[i];
            }
        }
        return {};
    };

    vm.getData = function (name) {
        return data;
    };

    angular.module('app').run(function ($httpBackend) {
        $httpBackend.whenGET(/^\/api\/ui\/config\/\w+$/).respond(function (method, url, data, headers) {
            var regex = /^\/api\/ui\/config\/(\w+)/g;
            var name = regex.exec(url)[1]; // First match on the second item.
            var spec = vm.getData(name);
            return [200, spec];
        });

        $httpBackend.whenPOST(/^\/api\/templates\/\w+$/).respond(function (method, url, data, headers) {
            var regex = /^\/api\/templates\/(\w+)/g;
            var name = regex.exec(url)[1]; // First match on the second item.
            var template = vm.getData()[parseInt(id, 10)];
            return [200, template];
        });

        $httpBackend.whenPOST('/api/templates').respond(function (method, url, data, headers) {
            var template = JSON.parse(data);
            if (template.id) {
                template.id = vm.getData().length;
                vm.getData().push(template);
                return [201, template];
            } else {
                vm.getData()[template.id] = template;
                return [201, template];
            }
        });

        $httpBackend.whenGET(/\.html/).passThrough();
    });

}());