// Given an integer, write a function to determine if it is a power of three.

// Example 1:

// Input: 27
// Output: true
// Example 2:

// Input: 0
// Output: false
// Example 3:

// Input: 9
// Output: true
// Example 4:

// Input: 45
// Output: false
// Follow up:
// Could you do it without using any loop / recursion?

//Iterative version
var isPowerOfThree = function(n) {
    if (n === 1) return true;
    if (n < 3) return false;

    while (n > 0) {
        if (n / 3 === 1) return true;
        n = n / 3;
    }
    return false;
}

var isPowerOfThreeRec = function (n) {
    if (n < 1) return false;
    if (n === 1) return true;

    return isPowerOfThreeRec(n / 3);
}

// console.log(isPowerOfThree(45));
console.log(isPowerOfThreeRec(8));