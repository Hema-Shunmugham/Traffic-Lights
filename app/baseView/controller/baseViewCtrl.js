/**
 * Created by Hema on 4/17/2016.
 */

angular.module('trafficLightApp')
    .controller('baseViewCtrl',
        ['$scope','$interval','intersectionService',

            function ($scope, $interval, intersectionService) {

                $scope.trafficDetails = [];
                var trafficOutput = [];
                function outputTrafficStatus(currentTimeInSeconds, intersectionService){
                    trafficOutput = [
                        {text: 'Time in minutes:' + currentTimeInSeconds/60},
                        {text: 'Traffic Lights for North, South, East and West'},
                        {text: 'North:' + intersectionService.northTraffic.colour},
                        {text: 'South:' + intersectionService.southTraffic.colour},
                        {text: 'East:' + intersectionService.eastTraffic.colour},
                        {text: 'West:' + intersectionService.westTraffic.colour}, ];
                    return trafficOutput;
                };

                $scope.simulateTraffic = function() {
                    var startTimeInSeconds = 0;
                    var endTimeInSeconds = 30 * 60;
                    var timeIncrementInSeconds = 1;
                    var currentTimeInSeconds = startTimeInSeconds;
                    var intersection = intersectionService.getInstance();
                    $scope.trafficDetails.push(outputTrafficStatus(currentTimeInSeconds, intersection));
                    while (currentTimeInSeconds < endTimeInSeconds)
                    {
                        var lightChanges = intersection.animate(timeIncrementInSeconds);
                        currentTimeInSeconds += timeIncrementInSeconds;
                        if (lightChanges) {
                            $scope.trafficDetails.push(outputTrafficStatus(currentTimeInSeconds, intersection));
                        }
                    }
                };



            }
        ]
    );