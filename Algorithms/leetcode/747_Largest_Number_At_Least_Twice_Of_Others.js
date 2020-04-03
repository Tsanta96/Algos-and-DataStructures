// In a given integer array nums, there is always exactly one largest element.

// Find whether the largest element in the array is at least twice as much as every other number in the array.

// If it is, return the index of the largest element, otherwise return -1.

// Example 1:

// Input: nums = [3, 6, 1, 0]
// Output: 1
// Explanation: 6 is the largest integer, and for every other number in the array x,
// 6 is more than twice as big as x.  The index of value 6 is 1, so we return 1.
 

// Example 2:

// Input: nums = [1, 2, 3, 4]
// Output: -1
// Explanation: 4 isn't at least as big as twice the value of 3, so we return -1.
 

// Note:

// nums will have a length in the range [1, 50].
// Every nums[i] will be an integer in the range [0, 99].

var dominantIndex = function (nums) {
    //save input array to some variable newArr
    //sort the nums array (smallest to largest)
    //grab the largest number
    //grab the second largest number and if the largest is at least twice as big, return index newArr.indexOf(num)
    //else return -1
    if (nums.length <= 1) return 0;

    const newArr = nums.slice();
    newArr.sort((a, b) => a - b);

    const largest = newArr[newArr.length - 1];
    const secLargest = newArr[newArr.length - 2];
    if (largest >= (secLargest * 2)) {
        return nums.indexOf(largest);
    } else {
        return -1;
    }

};

var dominantIndex = function(nums) {
    let max = Math.max(...nums);
    for (num of nums) {
        if (num === max) continue;
        if (num*2 > max) return -1;
    }
    return nums.indexOf(max);
}