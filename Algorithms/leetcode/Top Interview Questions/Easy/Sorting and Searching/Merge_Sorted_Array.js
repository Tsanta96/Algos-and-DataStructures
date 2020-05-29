// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

// Note:

// The number of elements initialized in nums1 and nums2 are m and n respectively.
// You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2.
// Example:

// Input:
// nums1 = [1,2,3,0,0,0], m = 3
// nums2 = [2,5,6],       n = 3

// Output: [1,2,2,3,5,6]

//My solution
function merge(nums1, n, nums2, n) {
    let incrementor = 0;
    nums1 = nums1.slice(0,nums1.length / 2);
    let nums1Length = nums1.length;

    while (incrementor < nums1Length) {
        if (nums2[0] <= nums1[incrementor]) {
            nums2Num = nums2.shift();
            nums1.splice(incrementor, 0, nums2Num);
        } 
        incrementor++;
    }

    if (incrementor >= nums1Length) {
        while (nums2.length !== 0) {
            let num = nums2.shift()
            nums1.push(num);
        }
    }
    return nums1;
}

//Pulled from leetcode
function merge(nums1, m, nums2, n) {
    let index1 = m - 1 //2
    let index2 = n - 1 //2
    let index = m + n - 1 //5
    while (index2 >= 0) {
        if (nums1[index1] > nums2[index2]) {
            nums1[index--] = nums1[index1--]; 
        } else {
            nums1[index--] = nums2[index2--]; 
        }
    }
};

let testArr1 = [1,2,3,0,0,0]
let m = 3
let testArr2 = [2,5,6]
let n = 3

console.log(merge(testArr1, m, testArr2, n));

//Input = 2 sorted arrays
//Output = 1 sorted array
//Strategy:
//1) iterate through nums 1 comparing the nums
//cases:
//nums2 < nums1
//--insert nums2 before nums1
//don't increment

//nums2 === nums1
//--insert nums 2 before nums1
//don't increment
 
//nums2 > nums1
//--increment nums1 num until nums2 <= nums1
//insert nums2 before nums1