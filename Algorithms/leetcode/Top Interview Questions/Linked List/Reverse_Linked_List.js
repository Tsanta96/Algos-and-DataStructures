// Reverse a singly linked list.

// Example:

// Input: 1->2->3->4->5->NULL
// Output: 5->4->3->2->1->NULL
// Follow up:

// A linked list can be reversed either iteratively or recursively. Could you implement both?

//iterative
var reverseList = function (head) {
    let prev = null;
    let curr = head;
    while (curr != null) {
        let nextTemp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextTemp;
    }
    return prev;
};

//recursive
var reverseList = function (head) {
    if (head == null || head.next == null) return head;
    let p = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return p;
};
//Approach: While you are traversing the list, change the current node's next pointer to point to its previous element. 
//since a node does not have reference to its previous node (singly linked list), you must store its previous element beforehand.
//You also need another pointer to store the next node before changing the reference. Do not forget to return the new head
//reference at the end.

//naive approach:
//iterate through linkedlist and shifting each node into a new linked list to be returned

