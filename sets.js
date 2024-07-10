let visitors = new Set();

visitors.add("user123");
visitors.add("user234");
visitors.add("user123");

console.log(visitors);

if(visitors.has("user125")){
  console.log("visitor is here")
}else{
  console.log("another user")
}

const aredisjoined = (arr1,arr2) => {
  const set1 = new Set(arr1);
 for(const element of arr2 ){
  if(set1.has(element)){
    return element
  }
 }

}
// console.log(aredisjoined(['are','rer','rrr'],["err","rrr","wewe"]))


const duplicateremove = (array) => {
   return Array.from(new Set(array))
}

// console.log(duplicateremove([1,3,4,5,6,7,3]));

// let wordset = new Set()

// let duplicateSet = new Set()

// for(let word of words){
//     if(wordset.has(word)){
//       duplicateSet.add(word)
//     }else{
//         wordset.add(word)
//     }
// }

// duplicateSet.forEach(word => wordset.delete(word))

// let lastuniqueword = ""

// for(let i = words.length - 1; i >= 0; i--){
//     if(wordset.has(words[i])){
//         lastuniqueword = words[i]

//     }
// }

//  return lastuniqueword;


  let arr = [1,3,4,2,3,4,5]
  let op= []
  for(let i = arr.length - 1; i>=0; i--){
    op= op + arr[i]
  }
 
//    console.log(op)

const sortcharacters = (input) => {
    return [...input].sort.join("")
}

let sortedArray2 =  new Set();

array2.forEach(element => {
    sortedArray2.add(sortcharacters(element))
});


let result = [];
for (let word of array1) {
    let sortedWord = sortCharacters(word);
    if (sortedWordsInArray2.has(sortedWord)) {
        result.push(word);
        anagramsMatched.add(word);
    }
}

return result;
