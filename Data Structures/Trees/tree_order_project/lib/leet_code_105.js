// View the full problem and run the test cases at:
//  https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

// Given preorder and inorder traversal of a tree, construct the binary tree.
// *preorder = (self, left, right)
// *inorder = (left, self, right)

// Note:
// You may assume that duplicates do not exist in the tree.

// For example, given

// preorder = [3,9,20,15,7]
// inorder = [9,3,15,20,7]
// Return the following binary tree:

//     3
//    / \
//   9  20
//     /  \
//    15   7

const {
    TreeNode
} = require('./tree_node.js');


function buildTree(preorder, inorder) {
    //preorder and inorder must have the same length and contain the same elements
    if (!preorder.length || !inorder.length) return null;

    let root = new TreeNode(preorder[0]);
    let rootIdx = inorder.indexOf(root);

    let leftInorder = inorder.slice(0, rootIdx);
    let rightInorder = inorder.slice(rootIdx + 1);

    let leftPreorder = preorder.filter(val => leftInorder.include(val));
    let rightPreorder = preorder.filter(val =>  rightInorder.include(val));

    root.left = buildTree(leftPreorder, leftInorder);
    root.right = buildTree(rightPreorder, rightInorder);

    return root;
}
