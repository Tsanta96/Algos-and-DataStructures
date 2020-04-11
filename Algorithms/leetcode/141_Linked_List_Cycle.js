// Given a linked list, determine if it has a cycle in it.

// To represent a cycle in the given linked list, we use an integer pos which 
// represents the position(0 - indexed) in the linked list where tail connects to.
// If pos is - 1, then there is no cycle in the linked list.


function ListNode(val) {
    this.val = val;
    this.next = null;
}
 
//inefficient solution
var hasCycle = function (head) {
    if (!head) return false;
    let listHash = new Set()

    while (head !== null) {
        if (listHash.has(head)) {
            return true
        } else {
            listHash.add(head);
            if (head.next === null) {       
                return false
            } else {
                head = head.next;
            }
        }
    }
};


//faster solution
var hasCycle = function(head) {
    if ((!head) || (!head.next)) return false;

    let slow = head
    let fast = head
    while(fast) {
        if (!fast.next) {
            return false;
        } else {
            fast = fast.next.next;
            slow = slow.next;
        }
        if (slow === fast) {
            return true;
        }
    }
    return false;
}