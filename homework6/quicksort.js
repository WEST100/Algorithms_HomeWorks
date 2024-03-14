
const array = [29, 14, 15, 28, 6, 8, -6, 1, 3, 18];

const quickSort = (array) => {
    if (array.length < 2) {
        return array;
        
    }
    let pivot = array[0];
    const left = [];
    const right = [];

    for (let i = 1; i < array.length; i++) {
       if (pivot < array[i]) {
        left.push(array[i]);        
       }else{
        right.push(array[i]);
       }        
    }
    return quickSort(left).concat(pivot, quickSort(right))
}

console.log(array);
console.log(quickSort(array));