//broken
function depthFirstRecur(node) {
    console.log(node.val);

    node.neighbors.forEach(neighbor => {
        depthFirstRecur(neighbor);
    })
}

function depthFirstRecur(node, visited=new Set()) {
    // if this node has already been visited, then return early
    if (visited.has(node.val)) return;

    // otherwise it hasn't yet been visited,
    // so print it's val and mark it as visited.
    console.log(node.val);
    visited.add(node.val);

    // then explore each of its neighbors
    node.neighbors.forEach(neighbor => {
        depthFirstRecur(neighbor, visited);
    })
}