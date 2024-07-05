//Check an Array is Sorted or Not

//1.Using the Brute Force Approach

function checkSorted(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false;
        }
    }
    return true;
}

// Example usage
const arr1 = [32, 39, 48, 56];
const arr2 = [22, 65, 1, 39];

console.log(checkSorted(arr1));   
console.log(checkSorted(arr2)); 


//2.Using the every() Method

function checkSortedArray(array) {
    return arr.every((value, index, array) => 
                     index === 0 || value >= array[index - 1]);
}
// Example usage
const arr3 = [32, 39, 48, 56];
const arr4 = [22, 65, 1, 39];

console.log(checkSortedArray(arr3));
console.log(checkSortedArray(arr4)); 

//3.Using Array.reduce()

function isSorted(arr) {
    return arr.reduce((isSorted, value, index) => {
        return isSorted && (index === 0 || arr[index - 1] <= value);
    }, true);
}

console.log(isSorted([1, 2, 3, 4, 5])); 
console.log(isSorted([5, 3, 1, 2, 4])); 

