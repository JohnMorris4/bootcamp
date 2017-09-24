var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

var campgrounds = [
        {name:"Charleston KOA", image:"https://farm9.staticflickr.com/8122/29544840460_e6284f9dc3_c.jpg" },
        {name:"Manchester KOA", image:"http://www.yellowstonenationalparklodges.com/wp-content/gallery/madison-campground/madison-campground-11.jpg"},
        {name:"Charlotte KOA", image:"http://dougleen.com/ontheroad/wp-content/uploads/2011/03/Everglades-Campsite.jpg"},
        {name:"Another Charleston KOA", image:"https://farm9.staticflickr.com/8122/29544840460_e6284f9dc3_c.jpg" },
        {name:"Charleston KOA", image:"https://farm9.staticflickr.com/8122/29544840460_e6284f9dc3_c.jpg" },
        {name:"Manchester KOA", image:"http://www.yellowstonenationalparklodges.com/wp-content/gallery/madison-campground/madison-campground-11.jpg"},
        {name:"Charlotte KOA", image:"http://dougleen.com/ontheroad/wp-content/uploads/2011/03/Everglades-Campsite.jpg"},
        {name:"Another Manchester KOA", image:"http://www.yellowstonenationalparklodges.com/wp-content/gallery/madison-campground/madison-campground-11.jpg"},
        {name:"Another Charlotte KOA", image:"http://dougleen.com/ontheroad/wp-content/uploads/2011/03/Everglades-Campsite.jpg"}
        ];
        
app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){
     res.render("campgrounds", {campgrounds:campgrounds});
});



app.post("/campgrounds", function(req, res){
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image}
    campgrounds.push(newCampground);
    res.redirect("/campgrounds");
    
});

app.get("/campgrounds/new", function(req, res){
    res.render ("new.ejs");
});



app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Yelp Camp -- Press CTRL-C to exit");
});