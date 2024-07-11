 let pattern1 = /hello world/i;
 console.log(pattern1)
 let result = pattern1.test('heLLo WorLd');
 console.log(result)
 if(result) {
  console.log("matched")
 }else{
    console.log("no match")
 }

let pattern2 =/[a-z]/g;
let text = "my no is 5645636345353542352";
// console.log(pattern.test(text))
let match = console.log(text.match(pattern2))
console.log(match)

let log = `Info: Process started
Error: Unable to connect to server
Info: Retrying connection
Error: Connection timed out`;

let pattern3 = /^Error:/gm;
let matches = log.match(pattern3);
console.log(matches);

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