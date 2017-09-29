var Campground = require("../models/campground");
var Comment = require("../models/comment");

//include all middleware
var middlewareObj = {};
middlewareObj.checkUser = function(req, res, next){
    if(req.isAuthenticated()){
        
        Campground.findById(req.params.id, function(err, foundCampground){
        if(err){
            next();
        } else {
            //Does the user own the campground
            if(foundCampground.author.id.equals(req.user._id)){
               res.render("campgrounds/edit", {campground: foundCampground}); 
            } else {
              res.redirect("back"); 
            }
        }
    });
    } else {
        res.redirect("back");
    }
    
};

middlewareObj.isLoggedIn = function (req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
};

middlewareObj.checkCommentOwner = function(req, res, next){
  if(req.isAuthenticated()){
            
        Comment.findById(req.params.comment_id, function(err, foundComment){
        if(err){
            next();
        } else {
            //Does the user own the comment
            if(foundComment.author.id.equals(req.user._id)){
               res.render("campgrounds/edit", {campground: foundComment}); 
            } else {
              res.redirect("back"); 
            }
        }
    });
    } else {
        res.redirect("back");
    }  
};





module.exports = middlewareObj