var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message")
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset")
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
    setModeButtons();
    setSquares();
    reset();
}

colorDisplay.textContent = pickedColor;

function setModeButtons(){
    for(var i = 0; i<modeButtons.length; i++){
        modeButtons[i].addEventListener("click",function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            if(this.textContent ==="Easy"){
                numSquares = 3;
            }else{
                numSquares = 6;
            }
            reset();
        })
    }
}

function setSquares(){
    for(var i = 0; i <squares.length; i++){
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
}

function reset(){
    colors = generateRandomColors(numSquares);
    //pick new random colors
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors"
    messageDisplay.textContent = ""
    //change colors
    for(var i=0;i<squares.length;i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
        }else{
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click", function(){
    reset();
})

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