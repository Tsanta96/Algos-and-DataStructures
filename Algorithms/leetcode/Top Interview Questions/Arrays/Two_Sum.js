// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:

// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

//Two sum, use a Hash Map and a double pass
var twoSum = function (nums, target) {
    let numsMap = new Map();
    for (let i = 0; i < nums.length; i++) {
        numsMap.set(nums[i], i);
    }
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (numsMap.has(complement) && numsMap.get(complement) !== i) {
            return [i, numsMap.get(complement)];
        }
    }
};

// for (let i = 0; i < nums.length - 1; i++) {
//     for (let j = 0; j < nums.length-1; j++) {
//         if (nums[i] + nums[j] === target && i !== j) {
//             return [i, j];
//         }
//     }
// }

console.log(twoSum([3,2,4], 6));

//Input
//Output
//Edge Case
//Tools to use? Datastructure, Dynamic Programming? => Hash Map
//Strategy
//Execute