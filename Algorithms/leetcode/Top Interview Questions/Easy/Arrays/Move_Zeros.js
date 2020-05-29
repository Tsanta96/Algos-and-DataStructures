// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Example:

// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Note:

// You must do this in-place without making a copy of the array.
// Minimize the total number of operations.

var moveZeroes = function (nums) {
    let end = nums.length;
    for (let i = 0; i < end - 1; i++) {
        if (nums[i] === 0) {
            nums.push(0);
            nums[i] = null;
        }
    }
    
    for (let i = 0; i < nums.length;i++) {
        if (nums[i] === null) {
            nums.splice(i,1);
            i--;
        }
    }
    return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12]));

//Input = An array
//Output = An array
//Edge Case: All zeros or all zeros at end do nothing, no zeros do nothing
//Strategy:
// 1)iterate through input array
// 2)if element = 0, use splice method to remove the element var zeroEle = Array.splice(i,1)
// 3)store this removed element in a variable
// 4)push the variable onto the end of the array
//Small Sample Walkthrough
//Execute