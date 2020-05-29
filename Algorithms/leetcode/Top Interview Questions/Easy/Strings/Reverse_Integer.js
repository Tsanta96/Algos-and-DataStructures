// Given a 32-bit signed integer, reverse digits of an integer.

// Example 1:

// Input: 123
// Output: 321
// Example 2:

// Input: -123
// Output: -321
// Example 3:

// Input: 120
// Output: 21
// Note:
// Assume we are dealing with an environment which could only store integers within the 32-bit 
// signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your 
// function returns 0 when the reversed integer overflows.

var reverse = function (x) {
    let stringInt = String(x);
    stringArr = stringInt.split("");
    if (stringArr[stringArr.length - 1] === "0") {
        let tempArr = stringArr.slice(0,-1);
        stringArr = tempArr;
    }
    if(stringArr[0] === '-') {
        let tempArr = stringArr.slice(1);
        tempArr.reverse();
        stringArr = ['-'].concat(tempArr);
    } else {
        stringArr.reverse();
    }

    let arrJoin = stringArr.join('');
    let numberify = Number(arrJoin);
    if (numberify > Math.pow(2, 31) || numberify < Math.pow(-2, 31)) return 0;
    return numberify;
};

console.log(reverse(1534236469));

//Input = 32-bit signed integer
//Output = Integer
//Edge cases:
// If number is negative
// If number ends with 0
//Strategy:
//1) convert number to a string
//2) split string
//3) reverse string