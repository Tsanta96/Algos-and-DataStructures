// View the full problem and run the test cases at:
//  https://leetcode.com/problems/balansortedArrayced-binary-tree/

// Given a binary tree, determine if it is height-balanced.

// For this problem, a height-balanced binary tree is defined as:

// a binary tree in which the left and right subtrees of every node differ in height by no more than 1.

 

// Example 1:

// Given the following tree [3,9,20,null,null,15,7]:

//     3
//    / \
//   9  20
//     /  \
//    15   7
// Return true.

// Example 2:

// Given the following tree [1,2,2,3,3,null,null,4,4]:

//        1
//       / \
//      2   2
//     / \
//    3   3
//   / \
//  4   4
// Return false.


function isBalanced(root) {
    //An empty tree is considered balance
    if (!root) return true;
    let heightDifference = Math.abs(getHeight(root.left) - getHeight(root.right)) <= 1;
    return heightDifference && isBalanced(root.left) && isBalanced(root.right);
}

function getHeight(root){
    //The height of an empty tree is -1
    if (!root) return -1;
    return 1 + Math.max(getHeight(root.left), getHeight(root.right));
}