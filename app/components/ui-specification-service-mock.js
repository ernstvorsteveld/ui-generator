(function () {

    var vm = {};

    var data = {
        "templates": [
            {
                'id': 0,
                'name': 'profile',
                'subject': 'subject.1',
                'message': 'message.1',
                'html': 'html.1',
                'from': 'from.1'
            },
            {
                'id': 1,
                'name': 'name.2',
                'subject': 'subject.2',
                'message': 'message.2',
                'html': 'html.2',
                'from': 'from.2'
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

    angular.module('app').config(function ($provide) {
        $provide.decorator('$httpBackend', angular.mock.e2e.$httpBackendDecorator);
    });

}());