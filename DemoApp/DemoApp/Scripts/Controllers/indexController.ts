/// <reference path="../app.ts"/>
/// <reference path="../Controllers/hubService.ts" />


interface IIndexControllerScope extends ng.IScope {
    name: string;
    getData: () => void;
}

interface IIndexController {
   
}

class IndexController implements IIndexController {

    constructor(private $scope: IIndexControllerScope) {
        this.$scope.name = "Asif Khan";
        //this.$scope.getData = () => this.getData();
    }

    //getData() {
    //    this.hubService.sendData();
    //}

}

app.controller('IndexController', ['$scope',($scope) => {
    return new IndexController($scope);
}]);

