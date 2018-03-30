var HubService = (function () {
    function HubService() {
        this.hub = $.hubConnection('/myHub');
        this.hubProxy = this.hub.createHubProxy('myHub');
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
app.factory('HubService', function () {
    return new HubService();
});
