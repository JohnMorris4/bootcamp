var express = require("express");
var app = express();
var request = require("request");
app.set("view engine", "ejs");

app.get("/", function(req, res) {
    
    res.render("search");
})


app.get ("/results", function(req, res){
    var movie=req.query.movieName;
    var url="http://www.omdbapi.com/?s=" + movie;
    request( url, function(error, response, body){
        if (!error && response.statusCode == 200) {
            var movieResult = JSON.parse(body);
            res.render("results", {movieResult: movieResult});
        }
    });
    
});






app.listen(process.env.PORT, process.env.ID, function(){
    console.log("Movie App has started. Press CTRL-C to exit");
    
});