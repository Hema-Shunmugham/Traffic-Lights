/**
 * Created by Hema on 5/19/2016.
 */
/* globals angular, module, describe, beforeEach, inject, it, expect, spyOn, jasmine */
describe('Service: intersectionService  : ', function () {

    beforeEach(module('trafficLightApp'));

    var trafficLightService, intersectionService, intersection;
    var northTraffic, southTraffic, eastTraffic, westTraffic = {};

    beforeEach(inject(function (_intersectionService_,_trafficLightService_) {
        intersectionService = _intersectionService_;
        trafficLightService =_trafficLightService_;
        intersection = intersectionService.getInstance();

    }));

    describe('In the intersection service at the begining', function () {
        it('the north traffic should be green ', function () {
            trafficLightService.getInstance("green");
            northTraffic = intersection.northTraffic;
            expect(northTraffic.colour).toBe("green");

        });
        it('the south traffic should be green ', function () {
            trafficLightService.getInstance("green");
            southTraffic = intersection.southTraffic;
            expect(southTraffic.colour).toBe("green");

        });
        it('the east traffic should be red ', function () {
            trafficLightService.getInstance("red");
            eastTraffic = intersection.eastTraffic;
            expect(eastTraffic.colour).toBe("red");

        });
        it('the west traffic should be red ', function () {
            trafficLightService.getInstance("red");
            westTraffic = intersection.westTraffic;
            expect(westTraffic.colour).toBe("red");
        });
    });

    describe('Check if', function () {
        it('the north and south are red lights', function () {
            expect(intersection.northAndSouthAreRed()).toBeFalsy();
        });
        it('the east and west are red lights', function () {
            expect(intersection.eastAndWestAreRed()).toBeTruthy();
        });


    });

});