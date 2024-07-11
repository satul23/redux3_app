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

// console.log(newString)

const recursivefun = (n) => {
    if(n < 10){
        return n;
    }else{
        return n % 10 + recursivefun(Math.floor(n / 10))
    }
}

console.log(recursivefun(2345))

