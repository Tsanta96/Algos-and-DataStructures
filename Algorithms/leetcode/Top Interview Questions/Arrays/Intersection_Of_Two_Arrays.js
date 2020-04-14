// Given two arrays, write a function to compute their intersection.

// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]
// Note:

// Each element in the result should appear as many times as it shows in both arrays.
// The result can be in any order.
// Follow up:

// What if the given array is already sorted? How would you optimize your algorithm?
// What if nums1's size is small compared to nums2's size? Which algorithm is better?
// What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?

var intersect = function(nums1, nums2) {
    let result = [];
    for (let i = 0; i < nums1.length; i++) {
        for (let j = 0; j < nums2.length; j++) {
            if (nums1[i] === nums2[j]) {
                result.push(nums1[i]);
                nums2.splice(j,1);
                break;
            }
        }
        continue;
    }

    return result;
}

let testArr1 = [4,9,5];
let testArr2 = [9, 4, 9, 8, 4];

console.log(intersect(testArr1, testArr2));

//input = 2 arrays
//output = array of intersecting elements of the two input arrays
//Edge Cases:
//  if both arrays are 0 elements return empty array
//  if one array has one element that also occurs in other array, return that array

//Strategy: 
//iterate through both arrays, if an element exists in both arrays, begin 