var ans = prompt("Are we there yet?");
while(ans!=="yes" && ans!=="yeah"){
    var ans = prompt("Are we there yet?");
}
if(ans === "yes" || ans ==="yeah"){
    alert("Yay we made it");
}