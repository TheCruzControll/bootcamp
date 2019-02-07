var colors = generateRandomColors(6)

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message")
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset")

colorDisplay.textContent = pickedColor;

resetButton.addEventListener("click", function(){
    //generate new color
    colors = generateRandomColors(6);
    //pick new random colors
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    //change colors
    for(var i=0;i<squares.length;i++){
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "#232323";
    resetButton.textContent = "New Color"
})

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
            h1.style.backgroundColor = pickedColor;
            resetButton.textContent = "Play Again?"
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
        randomColors.push(randomColor());
    }
    return randomColors
}

function randomColor(){
    var randomRed = Math.floor(Math.random() * 256);
    var randomBlue = Math.floor(Math.random() * 256);
    var randomGreen = Math.floor(Math.random() * 256);
    result = "rgb(" + randomRed+ ", "+randomBlue+", "+randomGreen+")"
    return result
}