const quickSort = (arr) => {
    if(arr.length <= 1){
        return arr
    }

    let pivot = arr[arr.length - 1];
    let left = [];
    let right = [];

    for(let i = 0; i < arr.length - 1; i++){
        if(arr[i] < pivot){
            left.push(arr[i]);
        }else{
            right.push(arr[i])
        }
    }

    return quickSort(left).concat(pivot, quickSort(right));
   }

   let array = [2,3,4,5,6,2,1,3,4,5,9,3];

   let sortedarray = quickSort(array);
   console.log(sortedarray)