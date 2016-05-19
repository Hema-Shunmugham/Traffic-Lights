/**
 * Created by Hema on 5/15/2016.
 */
angular.module('trafficLightApp')
    .factory('data', [
        function() {
            var colours = {
                Red: "red",
                Yellow: "yellow",
                Green: "green",
            };

            var yellowLightDuration = 30;
            var changeTime = (5 * 60) - yellowLightDuration;

            return {
                colours: colours,
                yellowLightDuration: yellowLightDuration,
                changeTime: changeTime
            };
        }]);