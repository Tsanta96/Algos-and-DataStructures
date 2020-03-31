// View the full problem and run the test cases at:
//  https://leetcode.com/problems/course-schedule/

function buildGraph(edges) {
    //example input, edges = [[1,0]]
    //create empty graph object
    let graph = {}
    edges.forEach((edge) => {
        //array destructure elements of the nested array into string forms
        let [dest, src] = edge.map(String);
        //log dest and source
        console.log("dest =", dest, "src =", src);
        if (dest in graph) {
            // map the prerequisites to the destination course
            graph[dest].push(src);
        } else {
            // if the dest is not in the graph then set source as the value to dest
            graph[dest] = [src];
        }

        //if src is not in graph then set src equal to empty array
        if (!(src in graph)) {
            graph[src] = [];
        }
    });

    return graph;
}


function canFinish(numCourses, prerequisites) {
    let graph = buildGraph(prerequisites);

    let totalCourses = Object.keys(graph).length;

    let visited = new Set();

    let eligibleNodeExists = true;
    while (eligibleNodeExists) {
        eligibleNodeExists = false;

        for (let node in graph) {
            let isEveryParentVisited = graph[node].every((parent) => visited.has(parent));
            if (!visited.has(node) && isEveryParentVisited) {
                eligibleNodeExists = true;
                visited.add(node);
            }
        }

    }
    return visited.size == totalCourses;
}
