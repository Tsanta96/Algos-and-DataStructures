function breadthFirstArray(root) {
    //breadth-first uses a QUEUE ADT
    //Not recursive because we use queue not a stack
    let bfsArr = [];
    let queue = [root];
    while (queue.length) {
        let node = queue.shift();
        bfsArr.push(node.val);
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    }

    return bfsArr;
}

module.exports = {
    breadthFirstArray
};