// Shuffle a set of numbers without duplicates.

// Example:

// // Init an array with set 1, 2, and 3.
// int[] nums = {1,2,3};
// Solution solution = new Solution(nums);

// // Shuffle the array [1,2,3] and return its result. Any permutation of [1,2,3] must equally likely to be returned.
// solution.shuffle();

// // Resets the array back to its original configuration [1,2,3].
// solution.reset();

// // Returns the random shuffling of array [1,2,3].
// solution.shuffle();

// function shuffleArr(nums) {
//     let shuffleObj = {};
//     let possibleInds = Array.from(Array(nums.length).keys());
    
//     let i = 0;
//     while (i < nums.length) {
//         let randomInd = Math.floor(Math.random()*nums.length);
//         if (possibleInds.includes(randomInd)) {
//             shuffleObj[i] = nums[randomInd];
//             i++;
//             possibleInds.splice(possibleInds.indexOf(randomInd), 1);
//         }
//     }
//     return Object.values(shuffleObj);
// }

// let nums = [4,5,6];
// console.log(shuffleArr(nums));

// let buckets = Array.from({length: 10}, () => [])

//-----

var Solution = function (nums) {
    this.original = nums;
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function () {
    return this.original;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
    let shuffle = this.original.slice(0);

    for (let i = 0; i < this.original.length; ++i) {
        const newPos = Math.floor(Math.random() * (i + 1));
        let tmp = shuffle[i];
        shuffle[i] = shuffle[newPos];
        shuffle[newPos] = tmp;
    }

    return shuffle;
};

