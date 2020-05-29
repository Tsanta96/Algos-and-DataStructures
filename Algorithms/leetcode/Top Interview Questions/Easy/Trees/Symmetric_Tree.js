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

// queue= [3,4,4,3];
// rowArr = [null, null, null, null, x 2]

//iterative version
var isSymmetric = (root) => {
    let queue = [root, root]
    while (queue.length) {
        let node1 = queue.shift();
        let node2 = queue.shift();
        if (node1 == null && node2 == null) continue;
        if (node1 == null || node2 == null) return false;
        if (node1.val !== node2.val) return false;
        queue.add(node1.left);
        queue.add(node2.right);
        queue.add(node1.right);
        queue.add(node2.left);
    }
    return true;
}

//recursive version
var isSymmetric = (root) => {
    return isMirror(root, root);    
}

var isMirror = (t1, t2) => {
    if (t1 === null && t2 === null) return true;
    if (t1 === null || t2 === null) return false;
    return t1.val === t2.val && isMirror(t1.right, t2.left) && isMirror(t1.left, t2.right);
}


console.log(isSymmetric(1, 2, 2, null, 3, null, 3));

//Input is a root (tree)
//Output is boolean (T/F)
//Strategy:
//Iterative
//1) Create Queue
//2) Instert each row into the queue
//3) check if each row is the same forwards and backwards
//  If so continue
//  If not return false
// Iterate until all children of node are null