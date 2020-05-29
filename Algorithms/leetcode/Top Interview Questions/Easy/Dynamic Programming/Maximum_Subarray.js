// Given an integer array nums, find the contiguous subarray (containing at least 
// one number) which has the largest sum and return its sum.

// Example:

// Input: [-2,1,-3,4,-1,2,1,-5,4],
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.
// Follow up:

// If you have figured out the O(n) solution, try coding another solution using the 
// divide and conquer approach, which is more subtle.

var maxSubArray = (nums) => {
    if (nums.length === 1) return nums[0];
    if (nums.length === 0) return null;
    let table = new Array(nums.length);

    table[0] = nums[0];
    table[1] = Math.max(nums[1], nums[0] + nums[1]);
    
    for (let i = 2; i < nums.length; i++) {
        table[i] = Math.max(nums[i], nums[i] + table[i-1]);
    };
    return Math.max(...table);
}
//Input = array of numbers
//Output = the greatest value of contiguos values
//Tools = possibly a sliding window algorithm approach
//Edge cases = 1 element, return that element. 0 elements, return null
//Strategy:
//1) check for empty array and array containing 1 element.
//2) assign a value for the first and second elements in the table
//3) create a for loop starting with the second element.
//4) Assign the current element to the greater of either the current element or the current element + the previous element
//5) Find the maxiumum value in the Array and return it -> Math.max(...Array)
//Big O:
//Time complexity = O(n) because have to iterate through entire array
//Space complexity = O(n) because have to create a new array (table) with n elements.

console.log(maxSubArray([-2, 1, -2, 4, 3, 5, 6, 1, 5]));

