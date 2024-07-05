// Eg-1 Print N to 1 using Recursion

function printRecursiveNum(num) {
    if (num == 0) {
        return;
    }
    console.log(num);
    printRecursiveNum(num - 1);
}

const num = 8;
printRecursiveNum(num);


//Eg-2 Print 1 to N using Recursion

function printRecursiveNumber(number, currentValue) {
    if (currentValue > number) {
        return;
    }
    console.log(currentValue);
    printRecursiveNumber(number, currentValue + 1);
}

const number = 8;
printRecursiveNumber(number, 1);


// Eg-3 Check for Palindrome String using Recursion

//Approach-1
// A recursive JavaScript program to 
// check whether a given String 
// is palindrome or not 

function checkPalindrome(str, s, e) {

    // If there is only one character 
    if (s == e)
        return true;

    // If first and last characters 
    // does not match 
    if ((str.charAt(s)) != (str.charAt(e)))
        return false;

    // If there are more than 
    // two characters, check if 
    // middle substring is also 
    // palindrome or not. 
    if (s < e + 1)
        return checkPalindrome(str, s + 1, e - 1);

    return true;
}

function isPalindrome(str) {
    let len = str.length;

    // An empty string is 
    // considered as palindrome 
    if (len == 0)
        return true;

    return checkPalindrome(str, 0, len - 1);
}

// Driver Code 

let str1 = "malayalam";

if (isPalindrome(str1))
    console.log("Yes, it is palindrome");
else
    console.log("No,it is not palindrome");

//Approach-2

function checkPalindrome(s, i) {
    if (i > s.length / 2) { return true; }
    return s[i] == s[s.length - i - 1] && checkPalindrome(s, i + 1)
}

let str2 = "racecar";
let ans = checkPalindrome(str2, 0);
if (ans == true) {
    console.log("Yes,it is palindrome");
}
else {
    console.log("No,it is not palindrome");
}
