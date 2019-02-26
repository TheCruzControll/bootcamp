var express = require("express");
var app = express();

app.get("/", function(req,res){
    res.send("Hi there, welcome to my assignment")
});

app.get("/speak/:animalName",function(req,res){
    var sounds = {
        pig:"Oink",
        cow:"moo",
        dog:"woof woof",
    }
    var animal = req.params.animalName.toLowerCase();
    var sound = sounds[animal];
    res.send("The " + animal + " says " + sound);
    
});

app.get("/repeat/:word/:repeatNum", function(req,res){
    var word = req.params.word;
    var num = parseInt(req.params.repeatNum,10);
    var i =0;
    var text = "";

    for(var i =0;i<num;i++){
        text += word+" "
    }
    
    res.send(text);
});

app.get("*",function(req,res){
    res.send("Sorry, page not found...What are you doing with your life?")
});

app.listen(3000, process.env.IP, function(){
    console.log("Server has started");
});