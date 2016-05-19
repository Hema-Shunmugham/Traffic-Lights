/* globals angular, module, describe, beforeEach, inject, it, expect, spyOn, jasmine */
describe('baseViewCtrl', function() {
    beforeEach(module('trafficLightApp'));

    var $controller;

    beforeEach(inject(function(_$controller_){
        $controller = _$controller_;
    }));

    describe('SimulateTraffic traffic function', function() {
        it('should generate traffic light output for North, South, East and West traffic', function() {
            var $scope = {};
            var controller = $controller('baseViewCtrl', { $scope: $scope });
            $scope.simulateTraffic();
            expect(controller).toBeDefined();
            expect($scope.trafficDetails.length).toBe(13);
        });
    });
});