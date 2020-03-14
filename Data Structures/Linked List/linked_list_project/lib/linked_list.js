// ============================================================================
// Implementation Exercise: Singly Linked List
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Singly Linked List and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Linked List reading!
//
// -----------
// Let's Code!
// -----------

class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    addToTail(val) {
    }

    removeTail() {
    }

    addToHead(val) {
    }

    removeHead() {
    }

    contains(target) {
    }

    get(index) {
    }

    set(index, val) {
    }

    insert(index, val) {
    }

    remove(index) {
    }

    size() {
    }
}

exports.Node = Node;
exports.LinkedList = LinkedList;