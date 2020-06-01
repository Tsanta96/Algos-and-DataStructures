// Given a m x n matrix, if an element is 0, set its entire row and column to 0. Do it in-place.

// Example 1:

// Input: 
// [
//   [1,1,1],
//   [1,0,1],
//   [1,1,1]
// ]
// Output: 
// [
//   [1,0,1],
//   [0,0,0],
//   [1,0,1]
// ]
// Example 2:

// Input: 
// [
//   [0,1,2,0],
//   [3,4,5,2],
//   [1,3,1,5]
// ]
// Output: 
// [
//   [0,0,0,0],
//   [0,4,5,0],
//   [0,3,1,0]
// ]
// Follow up:

// A straight forward solution using O(mn) space is probably a bad idea.
// A simple improvement uses O(m + n) space, but still not the best solution.
// Could you devise a constant space solution?


//Time Complexity = O(n * m)
// var setZeroes = function (matrix) {
//     let rowLength = matrix.length, 
//         colLength = matrix[0].length;
//     let zeroCoords = [];

//     for (let i = 0; i < rowLength; i++) {
//         for (let j = 0; j < colLength; j++) {
//             if (matrix[i][j] === 0) {
//                 zeroCoords.push([i, j]);
//             }
//         }
//     }

//      //Horizontal
//     for (let i = 0; i < zeroCoords.length; i++) {
//         matrix[zeroCoords[i][0]].fill(0);
//         //Vertical
//         for (let j = 0; j < rowLength; j++) {
//             matrix[j][zeroCoords[i][1]] = 0;
//         }
//     }
//     return matrix;
// };

//Alternative Solution
var setZeroes = function (matrix) {
    let col0 = 1,
        row = matrix.length,
        col = matrix[0].length;

    for (let i = 0; i < row; i++) {
        if (matrix[i][0] === 0) col0 = 0;
        for (let j = 1; j < col; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][0] = matrix[0][j] = 0;
            }
        }
    }

    for (let i = row - 1; i >= 0; i--) {
        for (let j = col - 1; j > 0; j--) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0) matrix[i][j] = 0;
        }
        if (col0 === 0) matrix[i][0] = 0;
    }
};

let input = [
  [0,1,2,0],
  [3,4,5,2],
  [1,3,1,5]
]

//Strategy:
// 1) run through entire matrix 
// 2) mark the spots that are zeros 
// 3) logic to convert the x's / y's of the matrix to zeros

console.log(setZeroes(input));