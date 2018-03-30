var myApp = angular.module('MyApp', ['ngRoute']);
myApp.controller('IndexController',IndexController);


myApp.config(['$routeProvider', function ($routeProvider) {

    $routeProvider.
        when('/routeOne', {
            templateUrl: 'routesDemo/One'
            //controller: 'routeDemoFirstController'
        }).
        when('/routeTwo', {
            templateUrl: 'routesDemo/Two'
            //controller: 'routeDemoSecondController'
        });
}]);   