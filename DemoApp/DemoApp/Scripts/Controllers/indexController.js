var IndexController = (function () {
    function IndexController($scope, HubService) {
        var _this = this;
        this.$scope = $scope;
        this.HubService = HubService;
        this.$scope.name = "Asif Khan";
        this.$scope.getData = function () { return _this.getData(); };
    }
    IndexController.prototype.getData = function () {
        this.HubService.sendData();
    };
    return IndexController;
}());
app.controller('IndexController', ['$scope', 'HubService', function ($scope, HubService) {
        return new IndexController($scope, HubService);
    }]);
