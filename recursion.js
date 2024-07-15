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

// console.log(recursivefun(2345));

  //factorial
  //anagram
  //palindrome

 let arr = [11,22,33,44,55,66,77,88]

  const recursivebinary = (arr, start, end, target) => {

    if(start > end){
        return -1;
    }else if(start[arr] === target){
        return start[arr];
    }else if(end[arr] === target){
        return end[arr];
    }

    let mid = Math.floor((start + end) / 2)

    if(arr[mid] === target){
        return mid;
    }

    if(arr[mid] > target){
      return recursivebinary( arr, start, mid - 1, target)   
    }
    return recursivebinary(arr, mid + 1, end, target)
  }

  console.log(recursivebinary(arr, 0, arr.length - 1, 88))

  const binarybyloop = (arr, target) => {
    
    let start = 0;
    let end = arr.length - 1;

    if(start[arr] === target) return start[arr];
    if(end[arr] === target) return end[arr]; 

    while( start <= end){
        let mid = Math.floor((start + end) / 2)
        if(arr[mid] === target) return mid;
        if(arr[mid] < target) return start = mid + 1;
        else end = mid - 1
    }
     return - 1;
  }

   console.log(binarybyloop(arr, 88))
