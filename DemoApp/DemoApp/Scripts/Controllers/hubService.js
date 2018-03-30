var HubService = (function () {
    function HubService($scope) {
        this.hub = $.hubConnection('MyHub');
        this.hubProxy = this.hub.createHubProxy('MyHub');
        this.registerProxy();
        this.startHub();
    }
    HubService.prototype.registerProxy = function () {
        this.hubProxy.on('getData', function (data) {
            alert(data);
        });
    };
    HubService.prototype.startHub = function () {
        this.hub.start();
    };
    HubService.prototype.sendData = function () {
        this.hubProxy.invoke('sendData');
    };
    HubService.prototype.getData = function (data) {
        return data;
    };
    return HubService;
}());
app.service('HubService', ['$scope', function ($scope) {
        return new HubService($scope);
    }]);
