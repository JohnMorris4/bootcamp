var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment   = require("./models/comment");

var data = [
    {
        name: "Cloud's Rest", 
        image: "https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg",
        description: "Lorem ipsum dolor sit amet, quas volumus placerat vim an. Minim voluptaria duo ut. Qui lorem tantas ad, ferri simul eam no. Has et elit malis fuisset, denique interpretaris pro ei. Quo munere latine ei. Ad doming deseruisse vituperatoribus sea. Sea sale aliquid ocurreret at, no elitr utroque temporibus duo. Ei nonumy neglegentur vituperatoribus qui, ne qui veniam everti interpretaris, possit ponderum facilisis per in."
    },
    {
        name: "Desert Mesa", 
        image: "https://farm3.staticflickr.com/2801/4504029335_e875b05082.jpg",
        description: "Quo munere latine ei. Ad doming deseruisse vituperatoribus sea. Sea sale aliquid ocurreret at, no elitr utroque temporibus duo. Ei nonumy neglegentur vituperatoribus qui, ne qui veniam everti interpretaris, possit ponderum facilisis per in."
    },
    {
        name: "Canyon Floor", 
        image: "https://farm1.staticflickr.com/189/493046463_841a18169e.jpg",
        description: "Quo munere latine ei. Ad doming deseruisse vituperatoribus sea. Sea sale aliquid ocurreret at, no elitr utroque temporibus duo. Ei nonumy neglegentur vituperatoribus qui, ne qui veniam everti interpretaris, possit ponderum facilisis per in."
    }
]

function seedDB(){
   //Remove all campgrounds
   Campground.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed campgrounds!");
         //add a few campgrounds
        data.forEach(function(seed){
            Campground.create(seed, function(err, campground){
                if(err){
                    console.log(err)
                } else {
                    console.log("added a campground");
                    //create a comment
                    Comment.create(
                        {
                            text: "This place is great, but I wish there was internet",
                            author: "Homer"
                        }, function(err, comment){
                            if(err){
                                console.log(err);
                            } else {
                                campground.comments.push(comment);
                                campground.save();
                                console.log("Created new comment");
                            }
                        });
                }
            });
        });
    }); 
    //add a few comments
}

module.exports = seedDB;
