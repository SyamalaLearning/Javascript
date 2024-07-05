//Method-1 Using push method

const myArray = [1, 2, 3]; 

myArray.push(4); 
console.log(myArray); 

myArray.push(5, 6); 
console.log(myArray);

// Method-2 Using concat method (Duplicate value included)

const myArray1 = ['JavaScript', 'GeeksforGeeks']; 
const myArray2 = ['TypeScript', 'ReactJs', 'Angular','JavaScript']; 

const newArray = myArray1.concat(myArray2); 
console.log(newArray);

//Method-3 Using splice method

const myArray3 = [1, 2, 3]; 

myArray.splice(1, 0, 4); 
console.log(myArray3);

//Method-4 Using spread operator

const myArray4 = [1, 2, 3]; 

const newArray4 = [...myArray4, 4, 5]; 
console.log(newArray4)

//Method-5 Using unshift method(used to add one or more elements to the beginning of an array.)

const myArray5 = [4, 5, 6]; 

myArray5.unshift(3); 
console.log(myArray5); 

myArray5.unshift(1, 2); 
console.log(myArray5);

//Method-6 Using length property(used to set or return the number of elements in an array. This property can also be used to add elements at the end of the array.)

const myArray6 = [1, 2, 3]; 

console.log(myArray6.length); 
myArray6[myArray6.length] = 4; 

console.log(myArray6); 
console.log(myArray6.length);

//Method-7 Using Index property

const myArray7 = [1, 2, 3]; 

myArray7[3] = 4; 
console.log(myArray7);

