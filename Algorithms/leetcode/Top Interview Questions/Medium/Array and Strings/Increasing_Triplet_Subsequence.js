// Given an unsorted array return whether an increasing subsequence of length 3 exists or not in the array.

// Formally the function should:

// Return true if there exists i, j, k
// such that arr[i] < arr[j] < arr[k] given 0 ≤ i < j < k ≤ n-1 else return false.
// Note: Your algorithm should run in O(n) time complexity and O(1) space complexity.

// Example 1:

// Input: [1,2,3,4,5]
// Output: true
// Example 2:

// Input: [5,4,3,2,1]
// Output: false

var increasingTriplet = function(nums) {
    let first = Number.MAX_SAFE_INTEGER;
    let second = Number.MAX_SAFE_INTEGER;
    
    for (const n of nums) {
        if (n <= first) {
            first = n;
        } else if (n <= second) {
            second = n;
        } else {
            return true;
        }
    }
    return false;
}

let testNums = [2, 9, 3, 1, 4]
console.log(increasingTriplet(testNums));

// first = 9~, 2, 1
// second = 9~, 9, 3
// three = 4


//Input: Array of nums 
//Output: Boolean 
//Strategy: BRUTE FORCE - Triple Nested Loop (n^3)
//1) create an array of three elements called trip all initially assigned to 0
//2) iterate through nums array 
//3) if element is less than trip[0] and both other elements in the array are still 0, replace trip[0]

// [9, 3, 1, 2, 7]
// [9,]

