var express = require('express');
var app = express();

app.get("/", function(req, res){
        res.send("Hello there!!!!");
});

app.get("/bye", function(req, res){
        res.send("Goodbye!!!!!");
});

app.get("/dog", function(req, res){
        res.send("Woof!!!!!");
});

app.get("*", function(req, res){
        res.send("This is the use of the * route master");
        // Like a catchall when the other routes dont work
});


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started");
});