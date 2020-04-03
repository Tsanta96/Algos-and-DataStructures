
// Given a sorted array and a target value, return the index if the target is 
// found. If not, return the index where it would be if it were inserted in order.

// You may assume no duplicates in the array.

// Example 1:

// Input: [1,3,5,6], 5
// Output: 2
// Example 2:

// Input: [1,3,5,6], 2
// Output: 1
// Example 3:

// Input: [1,3,5,6], 7
// Output: 4
// Example 4:

// Input: [1,3,5,6], 0
// Output: 0

var searchInsert = function (nums, target) {
    //input = a sorted array of nums, a target to find the index (or would be) index of
    //Steps: 
    //1)return index if target is found
    //2)If not found, iterate through nums and find where element is greater than target and insert at that index.

    if (nums.includes(target)) return nums.indexOf(target);
    for (let i = 0; i < nums.length; i++) {
        if (i === nums.length - 1 && target > nums[i]) {
            return nums.length;
        } else if (target > nums[i]) {
            continue;
        }
        return i;
    }
};

console.log(searchInsert([1, 3, 5, 6], 5));