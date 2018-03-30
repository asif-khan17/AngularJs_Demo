/// <reference path="../app.ts"/>
/// <reference path="../Controllers/hubService.ts" />


interface IIndexControllerScope extends ng.IScope {
    name: string;
    getData: () => void;
}

interface IIndexController {
   
}

class IndexController implements IIndexController {

    constructor(private $scope: IIndexControllerScope, private HubService) {
        this.$scope.name = "Asif Khan";
        this.$scope.getData = () => this.getData();
    }

    getData() {
        this.HubService.sendData();
    }

}

app.controller('IndexController', ['$scope', 'HubService', ($scope, HubService) => {
    return new IndexController($scope, HubService);
}]);

