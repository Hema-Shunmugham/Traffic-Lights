angular.module('trafficLightApp.baseView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/baseView', {
    templateUrl: 'baseView/baseView.html',
    controller: 'baseViewCtrl'
  });
}]);

