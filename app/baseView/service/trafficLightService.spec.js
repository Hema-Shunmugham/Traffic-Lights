/**
 * Created by Hema on 4/19/2016.
 */
/* globals angular, module, describe, beforeEach, inject, it, expect, spyOn, jasmine */
describe('Service: trafficLightService  : ', function () {

    beforeEach(module('trafficLightApp'));

    var trafficLightService,currentTraffic;

    beforeEach(inject(function (_trafficLightService_) {
        trafficLightService = _trafficLightService_;
    }));

    describe('The traffic light', function () {
        it('should be a valid colour', function () {
            expect(trafficLightService.getInstance("red")).toBeTruthy();
            expect(trafficLightService.getInstance("green")).toBeTruthy();
            expect(trafficLightService.getInstance("yellow")).toBeTruthy();
        });
        it('should should transition from red to green', function () {
            currentTraffic = trafficLightService.getInstance("red");
            currentTraffic.transitionToGreen();
            expect(currentTraffic.colour).toBe("green")
        });
        it('should should transition from green to yellow and then red', function () {
            currentTraffic = trafficLightService.getInstance("green");
            currentTraffic.transitionToRed();
            expect(currentTraffic.colour).toBe("yellow");
            var second = 5;
            var yellowToRedTime = 32;
            currentTraffic.animate(second);
            expect(currentTraffic.colour).toBe("yellow");
            currentTraffic.animate(yellowToRedTime);
            expect(currentTraffic.colour).toBe("red");
        });
    });


});