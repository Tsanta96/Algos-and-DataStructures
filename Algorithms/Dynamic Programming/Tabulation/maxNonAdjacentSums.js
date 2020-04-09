// Write a function, maxNonAdjacentSum(nums), that takes in an array of nonnegative numbers.
// The function should return the maximum sum of elements in the array we can get if we cannot take
// adjacent elements into the sum.
//
// Try to solve this in two ways, using tabulation and memoization.
//
// Examples:
//
// maxNonAdjacentSum([2, 7, 9, 3, 4])   // => 15, because 2 + 9 + 4
// maxNonAdjacentSum([4,2,1,6])         // => 10, because 4 + 6 

//tabulation
function maxNonAdjacentSum(nums) {
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];
    if (nums.length === 2) return Math.max(nums[0], nums[1]);

    let table = [];
    table[0] = nums[0];
    table[1] = Math.max(nums[0], nums[1]);

    for (let i = 2; i < nums.length; i++) {
        table[i] = Math.max(table[i-2] + nums[i], table[i-1]);
    }
    return table[table.length-1];
}

//memoization
function maxNonAdjacentSum(nums, memo={}) {
    if (nums.length in memo) return memo[nums.length];
    if (nums.length === 0) return 0;

    let firstEle = nums[0];
    memo[nums.length] = Math.max(
        firstEle + maxNonAdjacentSum((nums.slice(2)), memo),
        maxNonAdjacentSum((nums.slice(1)), memo)
    );

    return memo[nums.length];
}   

console.log(maxNonAdjacentSum([4, 2, 1, 6]))