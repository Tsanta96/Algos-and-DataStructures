// Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

// For example:
// Given binary tree [3,9,20,null,null,15,7],
//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its level order traversal as:
// [
//   [3],
//   [9,20],
//   [15,7]
// ]

//iterative
var levelOrder = (root) => {
    if (!root) return [];
    let lOArr = [];
    let queue = [root];
    while (queue.length) {
        let queueLength = queue.length;
        let rowArr = [];
        for (i in queue) {
            rowArr.push(queue[i].val);
            !queue[i].left ? null : queue.push(queue[i].left);
            !queue[i].right ? null : queue.push(queue[i].right);
        }
        // console.log("rowArr -> ", rowArr);
        lOArr.push(rowArr);
        console.log("lOArr -> ", lOArr);
        queue = queue.slice(queueLength);
    }
    return lOArr;
}

//add elements from queue into rowArr 
//fill queue with rowArr children
//remove original queue elements
//return LOArr

// let testArr = [3, 9, 20, null, null, 15, 7];

// console.log(levelOrder(testArr));