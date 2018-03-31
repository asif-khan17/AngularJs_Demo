using Microsoft.AspNet.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace DemoApp.Hubs
{
    public class SelfHub : Hub
    {

        public void SendData()
        {
            Clients.All.getData("My name is khan and I am not a terrorist");
        }

    }
}