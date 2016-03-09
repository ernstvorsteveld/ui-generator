describe('User service tests.', function () {
    'use strict';

    var $httpBackend;
    var service;
    var testData = {
        "users": [
            {
                'id': "1",
                'name': 'FirstName1',
                'first_name': 'FirstName1',
                'middle_name': 'MiddleName1',
                'last_name': 'LastName1'
            },
            {
                'id': "2",
                'name': 'FirstName2',
                'first_name': 'FirstName2',
                'middle_name': 'MiddleName2',
                'last_name': 'LastName2'
            },
            {
                'id': "3",
                'name': 'FirstName3',
                'first_name': 'FirstName3',
                'middle_name': 'MiddleName3',
                'last_name': 'LastName3'
            },
            {
                'id': "4",
                'name': 'FirstName4',
                'first_name': 'FirstName4',
                'middle_name': 'MiddleName4',
                'last_name': 'LastName4'
            }]
    };


    beforeEach(function () {
        module('app');
    });

    beforeEach(inject(function (_$httpBackend_, UserService) {
        $httpBackend = _$httpBackend_;
        service = UserService;

        $httpBackend.whenGET('/api/users/1').respond(function (method, url, data, headers) {
            return [200, testData.users[0]];
        });
        $httpBackend.whenGET('/api/users').respond(function(method, url, data, headers) {
            return [200, testData.users];
        });
    }));

    afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it('Should load a person by id.', function () {
        var user = service.getById('1');
        $httpBackend.flush();
        expect(user.id).toBe('1');
    });

    it('Should load all users.', function () {
        var users = service.getAll();
        $httpBackend.flush();
        expect(users.length).toBe(4);
    });

});