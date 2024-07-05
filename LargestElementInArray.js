//1. Using Brute force Approach

// JavaScript program to find
// maximum in arr[] of size n

function largest(arr) {
    let i;

    // Initialize maximum element
    let max = arr[0];

    // Traverse array elements
    // from second and compare
    // every element with current max
    for (i = 1; i < arr.length; i++) {
        if (arr[i] > max)
            max = arr[i];
    }

    return max;
}

// Driver code
let arr = [22, 65, 1, 39];
console.log("Largest in given array is " + largest(arr));

//2.Using forEach method

function findLargestWithForEach(arr) {
    let max = arr[0];
    arr.forEach(num => {
        if (num > max) {
            max = num;
        }
    });
    return max;
}

console.log(findLargestWithForEach([1, 2, 3, 4, 5])); 


//3.Using spread operator

function largestElementWithSpread(arr1) {
    if (arr1.length === 0) {
        console.log("Array is empty");
        return;
    }

    return Math.max(...arr1);
}

const arr1 = [22, 65, 1, 39];
console.log("Largest in given array is " + largestElementWithSpread(arr1));
