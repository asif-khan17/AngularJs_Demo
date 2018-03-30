﻿/// <reference path="../typings/signalr/signalr.d.ts" />
/// <reference path="../app.ts" />


class HubService {
    hubProxy: HubProxy;
    hub: HubConnection;
    constructor($scope) {
         this.hub = $.hubConnection('MyHub');
        
         this.hubProxy = this.hub.createHubProxy('MyHub');
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
app.service('HubService', ['$scope', ($scope) => {
    return new HubService($scope);
}]);