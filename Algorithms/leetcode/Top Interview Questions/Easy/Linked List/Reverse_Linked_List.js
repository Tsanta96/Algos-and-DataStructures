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
    while (curr !== null) {
        let nextTemp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextTemp;
    }
    return prev;
};
//Approach: While you are traversing the list, change the current node's next pointer to point to its previous element. 
//since a node does not have reference to its previous node (singly linked list), you must store its previous element beforehand.
//You also need another pointer to store the next node before changing the reference. Do not forget to return the new head
//reference at the end.

//recursive
function reverseList(head) {
    if (head === null || head.next === null) return head;
    let p = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return p;
}
// Approach: The recursive version is slightly trickier and the key is to work 
// backwards.Assume that the rest of the list had already been reversed, now how do 
// I reverse the front part ? Let 's assume the list is: n1 → … → nk-1 → nk → nk+1 → … → nm → Ø

// Assume from node nk + 1 to nm had been reversed and you are at node nk.

// n1→…→ nk - 1→ nk→ nk + 1←…← nm

// We want nk + 1’ s next node to point to nk.

// So,

// nk.next.next = nk;

// Be very careful that n1 's next must point to Ø. If you forget about this, your 
// linked list has a cycle in it. This bug could be caught if you test your code with a linked list of size 2.


//naive approach:
//iterate through linkedlist and shifting each node into a new linked list to be returned


