/**
 * Created by Hema on 5/15/2016.
 */

angular.module('trafficLightApp')
    .factory('intersectionService', ['data', 'trafficLightService',
        function(data, trafficLightService) {

                var intersectionService = function () {
                    this.northTraffic = trafficLightService.getInstance(data.colours.Green);
                    this.southTraffic = trafficLightService.getInstance(data.colours.Green);
                    this.eastTraffic = trafficLightService.getInstance(data.colours.Red);
                    this.westTraffic = trafficLightService.getInstance(data.colours.Red);
                    this.ChangeCounter = 0;

                };

                intersectionService.prototype.northAndSouthAreRed = function() {
                    return this.northTraffic.colour === data.colours.Red && this.southTraffic.colour === data.colours.Red;
                };

                intersectionService.prototype.eastAndWestAreRed = function(){
                    return this.eastTraffic.colour === data.colours.Red && this.westTraffic.colour === data.colours.Red;
                };

                function checkTrafficChanges(LightOne, LightTwo) {
                    if (LightOne !== LightOne) {
                        throw "TrafficLight pairs can not change independantly";
                    }
                };

                intersectionService.prototype.animate = function(timeInSeconds) {
                    var northChanged = this.northTraffic.animate(timeInSeconds);
                    var southChanged = this.southTraffic.animate(timeInSeconds);
                    var eastChanged = this.eastTraffic.animate(timeInSeconds);
                    var westChanged = this.westTraffic.animate(timeInSeconds);

                    if (this.ChangeCounter !== null) {
                        this.ChangeCounter += timeInSeconds;
                        if (this.ChangeCounter >= data.changeTime) {
                            if (this.northAndSouthAreRed()) {
                                this.eastTraffic.transitionToRed();
                                this.westTraffic.transitionToRed();
                                eastChanged = true;
                                westChanged = true;
                            } else if (this.eastAndWestAreRed()) {
                                this.northTraffic.transitionToRed();
                                this.southTraffic.transitionToRed();
                                northChanged = true;
                                southChanged = true;
                            } else {
                                throw "One pair of Traffic Lights must be Red";
                            }
                            this.ChangeCounter = null;
                        }
                    }

                    checkTrafficChanges(northChanged, southChanged);
                    checkTrafficChanges(eastChanged, westChanged);
                    if (northChanged && southChanged && this.northAndSouthAreRed()) {
                        this.ChangeCounter = 0;
                        this.eastTraffic.transitionToGreen();
                        this.westTraffic.transitionToGreen();
                    } else if (eastChanged && westChanged && this.eastAndWestAreRed()) {
                        this.ChangeCounter = 0;
                        this.northTraffic.transitionToGreen();
                        this.southTraffic.transitionToGreen();
                    }
                    return northChanged || southChanged || eastChanged || westChanged;
                };
            return {
                getInstance: function () {
                    return new intersectionService();
                }
            };
        }]);