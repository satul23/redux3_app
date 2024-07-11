const recursive = (x) =>{
    if(x <= 0){
        console.log("base case")
    }else{
        console.log(x)
        recursive(x - 1)
    }
}

//  recursive(9)

const factorial = (n) => {
    if(n === 1){
        return 1;
    }else{
        console.log(n)
        return n * factorial(n - 1);
    };

}

//    console.log(factorial(4))

let string = "Hello,world!";
let newString = string.slice(7, 12);

console.log(newString)