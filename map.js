let superstorestock = new Map();

superstorestock.set("toothpaste", 1000);
superstorestock.set("toothbrush", 2000);

// console.log(superstorestock.get("toothpaste"));
// console.log(superstorestock.has("toothpastew"));

// console.log(superstorestock.delete("toothpaste"));

const factorial = (n) => {

    if(n < 0){
        return undefined
    }

    let result = 1
    for(let i = 1; i<= n; i++){
        result *= i;
    }
    return result;
}

// console.log(factorial(5))

const factorailrecursion = (n) => {
    if( n === 0 || n === 1){
        return 1;
    }
}

const fibonacciseries = (n) => {
 if(n === 0){
    return 0
 }

 if(n === 1){
    return 1
 }

 let a = 0, b = 1, temp;
 for(let i = 2; i <= n; i++){
    temp = a + b;
    a = b;
    b = temp;
 }
  return b;

}

console.log(fibonacciseries(10))

