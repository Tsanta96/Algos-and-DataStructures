// Given an array, rotate the array to the right by k steps, where k is non-negative.

// Example 1:

// Input: [1,2,3,4,5,6,7] and k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]
// Example 2:

// Input: [-1,-100,3,99] and k = 2
// Output: [3,99,-1,-100]
// Explanation: 
// rotate 1 steps to the right: [99,-1,-100,3]
// rotate 2 steps to the right: [3,99,-1,-100]
// Note:

// Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.
// Could you do it in-place with O(1) extra space?

//Not in place (Space Complexity = O(n))
function rotate(nums, k) {
    let newArr = new Array(4);
    for (let i = 0; i < nums.length; i++) {
        newArr[i] = nums[(i + k) % nums.length];
    }
    return newArr;
}

//In place (Space Complexity = O(1))
function rotate(nums, k) {
    for (let i = 0; i < k; i++) {
        let ele = nums.pop();
        nums.unshift(ele);
    }
    return nums;
}

let numsArr = [4,5,6,7];
let k = 2;

console.log(rotate(numsArr, k));