var express = require("express");
var app = express();
app.use(express.static("style"));
app.set("view engine", "ejs")

app.get("/", function(req, res){
        res.render("home");
});

app.get("/fallinlove/:animal", function(req, res){
    var animal = req.params.animal;
    res.render("love", {animalVar: animal});
})

app.get("/post", function(req, res){
    var post = [
                {title: "Post about computers", author: "John" },
                {title: "Post about dogs", author: "John" },
                {title: "Post about cats", author: "John" }
        ];
    res.render ("post", {post: post});
})






app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started. Press CTRL-C to exit");
});
