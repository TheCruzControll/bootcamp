function isEven(num){
    return num%2===0
}

function factorialOf(num){
    if(num === 0){
        return 1
    }
    else{
        var ans = num;
        while(num>2){
            ans*=num-1
            num--
        }
        return ans
    }
}

function kebabToSnake(word){
    var temp = word.replace("-","_")
    return temp
}
console.log(kebabToSnake("hello-there"))