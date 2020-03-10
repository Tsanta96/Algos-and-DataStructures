//Given a graph with weighted edges and a source node, calculate the shortest path between that source and all other nodes in the graph.
//Runtime of O(n^2) 
//  n is the number of nodes in the graph
// the helper call is nested in the while loop = n^2

function dijkstras(graph, source) {
    let distance = {};
    // Initialize all nodes to be infinity distance away from the source
    for (let node in graph) {
        distance[node] = Infinity;
    }
    //The source is zero distance away from itself
    distance[source] = 0;

    //initialize all nodes to be unvisited
    let unvisited = new Set(Object.keys[graph]);
    //prepare an object to track the optimal paths
    let previous = {};

    //while some nodes are still unvisited
    while (unvisited.size > 0) {
        //find the closest unvisited node
        let currNode = minDistanceNode(unvisited, distance);
        //and mark it as visited
        unvisited.delete(currNode);

        //consider all neighbors of the current node
        for (let neighbor in graph[currNode]) {
            //calculate the total distance of the neighbor
            //if we travel through the current node to get to that neighbor
            let distanceFromCurrToNeighbor = graph[currNode][neighbor];
            let totalNeighborDistance = distance[currNode] + distanceFromCurrToNeighbor;

            //if the total distance is better than the old distance we calculated for the neighbor,
            if (distance[neighbor] > totalNeighborDistance) {
                // then replace it
                distance[neighbor] = totalNeighborDistance;
                // and now we say that the optimal path has 'currNode' followed by 'neighbor'
                previous[neighbor] = currNode;
            }
        }
    }

    return { distance, previous };

}

//this helper function will find the unvisited nodes with the smallest distance
function minDistanceNode(nodes, distance) {
    return Array.from(nodes).reduce((minNode, node) => (
        distance[node] < distance[minNode] ? node : minNode
    ));
}




//FULL CODE FOR REFERENCE:
function dijkstras(graph, source) {
    let distance = {};
    for (let node in graph) {
        distance[node] = Infinity;
    }
    distance[source] = 0;

    let unvisited = new Set(Object.keys(graph));
    let previous = {};

    while (unvisited.size > 0) {
        let currNode = minDistanceNode(unvisited, distance);
        unvisited.delete(currNode);

        for (let neighbor in graph[currNode]) {
            let distanceFromCurrToNeighbor = graph[currNode][neighbor];
            let totalNeighborDistance = distance[currNode] + distanceFromCurrToNeighbor;

            if (distance[neighbor] > totalNeighborDistance) {
                distance[neighbor] = totalNeighborDistance;
                previous[neighbor] = currNode;
            }
        }
    }

    return {
        distance,
        previous
    };
}

function minDistanceNode(nodes, distance) {
    return Array.from(nodes).reduce((minNode, node) => (
        distance[node] < distance[minNode] ? node : minNode
    ));
}

let graph = {
    'a': {
        'c': 1,
        'b': 7
    },
    'b': {
        'a': 7,
        'd': 12,
        'e': 13
    },
    'c': {
        'a': 1,
        'd': 20,
        'f': 4
    },
    'd': {
        'b': 12,
        'c': 20,
        'e': 5
    },
    'e': {
        'b': 13,
        'd': 5,
        'f': 9
    },
    'f': {
        'c': 4,
        'e': 9
    }
};

let {
    distance,
    previous
} = dijkstras(graph, 'a');

console.log(distance);
console.log(previous);