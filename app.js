function getPriceData(){
  const pricesWs = new WebSocket('wss://ws.coincap.io/prices?assets=bitcoin,ethereum')

  pricesWs.onmessage = function (msg) {
    let data = JSON.parse(msg.data);
    
    if(data.bitcoin!=undefined)
      document.getElementById("btc").innerHTML = "  $"+data.bitcoin;
    if(data.ethereum!=undefined)
      document.getElementById("eth").innerHTML = "  $"+data.ethereum;
  }

}

getPriceData();