var express = require("express");
var app = express();

app.get("/", function(req, res){
        res.send("Hi there. Welcome to my assignment!");
});

app.get("/speak/:animal", function(req, res) {
        var sounds = {
            pig: "Oink",
            dog: "Woof",
            sheep: "Bahhh",
            cow: "Moo",
            cat: "Meow"
        }
        var animal = req.params.animal.toLowerCase();
        var sound = sounds[animal];
        res.send("The " + animal + " says " + sound);
});

app.get("/repeat/:message/:times", function(req, res) {
        var message= req.params.message;
        var times = Number(req.params.times);
        var result = "";
        for (var i = 0; i<times; i++){
            result += message  + " ";
        }
        res.send(result);
});



app.get("*", function(req, res){
        res.send("Sorry  page not found. What are you doing with your life");
        // Like a catchall when the other routes dont work
});


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started. Press CTRL-C to exit");
});


