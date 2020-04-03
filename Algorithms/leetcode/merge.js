var merge = function (nums1, m, nums2, n) {
    let i = 0;
    while (nums2.length) {
        if (nums2[0] <= nums1[i]) {
            shiftArr(nums1, i, nums2.shift());
        }
        if (i > nums1.length / 2) {
            shiftArr(nums1, i, nums2.shift());
        }
        i++;
    }

    return nums1;
};

function shiftArr(nums1, idx, ele) {
    for (let i = nums1.length - 1; i > idx; i--) {
        nums1[i] = nums1[i - 1];
    }
    nums1[idx] = ele;
    return nums1;
}

let nums1 = [1,2,3,0,0,0]; 
let m = 3;
let nums2 = [2,5,6];       
let n = 3;

// nums2.length = 3
// [1,2,3,0,0,0]

// console.log(merge(nums1, m, nums2, n));
merge(nums1, m, nums2, n)