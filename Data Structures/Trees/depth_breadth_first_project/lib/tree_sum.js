//bfs approach
// function treeSum(root) {
//     if (!root) return 0;

//     let treeSum = 0;
//     let queue = [root];
//     while (queue.length) {
//         let node = queue.shift();
//         treeSum += node.val;
//         if (node.left) queue.push(node.left);
//         if (node.right) queue.push(node.right);
//     }
//     return treeSum;
// }

//dfs iterative approach
// function treeSum(root) {
//     if (!root) return 0;

//     let treeSum = 0;
//     let stack = [ root ];
//     while (stack.length) {
//         let node = stack.pop();
//         treeSum += node.val;
//         if (node.right) stack.push(node.right);
//         if (node.left) stack.push(node.left);
//     }   
//     return treeSum;
// }


//dfs recursive approach
function treeSum(root) {
    if (!root) return 0;

    let sum = 0;
    sum += root.val;
    sum += treeSum(root.left); 
    sum += treeSum(root.right); 

    return sum; 
}


module.exports = {
    treeSum
};