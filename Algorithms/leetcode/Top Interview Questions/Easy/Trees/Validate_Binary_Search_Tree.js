// Given a binary tree, determine if it is a valid binary search tree (BST).

// Assume a BST is defined as follows:

// The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.
 

// Example 1:

//     2
//    / \
//   1   3

// Input: [2,1,3]
// Output: true
// Example 2:

//     5
//    / \
//   1   4
//      / \
//     3   6

// Input: [5,1,4,null,null,3,6]
// Output: false
// Explanation: The root node's value is 5 but its right child's value is 4.

var isValidBST = function (root) {
    if (!root) {
        return true; // Sanity check for passing test case '[]'
    }

    function helper(root, min, max) {
        if (!root) {
            return true; // We hit the end of the path
        }

        if ((min !== null && root.val <= min) || (max !== null && root.val >= max)) {
            return false; // current node's val doesn't satisfy the BST rules
        }

        // Continue to scan left and right
        return helper(root.left, min, root.val) && helper(root.right, root.val, max);
    }

    return helper(root, null, null);
};

// Input = Tree
// Output = Boolean
// Tools = recursion
// Strategy: 
//1) IF root is null, return true
//2) IF root.left < root recursively call isValidBST with root
//      Else return false
//3) Do the same for if root.right is > root 