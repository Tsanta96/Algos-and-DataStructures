//Time Complexity = O(n + k)
//Space Complexity = O(n + k)

const getDigitFrom = (num, place) => Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;

// num = 4557
// place = 2

// Math.pow(10, 2) = 100
// Math.abs(4557) / 100 = 455.7
// Math.floor(455.7) = 455
// 455 % 10 = 5

const getIntLength = (num) => (num === 0) ? 1 : Math.floor(Math.log10(Math.abs(num))) + 1

// num = 4557
// Math.abs(4557) = 4557
// Math.log10(4557) = 3.66
// Math.floor(3.66) = 3
// 3 + 1 = 4

const getMaxDigits = (nums) => {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, getIntLength(nums[i]));
    }
    return maxDigits;
}

//Solution to Radix Sort for input arrays containing only positive integers:
function radixSort(arr) {
    if (!Array.isArray(arr)) return null;

    let maxDigits = getMaxDigits(arr); 
    for (let k = 0; k < maxDigits; k++) {
        let buckets = Array.from({length: 10}, () => []) // Array of empty arrays

        for (let i = 0; i < arr.length; i++) {
            let digit = getDigitFrom(arr[i], k);
            buckets[digit].push(arr[i]);
        }

        arr = [].concat(...buckets)
    }
    return arr;
}

//Solution to Radix Sort for input arrays containing both positive and negative numbers
function radixSortWithNegatives(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }

    var negatives = arr.filter(item => item < 0);
    var negativesSorted = [];
    if (negatives.length > 0) {
        negativesSorted = radixSort(negatives.map(item => Math.abs(item)))
            .reverse()
            .map(item => -item);
    }

    var positives = arr.filter(item => item >= 0);
    let maxDigits = getMaxDigits(positives);

    for (let k = 0; k < maxDigits; k++) {
        let buckets = Array.from({ length: 10 }, () => []);

        for (let i = 0; i < positives.length; i++) {
            let digit = getDigitFrom(positives[i], k);
            buckets[digit].push(positives[i]);
        }
        positives = [].concat(...buckets);
    }
    return negativesSorted.concat(positives);
}

//Grabs all negative numbers
//recursively calls radixSort with the abs val of those negative numbers
//reverses them
//add the negative sign back on
//places at the beginning of the final output array => negativesSorted.concat(positives)

console.log(radixSort([3322, 762, 25]));