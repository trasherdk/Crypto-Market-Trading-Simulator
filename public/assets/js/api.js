//User profile
//TODO: figure out how to pull specific user data

//Pulls from API and saves prices. Calls reAvaluate function to start off
function apiCallToCrypto() {
  jQuery.getJSON(
    "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,XRP,LTC&tsyms=USD",
    function(data) {
      bitcoinPrice = data.RAW.BTC.USD.PRICE;
      ethereumPrice = data.RAW.ETH.USD.PRICE;
      ripplePrice = data.RAW.XRP.USD.PRICE;
      litecoinPrice = data.RAW.LTC.USD.PRICE;
      reAvaluate();
    }
  );
}

$.get("api/user", function(data) {
  console.log(data);
  console.log(data.id);
  var userId = data.id;
  return userId;
});

$.get("api/user/userId", function(data) {
  var userPort = data.Porfolio;
  return userPort;
});

function updateDatabase(userPort) {
  $.ajax({
    method: "PUT",
    url: "/api/user/portfolio",
    data: userPort
  });
}
