var IndexController = (function () {
    function IndexController($scope) {
        this.$scope = $scope;
        this.$scope.name = "Asif Khan";
    }
    return IndexController;
}());
app.controller('IndexController', ['$scope', function ($scope) {
        return new IndexController($scope);
    }]);
