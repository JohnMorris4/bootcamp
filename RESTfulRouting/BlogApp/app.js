var express = require("express"),
methodOverride = require("method-override"),
app = express(),
bodyParser = require("body-parser"),
expressSanitizer = require("express-sanitizer"),
mongoose = require("mongoose");

//App Config
mongoose.connect("mongodb://localhost/restful_blog_app");
app.set("view engine", "ejs");
app.use(methodOverride("_method"));

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressSanitizer());

//Mongoose configuration information
var blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: {type: Date, default: Date.now}
});

var Blog = mongoose.model("Blog", blogSchema);

//test of the blog
// Blog.create({
//     title: "Test post",
//     image: "https://unsplash.com/photos/mk2USqDQE5E?height=200&width=500",
//     body: "Hello this is a bird"
//});
//Routes
//Index Route
app.get("/", function(req, res){
   res.redirect("/blogs"); 
});
app.get("/blogs", function(req, res){
    Blog.find({}, function(err, blogs){
       if(err){
           console.log("Error");
       } else {
           res.render("index", {blogs: blogs});
       }
    });
    
});
//New Route
app.get("/blogs/new", function(req, res) {
    res.render("new");
});
//Create Route
app.post("/blogs", function(req, res){
    //create blog entry
    req.body.blog.body= req.sanitize(req.body.blog.body)
    Blog.create(req.body.blog, function(err, newBlog){
        if(err){
            res.render("new");
        } else {
            res.redirect("/blogs");
        }
    });
    //redirect back after submitting
    
});
//show route
app.get("/blogs/:id", function(req, res) {
    Blog.findById(req.params.id, function(err, foundBlog){
        if(err){
            res.redirect("/blogs");
        } else {
            res.render("show", {blog: foundBlog});
        }
    })
})

//EDIT ROUTE
    app.get("/blogs/:id/edit", function(req, res) {
        Blog.findById(req.params.id, function(err, foundBlog){
            if(err){
               res.redirect("/blogs"); 
            } else {
                res.render("edit",{blog: foundBlog});
            }
        });       
        
    })
    
    //UPDATE Route
    
    app.put("/blogs/:id", function(req, res){
        req.body.blog.body= req.sanitize(req.body.blog.body)
       Blog.findByIdAndUpdate(req.params.id, req.body.blog, function(err, updatedBlog){
           if(err){
               res.redirect("/blogs");
           } else {
               res.redirect("/blogs/" + req.params.id );    
           }
       });
    });
    
    app.delete("/blogs/:id", function(req, res){
       Blog.findByIdAndRemove(req.params.id, function(err){
           if(err){
           res.redirect("/blogs");
            } else {
             res.redirect("/blogs");   
            }
        })
    });

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server is running");
})