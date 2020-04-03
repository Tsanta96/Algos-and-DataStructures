// You have a total of n coins that you want to form in a staircase shape, where every k - th row must have exactly k coins.
// Given n, find the total number of full staircase rows that can be formed.
// n is a non - negative integer and fits within the range of a 32 - bit signed integer.

//32-bit. This means that the number is represented by 32 separate 1's and 0's
//32 bits of 2 possible states = 2^32 = 4,294,967,295

//input is an Amount of coins (integer)
//output is an integer (amount of rows we can form)

var arrangeCoins = function (n) {
    let coinBank = n;
    let counter = 0
    for (let i = 1; i <= n; i++) {
        if (coinBank - i >= 0) {
            coinBank -= i;
            counter += 1;
        } else {
            break;
        }
    }
    return counter;
};

console.log(arrangeCoins(8));

