// Given a singly linked list, determine if it is a palindrome.

// Example 1:

// Input: 1->2
// Output: false
// Example 2:

// Input: 1->2->2->1
// Output: true
// Follow up:
// Could you do it in O(n) time and O(1) space?

//Iterative
var isPalindrome = function (head) {

    if (!head) return null;

    let prev = head,
        first = head;

    while (first.next != null) {
        first = first.next
        first.prev = prev;
        prev = prev.next;
    }

    let second = head;

    while (head.next != null && first.prev != null) {

        if (second.val != first.val) {
            return false;
        }

        second = second.next;
        first = first.prev;
    }

    return true;
};

//recursive
var isPalindrome = function (head) {
    var cur = head
    return travel(head)

    function travel(node) {
        if (!node) {
            return true
        }
        var preBoolean = travel(node.next)
        var curBoolean = cur.val === node.val
        cur = cur.next
        return preBoolean && curBoolean
    }
};

// Input -> Linked List
// Output -> boolean
// Tools -> stack
// Strategy 1) Create a reversed version of the linked list and see if it is the same
