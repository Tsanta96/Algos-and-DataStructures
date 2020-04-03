// Given an array consisting of n integers, find the contiguous subarray of given 
// length k that has the maximum average value.And you need to output the maximum 
// average value.

// Input: [1, 12, -5, -6, 50, 3], k = 4
// Output: 12.75
// Explanation: Maximum average is(12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75

var findMaxAverage = function (nums, k) {
    //edge case
    if (k > nums.length) return null;

    //first window
    let windowTotal = 0;
    for (let i = 0; i < k; i++) {
        windowTotal += nums[i];
    }

    let maxResult = windowTotal;
    for (let i = k; i < nums.length; i++) {
        windowTotal += nums[i] - nums[i-k];
        maxResult = Math.max(windowTotal, maxResult);
    }
    
    let maxAvg = maxResult / k;
    return maxAvg;
};

console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4));