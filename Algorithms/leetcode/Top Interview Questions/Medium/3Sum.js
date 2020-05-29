// Given an array nums of n integers, are there elements a, b, c in nums such that 
// a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

// Note:

// The solution set must not contain duplicate triplets.

// Example:

// Given array nums = [-1, 0, 1, 2, -1, -4],

// A solution set is:
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]


//NAIVE APPROACH----------------------------------------------------------------

//Time Complexity = O(n^3) + n/3?
//Space Complexity = O(n/3 + 2)?
// var threeSum = function(nums) {
//     let sumZeroSet = new Set();

//     for (let a = 0; a < nums.length-2; a++) {
//         for (let b = a+1; b < nums.length -1; b++) {
//             for (let c = b+1; c < nums.length; c++) {
//                 if (nums[a] + nums[b] + nums[c] === 0) {
//                     let sumZero = [nums[a], nums[b], nums[c]];
//                     sumZero.sort();
//                     let sumZeroString = JSON.stringify(sumZero);
//                     if (!sumZeroSet.has(sumZeroString)) sumZeroSet.add(sumZeroString);
//                 }
//             }
//         }
//     }

//     arrOfArrs = Array.from(sumZeroSet).map(arr => JSON.parse(arr));
//     return arrOfArrs;
// }

// O(n^2) Approach--------------------------------------------------------------
// var threeSum = function (nums) {
//     let sumZeroSet = new Set();

//     for (let a = 0; a < nums.length - 1; a++) {
//         for (let b = a + 1; b < nums.length; b++) {
//             // console.log("NUMS => ", nums[a], nums[b]);
//             let missingNum = -(nums[a] + nums[b])
//             // console.log("MISSING NUM => ", missingNum);
//             if (nums.includes(missingNum) && nums.indexOf(missingNum) !== a && nums.indexOf(missingNum) !== b) {
//                 let sumZeroArr = [nums[a], nums[b], missingNum];
//                 sumZeroArr.sort();
//                 sumZeroArrString = JSON.stringify(sumZeroArr);
//                 if (!sumZeroSet.has(sumZeroArrString)) sumZeroSet.add(sumZeroArrString);
//             }
//         }
//     }
//     arrOfArrs = Array.from(sumZeroSet).map(arr => JSON.parse(arr));
//     return arrOfArrs;  
// }

//This approach passes
const threeSum = nums => {
  let i, j, k, firstN, secondN, thirdN, sols = 0, sol = [], len = nums.length
  nums.sort((a,b) => a-b)
  
  // parse first value candidates
  i = 0
  while (firstN = nums[i], firstN !== undefined) {  
    
    // parse second value candidates from i + 1 to k
    j = i + 1
    // parse third value candidates from end to j + 1  
    k = len - 1     
    while (secondN = nums[j], thirdN = nums[k], k > j) {      
          
      // solution is found
      if (firstN + secondN + thirdN === 0) {
        sol[sols++] = [firstN, secondN, thirdN]       
      }        

      // if third number too low, no point reducing thirdN further
      // but if it's too large, can reduce k to reduce thirdN
      if (firstN + secondN + thirdN > 0) {
        // decrease k until new unique value is found
        while (nums[--k] === thirdN && k > j);        
      } else {      
        // increase j until new unique value is found
        while (nums[++j] === secondN && k > j);
      }
    }  
    
    // increase i until new unique value is found
    while (nums[++i] === firstN); 
  }
  return sol
}

let testArr = [-1, 0, 1, 2, -1, -4];

console.log(threeSum(testArr));

//Input: an array of n numbers
//Output: an array of arrays, each array containing 3 integers that add up to zero
//Conditions: 
// 1) All unique triplets 
// 2) Solution must not contain duplicate tiplets 
//Tools: iteration, maybe use a set for unique entries 
//Strategy: BRUTE FORCE - triple for loop.
// 1) If the three numbers add up to 0, push into sumZero array
// 2) sort the array
// 3) if sumZerosSet does not have has sumZero array, add sumZero array to sumZeroSet
// *Could do the same with 2 for loops

// Ex. [-1, 0, 1, 2, -1, -4]
// [[-1, 0, 1], [0, 1, -1], []