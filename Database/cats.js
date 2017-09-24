var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app");

var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    breed: String
    
});
 var Cat = mongoose.model("Cat", catSchema);
// var angel = new Cat({
//     name:"Harley",
//     age: 3,
//     breed: "North Woods"
// });

// angel.save(function(err, cat){
//     if(err){
//         console.log("Something Broke")
//     } else {
//         console.log("The Cat was saved")
//         console.log(cat);
//     }
// });
Cat.find({}, function(err, cats){
    if(err){
        console.log("Something Went Worng");
        console.log(err);
    } else {
        console.log("These are the cats from the Database");
        console.log(cats);
    }
})
