// You are given an n x n 2D matrix representing an image.

// Rotate the image by 90 degrees (clockwise).

// Note:

// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

// Example 1:

// Given input matrix = 
// [
//   [1,2,3],
//   [4,5,6],
//   [7,8,9]
// ],

// rotate the input matrix in-place such that it becomes:
// [
//   [7,4,1],
//   [8,5,2],
//   [9,6,3]
// ]
// Example 2:

// Given input matrix =
// [
//   [ 5, 1, 9,11],
//   [ 2, 4, 8,10],
//   [13, 3, 6, 7],
//   [15,14,12,16]
// ], 

// rotate the input matrix in-place such that it becomes:
// [
//   [15,13, 2, 5],
//   [14, 3, 4, 1],
//   [12, 6, 8, 9],
//   [16, 7,10,11]
// ]

var rotate = function (matrix) {
    //Transpose 2D Array (Transpose is where rows are now the columns from the original matrix)
    for (let n = 0; n < matrix.length; n++) {
        for (let m = 0; m < matrix.length; m++) {
            // if numbers are the same, no need to do anything
            if (n === m) break;
            [matrix[n][m], matrix[m][n]] = [matrix[m][n], matrix[n][m]];
        }
    }
    //Reverse 2D Array
    for (let n = 0; n < matrix.length; n++) {
        matrix[n] = matrix[n].reverse();
    }
    return matrix;
};

let testArr = [
    [0,1,2],
    [3,4,5],
    [6,7,8]
]
//transposed 
// [0,3,6],
// [1,4,7],
// [2,5,8]

//reversed
// [6,3,0],
// [7,4,1],
// [8,5,2]

console.log(rotate(testArr))

// 00 01 02
// 10 11 12
// 20 21 22

// 20 10 00
// 21 11 01
// 22 12 02 

//Get algorithm by transposing and reversing


