var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/demoapp");

var postSchema = new mongoose.Schema({
    title:String,
    content:String
});

//USER -- Name -- Email
var userSchema = new mongoose.Schema({
    name:String,
    email:String,
    post: [postSchema]
});
var User = mongoose.model("User", userSchema);

    //POST -- Title  -- Content

var Post = mongoose.model("Post", postSchema);

// var newUser = new User ({
//     name: "Cheryl Morris",
//     email: "cheryl@morrisje.com"
// })
// newUser.save(function(err, user){
//     if(err){
//         console.log(err);
//     } else {
//         console.log(user);
//     }
// })

var newPost = new Post({
    title: "Thinking about apples",
    content: "They are delicious"
});

newPost.save(function(err, post){
    if(err){
        console.log(err);
    } else {
        console.log(post);
    }
})