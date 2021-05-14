function getPriceData(){
  const pricesWs = new WebSocket('wss://ws.coincap.io/prices?assets=bitcoin,ethereum,cardano,dogecoin')

  pricesWs.onmessage = function (msg) {
    let data = JSON.parse(msg.data);
    //console.log(data);
    if(data.bitcoin!=undefined)
      document.getElementById("btc").innerHTML = "  $"+data.bitcoin;
    if(data.ethereum!=undefined)
      document.getElementById("eth").innerHTML = "  $"+data.ethereum;
    if(data.cardano!=undefined)
      document.getElementById("ada").innerHTML = "  $"+data.cardano;
    if(data.dogecoin!=undefined)
      document.getElementById("doge").innerHTML = "  $"+data.dogecoin;
  }

}

getPriceData();