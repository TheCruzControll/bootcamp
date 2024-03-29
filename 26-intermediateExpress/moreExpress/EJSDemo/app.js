var express = require("express");
var app = express();

app.set("view engine","ejs");
app.use(express.static("public"));

// Root Route
app.get("/", function(req,res){
    res.render("index");
});

app.get("/fallinlovewith/:thing",function(req,res){
    var thing = req.params.thing;

    res.render("love",{thingVar: thing});
});

app.get("/posts",function(req, res){
    var posts = [
        {title:"Post1",author:"Niko"},
        {title:"Pasd",author:"Malia"},
        {title:"Post 3",author:"Christian"},
    ];
    res.render("posts",{posts:posts});
});

app.listen(3000, process.env.IP, function(){
    console.log("Server has started");
});