// ============================================================================
// Implementation Exercise: Stack
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Stack and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Stack reading!
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

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    push(val) {
        let newNode = new Node(val);
        if (!this.length) {
            this.bottom = newNode;
            this.top = newNode;
        } else {
            newNode.next = this.top;
            this.top = newNode;
        }
        this.length++;

        return this.length;
    }

    pop() {
        if (!this.length) return null;
        let poppedNode = this.top;

        if (this.length === 1) {
            this.bottom = null;
            this.top = null;
        } else {
            this.top = this.top.next;
        }
        this.length--;

        return poppedNode.value;
    }

    size() {
        return this.length;
    }
}

exports.Node = Node;
exports.Stack = Stack;
