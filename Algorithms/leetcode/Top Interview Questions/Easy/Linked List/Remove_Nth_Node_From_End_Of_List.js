// Given a linked list, remove the n-th node from the end of list and return its head.

// Example:

// Given linked list: 1->2->3->4->5, and n = 2.

// After removing the second node from the end, the linked list becomes 1->2->3->5.
// Note:

// Given n will always be valid.

// Follow up:

// Could you do this in one pass?

//Double pass approach
var removeNthFromEnd = function (head, n) {
    //create a dummy node at beginning of linked list
    let dummy = new ListNode(0);
    //link dummy to linkedlist head
    dummy.next = head;
    let length = 0;
    //use variable first so as to not alter the head of the original linked list
    let first = head;
    //find the length of the linked list
    while (first !== null) {
        length++;
        first = first.next;
    }
    //find the element to be deleted
    length -= n;
    //reassign first to the beginning of the linkedlist
    first = dummy;
    //iterate up to the node right before the node to be removed
    //so in scenario ([4,1,5,6,9], 2), we itrate up to node with val 1
    while (length > 0) {
        length--;
        first = first.next;
    }
    //first = 5 so we set 5's next pointer to 9
    first.next = first.next.next;
    //return the linked list
    return dummy.next;
};

//Single pass approach
var removeNthFromEnd = function (head, n) {
    let dummy = new ListNode(0);
    dummy.next = head;
    let first = dummy;
    let second = dummy;
    // Advances first pointer so that the gap between first and second is n nodes apart
    for (let i = 1; i <= n + 1; i++) {
        first = first.next;
    }
    // Move first to the end, maintaining the gap
    while (first != null) {
        first = first.next;
        second = second.next;
    }
    second.next = second.next.next;
    return dummy.next;
};

// [1, 2, 3, 4, 5] null
// 2


//iterate through entire linked list
//set a var = current node in iteration - n
//when we hit the end of the list we remove the node that the var is pointing to

//input = the linkedList (head) and the nth element to delete from the linked list
//output the linkedList with the removed element

//Strategy (two-pass)
//1) iterate through linked list and have a counter increment for each element. This will grab the length.
//2) increment up to length - n of linkedList and remove that element

//Strategy (single-pass)
//1) 
