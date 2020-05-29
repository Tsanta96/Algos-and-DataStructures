// Given a non-empty array of digits representing a non-negative integer, plus one to the integer.

// The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.

// You may assume the integer does not contain any leading zero, except the number 0 itself.

// Example 1:

// Input: [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Example 2:

// Input: [4,3,2,1]
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.

var plusOne = function (digits) {
    for (let i = digits.length-1;i >= 0; i--) {
        if (digits[i] === 9) {
            digits[i] = 0;
            //Edge case
            if (i === 0) {
                //Insert 1 at beginning of the array
                digits.splice(0,0,1);
            }
        } else {
            digits[i]++;
            break;
        }
    }
    return digits;
};

const inputArr = [1,9];

console.log(plusOne(inputArr));

//Input = an array of non-negative integers
//Output an array representing an integer form of the original array passed in PLUS ONE
//Edge Case: 
//   If array passed in = [0] return [1]
//   If last number in integer is a 9, going to have to increase the proper places digit
//      Ex. [4,3,3,9] // [4,3,4,0]

//strategy:
//1) stringify the number
//2)Convert the number from string to Number
//3)add 1 to the number
//Return an array version of the number
