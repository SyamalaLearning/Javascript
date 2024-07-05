function printRowIndexes(startIndex, endIndex) {
    console.log("| test data row |")
    for(let i=startIndex; i<=endIndex; i++) {
        console.log(`| ${i} |`)
    }
}


// write the function you want to run here:
//printRowIndexes(3,21)

// then enter the following commands (one at a time) to the terminal:
// "node ./tests/support/print-cucumber-examples-section.js"



// * Note: max number of rows which can be printed at one time to the console (without text cutting off) is 1010
let arr = Array.from({ length: 7 }, (a , i) => i);
console.log(arr.length);
console.log(arr)
