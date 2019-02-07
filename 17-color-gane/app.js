var colors = generateRandomColors(6)

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message")
colorDisplay.textContent = pickedColor;

for(var i = 0; i <squares.length; i++){
    //add initial colors to squares
    squares[i].style.backgroundColor = colors[i];

    // click listeners to squares
    squares[i].addEventListener("click",function(){
        //grab color of clicked square
        var clickedColor = this.style.backgroundColor;
        //compare color to picked color
        if(clickedColor === pickedColor){
            messageDisplay.textContent = "Correct"
            changeColors(clickedColor);
        }else{
            this.style.backgroundColor = "#232323"
            messageDisplay.textContent = "try again"
        }
    })
}

function changeColors(color){
    //loop through all squares
    for(var i = 0; i <squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
    //change each color to match given color
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    randomColors = []
    
    for(var i = 0 ; i<num ; i++){
        var randomRed = Math.floor(Math.random() * 255);
        var randomBlue = Math.floor(Math.random() * 255);
        var randomGreen = Math.floor(Math.random() * 255);
        result = "rgb(" + randomRed+ ", "+randomBlue+", "+randomGreen+")"
        randomColors.push(result)
    }
    return randomColors
}