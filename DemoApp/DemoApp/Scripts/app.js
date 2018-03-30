var app = angular.module('app', ['ngRoute']);
app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.
            when('/routeOne', {
            templateUrl: 'routesDemo/One'
        }).
            when('/routeTwo', {
            templateUrl: 'routesDemo/Two'
        });
    }]);
