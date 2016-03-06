(function () {

    var vm = {};

    var data = {
        "users": [
            {
                'id': 1,
                'name': 'FirstName1',
                'first_name': 'FirstName1',
                'middle_name': 'MiddleName1',
                'last_name': 'LastName1'
            },
            {
                'id': 2,
                'name': 'FirstName2',
                'first_name': 'FirstName2',
                'middle_name': 'MiddleName2',
                'last_name': 'LastName2'
            },
            {
                'id': 3,
                'name': 'FirstName3',
                'first_name': 'FirstName3',
                'middle_name': 'MiddleName3',
                'last_name': 'LastName3'
            },
            {
                'id': 4,
                'name': 'FirstName4',
                'first_name': 'FirstName4',
                'middle_name': 'MiddleName4',
                'last_name': 'LastName4'
            }]
    };

    vm.getData = function() {
        return vm.data.users;
    };

    vm.getById = function (id) {
        angular.forEach(vm.getData(), function (user) {
            if (user.id == id) {
                return user;
            }
        });
        return "";
    };

    angular.module('app').run(function ($httpBackend) {
        $httpBackend.whenGET(/^\/api\/users\/\w+$/).respond(function (method, url, data, headers) {
            var regex = /^\/api\/user\/(\w+)/g;
            var id = regex.exec(url)[1]; // First match on the second item.
            var user = vm.getData(id);
            return [200, user];
        });

        $httpBackend.whenPOST(/^\/api\/users\/\w+$/).respond(function (method, url, data, headers) {
            var regex = /^\/api\/users\/(\w+)/g;
            var name = regex.exec(url)[1]; // First match on the second item.
            var template = vm.getData()[parseInt(id, 10)];
            return [200, template];
        });

        $httpBackend.whenPOST('/api/users').respond(function (method, url, data, headers) {
            var user = JSON.parse(data);
            if (user.id) {
                user.id = vm.getData().length;
                vm.getData().push(user);
                return [201, user];
            } else {
                vm.getData()[user.id] = user;
                return [201, user];
            }
        });

        $httpBackend.whenGET(/\.html/).passThrough();
    });


}());