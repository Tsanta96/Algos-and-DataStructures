// Given a non-empty array of integers, every element appears twice except for one. Find that single one.

// Note:

// Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

// Example 1:

// Input: [2,2,1]
// Output: 1
// Example 2:

// Input: [4,1,2,1,2]
// Output: 4

//Using Bit Manipulation:

function singleNum(nums) {
    let a = 0;
    for (let i = 0; i < nums.length; i++) {
        a ^= nums[i];
    }
    return a;
}

// Time complexity : O(n)O(n). We only iterate through \text{nums}nums, so the time
// complexity is the number of elements in \text{nums}nums.

// Space complexity : O(1)O(1).
