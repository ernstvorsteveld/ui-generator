describe('Ui Specification service', function () {
    'use strict';

    var $httpBackend;
    var service;

    beforeEach(function () {
        module('app');
    });

    beforeEach(inject(function (_$httpBackend_, uiSpecificationService) {
        $httpBackend = _$httpBackend_;
        service = uiSpecificationService;
    }));

    afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it('should find ui specification.', function () {
        expectByName();
        var data = service.load('name');
        $httpBackend.flush();
        dump(data.toJSON());
        expect(data.toJSON().name).toBe("name.2");
    });

    function expectByName(){
        $httpBackend.whenGET('/api/ui/config/name').respond(function (method, url, data, headers) {
            var spec = {
                'id': 1,
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