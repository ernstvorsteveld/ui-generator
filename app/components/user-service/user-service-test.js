describe('User service tests.', function () {
    'use strict';

    var $httpBackend;
    var service;

    beforeEach(function () {
        module('app');
    });

    beforeEach(inject(function (_$httpBackend_, UserService) {
        $httpBackend = _$httpBackend_;
        service = UserService;
    }));

    afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it('should load a person by id.', function () {
        expectUserById();
        var user = service.getById('1');
        $httpBackend.flush();
        expect(user.id).toBe('1');
    });

    function expectUserById() {
        $httpBackend.whenGET('/api/users/1').respond(function (method, url, data, headers) {
            var user = {
                'id': "1",
                'name': 'FirstName1',
                'first_name': 'FirstName1',
                'middle_name': 'MiddleName1',
                'last_name': 'LastName1'
            };
            return [200, user];
        });
    }


});