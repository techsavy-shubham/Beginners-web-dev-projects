var btc=document.getElementById("bitcoin");
var eth=document.getElementById("ethereum");
var doge=document.getElementById("dogecoin");

var settings={
    "async":true,
    "scrossDomain":true,
    "url":"https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,JPY,EUR",
    "method":"GET",
    "headers":{}
}
$.ajax(settings).done(function (response){
    btc.innerHTML=response.EUR;
    eth.innerHTML=response.JPY;
    doge.innerHTML=response.USD;
})