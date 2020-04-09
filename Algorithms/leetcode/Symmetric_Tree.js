// Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

// For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

//     1
//    / \
//   2   2
//  / \ / \
// 3  4 4  3
 

// But the following [1,2,2,null,3,null,3] is not:

//     1
//    / \
//   2   2
//    \   \
//    3    3
 

// Follow up: Solve it both recursively and iteratively.

//recursively
function isSymmetric(root) {
    return isMirror(root, root);
};

function isMirror(leftRoot, rightRoot) {
    if (leftRoot == null && rightRoot == null) return true;
    //if passed the above condition than both roots won't be equal
    if (leftRoot == null || rightRoot == null) return false;

    return (leftRoot.val == rightRoot.val) 
        && isMirror(leftRoot.right, rightRoot.left) 
        && isMirror(leftRoot.left, rightRoot.right);
};

//Time Complexity = O(n) b/c we traverse the entire input tree once, n is the number of nodes
//Space Complexit = O(n) worst case because n is the number of recursive calls where n is the height of the tree

//iteratively
function isSymmetric(root) {
    let queue = [];
    queue.push(root);
    queue.push(root);
    while (!queue) {
        let node1 = queue.shift();
        let node2 = queue.shift();
        if (node1 == null && node2 == null) continue;
        if (node1 == null || node2 == null) return false;
        if (node1.val !== node2.val) return false;
        queue.push(node1.left);
        queue.push(node2.right);
        queue.push(node1.right);
        queue.push(node2.left);
    }
    return true;
}

//Time Complexity = O(n) b/c we traverse the entire input tree once
//Space Complexity = O(n) where n is the amount of items in the queue.


