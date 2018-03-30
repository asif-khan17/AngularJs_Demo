/// <reference path="../typings/signalr/signalr.d.ts" />
/// <reference path="../app.ts" />


class HubService {
    hubProxy: HubProxy;
    hub: HubConnection;
    constructor() {
         this.hub = $.hubConnection('/myHub');
        
         this.hubProxy = this.hub.createHubProxy('myHub');
         this.registerProxy();
         this.startHub();
    }

    registerProxy() {
        this.hubProxy.on('getData', (data) => {
            alert(data);
        });
    }

    startHub() {
        this.hub.start();
    }

    sendData() {
        this.hubProxy.invoke('sendData');
    }

    getData(data) {
        return data;
    }
}
app.factory('HubService', () => {
    return new HubService();
});