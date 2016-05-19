angular.module('trafficLightApp', [
  'ngRoute',
  'ngLodash',
  'trafficLightApp.baseView',

]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/baseView'});
}]);
