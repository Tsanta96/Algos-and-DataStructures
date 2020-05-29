// Given a non-negative integer numRows, 
// generate the first numRows of Pascal's triangle.


// In Pascal's triangle, each number is 
// the sum of the two numbers directly above it.

// Example:

// Input: 5
// Output:
// [
//      [1],
//     [1,1],
//    [1,2,1],
//   [1,3,3,1],
//  [1,4,6,4,1]
// ]

// [
// [1],
// [1,1],
// [1,2,1],
// [1,3,3,1],
// [1,4,6,4,1],
// [1,5,10,10,5,1],
// ]

//Iterative way
var generate = function(numRows) {
    let pyr = [[1]];
    for (let i = 1; i < numRows; i++) {
        let row = [];
        for (let j = 0; j <= i; j++) {
            if (j === 0) {
                row.push(pyr[i-1][0]);
            } else if (j === i) {
                row.push(pyr[i-1][j-1])
            } else {
                row.push(pyr[i-1][j] + pyr[i-1][j-1]);
            }
        }
        pyr.push(row);
    }
    return pyr;
};

//Alternative Approach
// var generate = function (numRows) {
//     if (!numRows) return [];

//     const result = [
//         [1]
//     ];
//     let d = 0;
//     let j = 0;

//     for (let i = 1; i < numRows; i++) {
//         let row = [1];

//         while (j + 1 < result[d].length) {
//             row.push(result[d][j] + result[d][j + 1]);
//             j++;
//         }

//         row.push(1);
//         result.push(row);
//         j = 0;
//         d++;
//     }

//     return result;
// };


console.log(generate(5));

//first element of new row is always equal to the first element from the row above
//last element of new row is always equal to oldRow[newRow.length-2]

