const reversestring = (str) => {
  return str.split('').reverse().join('')
}

// console.log(reversestring("hello"))

const isPalindrome = (str) => {
    const match = str.split('').reverse().join('');

    return str === match; 
};

// console.log(isPalindrome("nitin"))

const maxnumber = () => {
    const numbers = [3,4,2,6,6,9,4,2,6,4,5,10]
    const numbers1 = "23141414433431129";
    const numbers3 = numbers1.split('')
    const max = Math.max(...numbers3)
  
    console.log(max)
};
  
//  maxnumber();

 


