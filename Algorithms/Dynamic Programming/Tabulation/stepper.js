// Write a function, stepper(nums), that takes in an array of non negative numbers.
// Each element of the array represents the maximum number of steps you can take from that position in the array.
// The function should return a boolean indicating if it is possible to travel from the 
// first position of the array to the last position.
//
// For Example:
//
// Given [3, 1, 0, 5, 10]
//      - We begin at first position, 3. 
//      - Since the element is 3 we can take up to 3 steps from this position.
//      - This means we can step to the 1, 0, or 5
//      - Say we step to 1
//      - Since the element is 1, now the only option is to take 1 step to land on 0
//      - etc...
//
// Try to solve this in two ways, using tabulation and memoization.
//
// Examples:
//
// stepper([3, 1, 0, 5, 10]);           // => true, because we can step through elements 3 -> 5 -> 10
// stepper([3, 4, 1, 0, 10]);           // => true, because we can step through elements 3 -> 4 -> 10
// stepper([2, 3, 1, 1, 0, 4, 7, 8])    // => false, there is no way to step to the end

//iterative w/o tabulation
// function stepper(nums) {
//     for (let i = 0; i < nums.length; i++) {
//         let range = nums[i]; //2
//         let max = 0;
//         let maxIdx;
//         for (let j = i+1; j <= i + range; j++) {
//             if (j >= nums.length || nums[j] === undefined) return true;
//             if (nums[j] >= max) {
//                 max = nums[j];
//                 maxIdx = j;
//             }
//         }
//         if (max === 0) return false;
//         //-1 because of the natural incrementation of the for loop
//         i = maxIdx - 1;
//     }
//     return false;
// }

//tabulation version
// function stepper(nums) {
//     //declare table with same length as nums
//     //set first element to true
//     //iterate through each element
//     //if currEle = true then set range = value of currElement and iterate that many times setting each ele to true

//     let table = new Array(nums.length).fill(false);
//     table[0] = true;

//     for (let i = 0; i < nums.length; i++) {
//         if (table[i] === true) {
//             let range = nums[i];
//             for (let step = 1; step <= range; step++) {
//                 table[i + step] = true;
//             }
//         }
//     }

//     return table[table.length - 1];
// }

//memoization version
function stepper(nums, memo={}) {
    console.log("nums = ", nums);
    console.log("memo = ", memo);
    if (nums.length in memo) return memo[nums.length];

    if (nums.length === 1) return true;
    if (nums.length === 0) return false;

    let range = nums[0];

    for (let i = 1; i <= range; i++) {
        if (stepper(nums.slice(i), memo)) {
            memo[nums.length] = true;
            return true;
        }
    }
    console.log("nums rebound = ", nums);
    memo[nums.length] = false;
    return false;

}

//[5,10]

console.log(stepper([3, 1, 0, 5, 10]));
// console.log(stepper([3, 4, 1, 0, 10]));
// console.log(stepper([2, 3, 1, 1, 0, 4, 7, 8]));