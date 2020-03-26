function breadthFirstSearch(startingNode, targetVal) {
    //set up a Set to hold unique numbers (to combat cycles)
    let graphSet = new Set();
    //using a queue since BFS
    let queue = [startingNode];

    while (queue.length) {
        //grab the node in the queue
        let node = queue.shift();
        
        //check if node has been visited already, if so then continue to next iteration
        if (graphSet.has(node.val)) continue;
        //adds the node if the node has not been visited
        graphSet.add(node.val);

        //If the node is the target node then return the node
        if (node.val === targetVal) return node;

        //Iterate through the node's neighbors
        node.neighbors.forEach(neighbor => {
            queue.push(neighbor);
        })
    }
    //After all iterations if the target value is not found, return null
    return null;
}

module.exports = {
    breadthFirstSearch
};