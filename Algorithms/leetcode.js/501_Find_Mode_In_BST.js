// Given a binary search tree (BST) with duplicates, find all the mode(s) (the most frequently occurred element) in the given BST.

// Assume a BST is defined as follows:

// The left subtree of a node contains only nodes with keys less than or equal to the node's key.
// The right subtree of a node contains only nodes with keys greater than or equal to the node's key.
// Both the left and right subtrees must also be binary search trees.
 

// For example:
// Given BST [1,null,2,2],

//    1
//     \
//      2
//     /
//    2
 

// return [2].

// Note: If a tree has more than one mode, you can return them in any order.

// Follow up: Could you do that without using any extra space? (Assume that the implicit stack space incurred due to recursion does not count).

var findMode = function (root) {
    //Traverse the tree, add the value of each node to an array
    //create an object that stores the values of an array and the frequency that they appear.
    //Sort that object by values (frequency) return the most frequent

    //create a Map object
    const counts = new Map();
    //set the max number of the same value.
    const max = walk(root, counts);
    //initialize an empty array
    const result = [];

    //iterate through counts with the deconstructed value and count
    for (let [value, count] of counts) {
        //if the count is equal to the max, push that value into the result
        //The pushed result means it has the same number of reoccuring elements as the max
        if (count === max) {
            result.push(value);
        }
    }

    return result;
};

const walk = (root, counts) => {
    //This helper function populates the Map() and returns the max number of 
    //reocurring elements
    if (!root) return 0;
    
    //increment count for each reoccurence of a value
    const count = counts.has(root.val) ? counts.get(root.val) + 1 : 1
    //set the the key to the root.val and the value to the count
    counts.set(root.val, count);

    //recursively call walk and eventually return the max number of reoccuring elements
    return Math.max(
        count,
        walk(root.left, counts),
        walk(root.right, counts)
    );
}

let input = [1, null, 2, 2]
console.log(findMode(input));