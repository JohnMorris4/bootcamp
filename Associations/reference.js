var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/reference");

var postSchema = new mongoose.Schema({
    title:String,
    content:String
});
  //POST -- Title  -- Content

var Post = mongoose.model("Post", postSchema);



//USER -- Name -- Email
var userSchema = new mongoose.Schema({
    name: String,
    email: String,
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post"
        }
        ]
});
var User = mongoose.model("User", userSchema);

// User.create({
//     email: "buffy@gmail.com",
//     name: "Buffy the Vampire Slayer"
// })
// Post.create({
//     title: "How to cut your stakes part 4",
//     content: "this is just a bunch of jibberish 3"
// }, function (err, post){
//     User.findOne({name: "Buffy the Vampire Slayer"}, function(err, foundUser){
//         if(err){
//             console.log(err);
//         } else {
//             foundUser.posts.push(post);
//             foundUser.save(function(err, data){
//                 if(err){
//                     console.log(err);
//                 } else {
//                     console.log(data);
//                 }
                
//             });
//         }
//     });
    
// });
  