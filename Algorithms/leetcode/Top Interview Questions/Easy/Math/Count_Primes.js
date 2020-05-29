// Count the number of prime numbers less than a non-negative number, n.

// Example:

// Input: 10
// Output: 4
// Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.

//Takes too long
var countPrimes = function(n) {
    let primesTable = new Array(n);
    primesTable[0] = 0;
    primesTable[1] = 0;
    primesTable[2] = 1;

    for (let i = 3; i < n; i++) {
        console.log("i = ", i);
        let primesInc = isPrime(i) ? 1 : 0
        primesTable[i] = primesTable[i-1] + primesInc;
    }

    return primesTable[primesTable.length - 1];
}

function isPrime(num) {
    if (num < 2) return false;
    if (num === 2) return true;

    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

//Sieve of Eratosthenes approach - Iteratively marking as composite (i.e., not prime)
// the multiples of each prime, starting with the first prime number, 2. The multiples 
// of a given prime are generated as a sequence of numbers starting from that prime, with 
// constant difference between them that is equal to that prime.

var countPrimes = function(n) {
    const nums = [...Array(n).keys()].slice(2);

    for (let i = 0; i < Math.floor(Math.sqrt(n)); i++) {
        if (nums[i]) {
            for (let j = i + nums[i]; j < n; j += nums[i]) {
                nums[j] = undefined;
            }
        }
    }
    return nums.filter(n => n).length;
}

console.log(countPrimes(499997));