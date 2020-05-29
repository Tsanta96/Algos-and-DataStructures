// The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

// Given two integers x and y, calculate the Hamming distance.

// Note:
// 0 ≤ x, y < 231.

// Example:

// Input: x = 1, y = 4

// Output: 2

// Explanation:
// 1   (0 0 0 1)
// 4   (0 1 0 0)
//        ↑   ↑

// The above arrows point to positions where the corresponding bits are different.

// x = 0 0 1
// y = 1 0 0

// var hammingDistance = function(x, y) {
//     let xBit = (x).toString(2);
//     let yBit = (y).toString(2);

//     let xBitArr = xBit.split("");
//     let yBitArr = yBit.split("");
    
//     let lengthDiff = Math.abs(xBitArr.length - yBitArr.length);

//     for (let i = 0; i < lengthDiff; i++) {
//         if (xBitArr.length < yBitArr.length) {
//             xBitArr.unshift('0');
//         } else {
//             yBitArr.unshift('0');
//         }
//     }

//     let hamDistance = 0;

//     for (let i = 0; i < yBitArr.length; i++) {
//         if (yBitArr[i] !== xBitArr[i]) {
//             hamDistance++;
//         }
//     }

//     return hamDistance;
// }

//EASIER SOLUTION:
var hammingDistance = (x, y) => countOnes(x^y);

const countOnes = (n) => {
    let y = 0;
    while (n) {
        y++;
        n &= n-1;
    }
    return y;
}

console.log(hammingDistance(1,4));

//Input = two values
//Output = the hamming distance between the two values
//Tools = Some bit manipulation operations
//Strategy:
//1) Convert numbers to binary format
//2) compare the different places of each digit and increase a counter if they aren't the same