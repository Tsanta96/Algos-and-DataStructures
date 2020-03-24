function treeSum(root) {
    if (!root) return 0;

    let treeSum = 0;
    let queue = [root];
    while (queue.length) {
        let node = queue.pop();
        treeSum += node.val;
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    }
    return treeSum;
}


module.exports = {
    treeSum
};