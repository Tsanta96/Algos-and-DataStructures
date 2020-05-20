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

var hammingDistance = function(x, y) {
    let xBit = (x).toString(2);
    let yBit = (y).toString(2);

    console.log("xBit => ", xBit.split("").reverse());
    console.log("yBit => ", yBit.split("").reverse());

    let maxLength = xBit.length > yBit.length ? xBit.length : yBit.length;
    let diff = 0;

    // for (let i = 0; i <= maxLength; i++) {

    // }
}

console.log(hammingDistance(1,4));

//Input = two values
//Output = the hamming distance between the two values
//Tools = Some bit manipulation operations
//Strategy:
//1) Convert numbers to binary format
//2) compare the different places of each digit and increase a counter if they aren't the same