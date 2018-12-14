var age = prompt("What if your age?")

if(age<0){
    console.log("Error, pick a correct age");
}
else if(age<18){
    console.log("Sorry you are not old enough to enter")
}
else if(age<21){
    console.log("You can enter but you cant drink")
}
else{
    console.log("come on in. you can drink")
}

if(age%2!=0){
    console.log("your age is odd")
}
if(age === 21){
    console.log("Happy 211st bday")
}
if(Number.isInteger(Math.sqrt(age))){
    console.log("perfect square!")
}

console.log("hi")