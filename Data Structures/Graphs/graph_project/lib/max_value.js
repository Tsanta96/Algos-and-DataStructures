//Iterative solution using BFS
// function maxValue(node, visited=new Set()) {
//     let maxVal = 0;
//     let queue = [node];
//     while (queue.length) {
//         let node = queue.shift();

//         if (visited.has(node.val)) continue;
//         visited.add(node.val);
        
//         if (node.val > maxVal) maxVal = node.val;
//         node.neighbors.forEach(neighbor => {
//             queue.push(neighbor);
//         })
//     }

//     return maxVal;
// }

//Recursive solution using DFS
function maxValue(node, visited = new Set(), max=0) {
    if (visited.has(node)) return -Infinity;
    visited.add(node);
    //Throughout recursive steps visited is adding nodes
    let neighborMaxes = node.neighbors.map(neighbor => maxValue(neighbor, visited));
    return Math.max(node.val, ...neighborMaxes);
}

module.exports = {
    maxValue
};