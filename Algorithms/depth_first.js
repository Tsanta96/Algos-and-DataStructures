function depthFirstSearch(node) {
    let stack = [ root ];

    while (stack.length) {
        let node = stack.pop();

        while (stack.length) {
            let node = stack.pop();

            console.log(node.val);
            if (node.right) stack.push(node.right);
            if (node.left) stack.push(node.left); 
        }
    }
}

function depthFirstRec(node) {
    if (!root) return;

    console.log(root.val);
    depthFirstRec(root.left);
    depthFirstRec(root.right);
}

function breadthFirst(node) {
    let queue = [root];

    while (queue.length) {
        let node = queue.shift();

        while (queue.length) {
            let node = queue.pop();

            console.log(node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
    }
}