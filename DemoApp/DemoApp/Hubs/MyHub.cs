﻿using Microsoft.AspNet.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace DemoApp.Hubs
{
    public class MyHub : Hub
    {

        public void SendData()
        {
            Clients.All.getNewData("My name is khan and I am not a terrorist");
        }

    }
}