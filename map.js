let superstorestock = new Map();

superstorestock.set("toothpaste", 1000);
superstorestock.set("toothbrush", 2000);

// console.log(superstorestock.get("toothpaste"));
// console.log(superstorestock.has("toothpastew"));

// console.log(superstorestock.delete("toothpaste"));

// console.log(superstorestock.size)

const sortcharacters = (input) => {
    return [...input].sort().join("")
}

const array1 = ["silent", "inlets", "facebook"];
const array2 = ["listen", "enlist", "google"];


let sortedWordsInArray2 =  new Set();

array2.forEach(element => {
    sortedWordsInArray2.add(sortcharacters(element))
});

let result = [];
let anagramsMatched = new Set();

for (let word of array1) {
    let sortedWord = sortcharacters(word);
    if (sortedWordsInArray2.has(sortedWord)) {
        result.push(word);
        anagramsMatched.add(word);
    }
}


//  console.log(result);
//  console.log(anagramsMatched);

const sortecharacters1 = (input)  => {
  return [...input].sort().join('')
}

const getanagramgroups = (array) => {

  let anagramGroups = new Map();
 
  array.forEach((word) => {
    let sortedWord1 = sortecharacters1(word);
    if(anagramGroups.has(sortedWord1)){
      anagramGroups.get(sortedWord1).push(word)
    }else{
      anagramGroups.set(sortedWord1, [word])
    }
  })
  return anagramGroups;
}


let array3 = ["listen", "enlist", "google", "silent", "tinsel"];
let array4 = ["silent", "inlets", "facebook", "abc", "cab"];

let anagramGroupsArray1 = getanagramgroups(array3);
let anagramGroupsArray2 = getanagramgroups(array4);

console.log("anagram Groups in Array1:")
anagramGroupsArray1.forEach((words, sortedWord1) => {
  console.log(words)
})
console.log("anagram Groups in Array2")
anagramGroupsArray2.forEach((words , sortedWord1) => {
  console.log(words)
})


let hashedmap = new Map()

hashedmap.set("red",10);
hashedmap.set("der",20);

const addingvalues = () => {
    let sum = 0;
    for(let value of hashedmap.values()){
       sum += value
    }
    return sum;
}

console.log("sum of values is",addingvalues(hashedmap))
