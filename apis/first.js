// var request = require('request');
// request('http://www.google.com', function (error, response, body) {
//   if (!error && response.statusCode == 200) {
//     console.log(body) // Show the HTML for the Google homepage.
//   }
// })

var request = require('request');
request('https://query.yahooapis.com/v1/public/yql?q=select%20item.condition%20from%20weather.forecast%20where%20woeid%20%3D%202487889&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys', function(error, response, body) {
    if (!error && response.statusCode == 200){
        var parsedData = JSON.parse(body);
        console.log("Current conditions in San Diego CA is ...");
        console.log(parsedData ["query"]["results"]["channel"]["item"]["condition"]["date", "temp", "text"]);
    
        
    }
});