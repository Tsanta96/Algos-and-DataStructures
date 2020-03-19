// Given an array arr of integers, check if there exists two integers N and M such 
// that N is the double of M ( i.e. N = 2 * M).

// Input: arr = [10, 2, 5, 3]
// Output: true
// Explanation: N = 10 is the double of M = 5, that is, 10 = 2 * 5.

var checkIfExist = function (arr) {
    let dictionary = {};

    for (let i in arr) {
        let current = arr[i]

        if (dictionary[current * 2] || dictionary[current / 2]) {
            return true;
        }
        dictionary[current] = i;
    }
    return false;
};

console.log(checkIfExist([10, 2, 5, 3]));