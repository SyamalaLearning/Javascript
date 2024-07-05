//Method-1 Using for loop

function isPalindrome(str) {
	let j = str.length - 1
	for (let i = 0; i < str.length / 2; i++) {
		if (str[i] != str[j]) {
			return false;
		}
		j--;
	}
	return true;
}

//Method-1 A

function isPalindrome(str) {
    let rev = "";
    for (let i = str.length - 1; i >= 0; i--) {
        rev += str[i];
    }
    if (rev == str) {
        return true
    } else {
        return false;
    }
}
 

let str1 = "racecar";
let str2 = "nitin";
let str3 = "Rama";

console.log(isPalindrome(str1));
console.log(isPalindrome(str2));
console.log(isPalindrome(str3));

//Method-2 Using split(), reverse() and join() methods

function isPalindrome(str) {
	let rev = str.split("").reverse().join("");

	if (rev == str) {
		return true
	}
	return false

}

let str4 = "racecar";
let str5 = "nitin";
let str6 = "Rama";

console.log(isPalindrome(str4));
console.log(isPalindrome(str5));
console.log(isPalindrome(str6));
