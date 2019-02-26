var express = require("express");
var app = express();

app.get("/", function(req,res){
    res.send("hi there")
});

app.get("/bye", function(req,res){
    res.send("goodbye")
});

app.get("/dog",function(req,res){
    res.send("MEWO")
});

app.get("/cat",function(req,res){
    res.send("woof")
});

app.get("/ziggy",function(req,res){
    res.send("fuk u ")
});

app.get("/r/:subredditName",function(req,res){
    var subreddit = req.params.subredditName;

    res.send("welcome to the " + subreddit.toUpperCase() + " subreddit")
});

app.get("*",function(req,res){
    res.send("you are a star")
});


//Tell express to listen for requests
app.listen(3000, process.env.IP, function(){
    console.log("Server has started");
});

