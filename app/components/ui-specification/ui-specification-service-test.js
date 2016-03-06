describe('Ui Specification service', function () {
    'use strict';

    var $httpBackend;
    var service;

    beforeEach(function () {
        module('app');
    });

    beforeEach(inject(function (_$httpBackend_, UiSpecificationService) {
        $httpBackend = _$httpBackend_;
        service = UiSpecificationService;
    }));

    afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it('should find ui specification.', function () {
        expectByName();
        var data = service.load('name');
        $httpBackend.flush();
        expect(data.toJSON().name).toBe("name.2");
    });

    function expectByName(){
        $httpBackend.whenGET('/api/ui/config/name').respond(function (method, url, data, headers) {
            var spec = {
                'id': 1,
                'type' : 'text',
                'name': 'name.2',
                'subject': 'subject.2',
                'message': 'message.2',
                'html': 'html.2',
                'from': 'from.2'
            };
            return [200, spec];
        });
    }

});