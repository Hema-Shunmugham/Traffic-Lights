/**
 * Created by Hema on 4/18/2016.
 */

angular.module('trafficLightApp')
    .factory('trafficLightService', ['data',
        function(data) {
                    var trafficLightService = function(colour) {
                            if (colour !== data.colours.Red && colour !== data.colours.Yellow && colour !== data.colours.Green) {
                            throw "Invalid colour";
                        }
                        this.colour = colour;
                        this.yellowToRedTimeCounter = null;

                    }
                    /**
                     * Transitions to Green Colour
                     */
                    trafficLightService.prototype.transitionToGreen = function() {
                        if (this.colour !== data.colours.Red) {
                            throw "TrafficLight colour is not Red";
                        }
                        this.colour = data.colours.Green;
                    };

                    /**
                     * Transitions to Red Colour
                     */
                    trafficLightService.prototype.transitionToRed = function() {
                        if (this.colour !== data.colours.Green) {
                            throw "TrafficLight colour is not Green";
                        }
                        this.colour = data.colours.Yellow;
                        if (this.yellowToRedTimeCounter !== null) {
                            throw "TrafficLight is already transitioning to Red";
                        }
                        this.yellowToRedTimeCounter = 0;
                    };

                    /**
                     * Animates the TrafficLight              *
                     * @returns true if the TrafficLight colour has changed, false otherwise.
                     */
                    trafficLightService.prototype.animate = function(timeInSeconds) {
                        if (timeInSeconds <= 0) {
                            throw "timeInSeconds must be positive";
                        }
                        if (this.yellowToRedTimeCounter !== null) {
                            this.yellowToRedTimeCounter += timeInSeconds;
                            if (this.yellowToRedTimeCounter >= data.yellowLightDuration) {
                                this.yellowToRedTimeCounter = null;
                                this.colour = data.colours.Red;
                                return true;
                            }
                        }
                        return false;
                    };
            return {
                getInstance: function (colour) {
                    return new trafficLightService(colour);
                }
            };

}]);