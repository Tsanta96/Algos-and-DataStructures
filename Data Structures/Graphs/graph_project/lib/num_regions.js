// function numRegions(graph) {
//     let visited = new Set();
//     let regions = 0;

//     for (node in graph) {
//         if (isNewRegion(node, graph, visited)) regions++;
//     }

//     return regions;
// }

// function isNewRegion(node, graph, visited) {
//     if (visited.has(node)) return false;

//     visited.add(node);

//     graph[node].forEach(neighbor => {
//         //checks to see if any of the neighbors of a node are already in the set 
//         //and if so, then returns false
//         isNewRegion(neighbor, graph, visited)
//     });

//     return true;
// }

function numRegions(graph) {
    //create the set
    //initialize regions to 0
    //iterate over nodes in a graph
    //helper function that checks if a region is new
    //if the helper function returns true, increment the regions counter, else return false
    //return the regions counter

    let visited = new Set();
    let regions = 0;

    for (let node in graph) {
        if (isNewRegion(node, graph, visited)) regions++;
    }

    return regions;
}

function isNewRegion(node, graph, visited) {
    if (visited.has(node)) return false;


    //Notice how this is actually adding the node to the passed in "visited"
    //set. Even though this is in a helper function it is still adding to the set and
    //the additions are persisted in the main function.
    visited.add(node);
    graph[node].forEach(neighbor => {
        isNewRegion(neighbor, graph, visited);
    })

    return true;
}

//1 2

// 'a': ['b'],
// 'b': ['a'],
// 'c': ['d'],
// 'd': ['e', 'c'],
// 'e': ['d'],

// a <-> b 
// c <-> d <-> e

module.exports = {
    numRegions
};