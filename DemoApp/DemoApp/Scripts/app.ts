/// <reference path="../Scripts/typings/angularjs/angular.d.ts" />


interface Iapp extends ng.IModule {

}

var app: Iapp = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', ($routeProvider) => {

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