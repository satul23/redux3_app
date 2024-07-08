 let pattern1 = /hello world/i;
 console.log(pattern)
 let result = pattern.test('heLLo WorLd');
 console.log(result)
 if(result) {
  console.log("matched")
 }else{
    console.log("no match")
 }

let pattern2 =/[a-z]/g;
let text = "my no is 5645636345353542352";
// console.log(pattern.test(text))
let match = console.log(text.match(pattern))
console.log(match)

let log = `Info: Process started
Error: Unable to connect to server
Info: Retrying connection
Error: Connection timed out`;

let pattern = /^Error:/gm;
let matches = log.match(pattern);
console.log(matches);