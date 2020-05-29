// Write a function to delete a node (except the tail) in a singly linked list, given only access to that node.

// Given linked list -- head = [4,5,1,9], which looks like following:



 

// Example 1:

// Input: head = [4,5,1,9], node = 5
// Output: [4,1,9]
// Explanation: You are given the second node with value 5, the linked list should become 4 -> 1 -> 9 after calling your function.
// Example 2:

// Input: head = [4,5,1,9], node = 1
// Output: [4,5,9]
// Explanation: You are given the third node with value 1, the linked list should become 4 -> 5 -> 9 after calling your function.
 

// Note:

// The linked list will have at least two elements.
// All of the nodes' values will be unique.
// The given node will not be the tail and it will always be a valid node of the linked list.
// Do not return anything from your function.

//Time Complexity = O(1)
//Space Complexity = O(1)
var deleteNode = function (node) {
    //set the val of the current node = to the val of the following node
    node.val = node.next.val;
    //set the next pointer of the passed in node to the next pointer of the following node
    node.next = node.next.next;
};

//Since we do not have acces to the node before the one we want to delete, we cannot modify the next pointer
//of that node in any way. Instead, we have to replace the value of the node we want to delete with the value in the 
//node after ir, and then delete the node after it.