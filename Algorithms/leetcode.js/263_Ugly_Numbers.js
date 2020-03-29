// Write a program to check whether a given number is an ugly number.

// Ugly numbers are positive numbers whose prime factors only include 2, 3, 5.

// Example 1:

// Input: 6
// Output: true
// Explanation: 6 = 2 × 3
// Example 2:

// Input: 8
// Output: true
// Explanation: 8 = 2 × 2 × 2
// Example 3:

// Input: 14
// Output: false 
// Explanation: 14 is not ugly since it includes another prime factor 7.
// Note:

// 1 is typically treated as an ugly number.
// Input is within the 32-bit signed integer range: [−231,  231 − 1].

// var isUgly = function (num) {
//     if (num <= 0) return false;
//     if (num === 1) return true;
//     const uglyNums = [2,3,5]
//     //grab all factors of number
//     let factors = retrieveFactors(num);

//     let factorsThatArePrime = [];
//     for (val of factors) {
//         if ((isPrime(val)) && (val !== 1 || val !== num)) {
//             factorsThatArePrime.push(val);
//         }
//     }

//     const onlyUglies = factorsThatArePrime.every(num => uglyNums.includes(num));
    
//     return onlyUglies;
// };

// var retrieveFactors = (num) => {
//     //4 = 1,2,4
//     //5 = 1,5
//     //6 = 1,2,3,6
//     //7 = 1,7
//     //8 = 1,2,4,8
//     num = Math.abs(num);
//     const factors = [];
//     for (let i = 1; i <= num; i++) {
//         if (Number.isInteger(num / i)) {
//             factors.push(i);
//         }
//     }

//     return factors;
// }

// var isPrime = (num) => {
//     if (num < 2) return false;
//     if (num === 2) return true;

//     for (let i = 2; i <= num; i++) {
//         if (num % i && i !== num)) return false;
//     }
//     return true;
// }

var isUgly = function (num) {
    if (num <= 0) return false;
    let factors = [],
        allowed = [2, 3, 5];
    while (num > 1) {
        if (num % 2 == 0) {
            factors.push(2);
            num = num / 2;
        } else if (num % 3 == 0) {
            factors.push(3);
            num = num / 3;
        } else if (num % 5 == 0) {
            factors.push(5);
            num = num / 5;
        } else {
            factors.push(num);
            break;
        }
    }

    let nums = factors.filter(x => {
                //If x is not in allowed, return true which adds x to the array. and therefore has a length > 0 which we don't want. 
                return allowed.includes(x) ? false : true;
    });
    return nums.length == 0;
};


console.log(isUgly(14));