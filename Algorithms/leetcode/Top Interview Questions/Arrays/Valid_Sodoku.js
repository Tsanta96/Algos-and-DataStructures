// Determine if a 9x9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the 9 3x3 sub-boxes of the grid must contain the digits 1-9 without repetition.

// A partially filled sudoku which is valid.

// The Sudoku board could be partially filled, where empty cells are filled with the character '.'.

// Example 1:

// Input:
// [
//   ["5","3",".",".","7",".",".",".","."],
//   ["6",".",".","1","9","5",".",".","."],
//   [".","9","8",".",".",".",".","6","."],
//   ["8",".",".",".","6",".",".",".","3"],
//   ["4",".",".","8",".","3",".",".","1"],
//   ["7",".",".",".","2",".",".",".","6"],
//   [".","6",".",".",".",".","2","8","."],
//   [".",".",".","4","1","9",".",".","5"],
//   [".",".",".",".","8",".",".","7","9"]
// ]
// Output: true
// Example 2:

// Input:
// [
//   ["8","3",".",".","7",".",".",".","."],
//   ["6",".",".","1","9","5",".",".","."],
//   [".","9","8",".",".",".",".","6","."],
//   ["8",".",".",".","6",".",".",".","3"],
//   ["4",".",".","8",".","3",".",".","1"],
//   ["7",".",".",".","2",".",".",".","6"],
//   [".","6",".",".",".",".","2","8","."],
//   [".",".",".","4","1","9",".",".","5"],
//   [".",".",".",".","8",".",".","7","9"]
// ]
// Output: false
// Explanation: Same as Example 1, except with the 5 in the top left corner being 
//     modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.
// Note:

// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.
// The given board contain only digits 1-9 and the character '.'.
// The given board size is always 9x9.

var isValidSudoku = function (board) {
    //Check for horizontal and vertical
    if (!checkVertAndHor(board)) return false;
    //Check for 3x3's
    if (!checkTbt(board)) return false;
    return true; 
};

function checkVertAndHor(board) {
    for (let i = 0; i < board.length; i++) {
        let sudSetHor = new Set();
        let sudSetVert = new Set();
        for (let j = 0; j < board[0].length; j++) {
            //Checks Horizontal 
            if (sudSetHor.has(board[i][j])) return false;
            if (board[i][j] !== ".") sudSetHor.add(board[i][j]);
            //Checks Vertical
            if (sudSetVert.has(board[j][i])) return false;
            if (board[j][i] !== ".") sudSetVert.add(board[j][i]);
        }
    }
    return true;
}

function checkTbt(board) {
    for (let x = 0; x < 9; x++) {
        let iAdd;
        let jAdd;
        //x passed in switch is an expression, expression does not go next to case
        //DON't FORGET THE BREAK STATEMENTS
        switch (x) {
            case 0:
                iAdd = 0;
                jAdd = 0;
                break;
            case 1:
                iAdd = 0;
                jAdd = 3;
                break;
            case 2:
                iAdd = 0;
                jAdd = 6;
                break;
            case 3:
                iAdd = 3;
                jAdd = 0;
                break;
            case 4:
                iAdd = 3;
                jAdd = 3;
                break;
            case 5:
                iAdd = 3;
                jAdd = 6;
                break;
            case 6:
                iAdd = 6;
                jAdd = 0;
                break;
            case 7:
                iAdd = 6;
                jAdd = 3;
                break;
            case 8:
                iAdd = 6;
                jAdd = 6;
                break;
            default:
                null;
        }

        let tbtSet = new Set();
        // console.log("Before set", tbtSet);
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                // console.log([i + iAdd],[j + jAdd], board[i + iAdd][j + jAdd]);
                if (tbtSet.has(board[i + iAdd][j + jAdd])) return false;
                if (board[i + iAdd][j + jAdd] !== ".") tbtSet.add(board[i + iAdd][j + jAdd])
            }
        }
        // console.log("After set", tbtSet);
    }
    return true;
}

let testArr = [
    [".", ".", ".", ".", ".", ".", "5", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    ["9", "3", ".", ".", "2", ".", "4", ".", "."],
    [".", ".", "7", ".", ".", ".", "3", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", "3", "4", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", "3", ".", ".", "."],
    [".", ".", ".", ".", ".", "5", "2", ".", "."]
]

//  [0,0] [0,3] [0,6]
//  [3,0] [3,3] [3,6]
//  [6,0] [6,3] [6,6]


console.log(isValidSudoku(testArr));

//Input = 2D Array
//Output = Boolean
//Edge Cases
//Tools
//Strategy
//1) Check horizontally
//2) Check vertically
//3) Check 3x3's