class Node {
    constructor() {
        this.children = {};
        this.isTerminal = false;
    }
}

class Trie {
    constructor() {
        this.root = new Node();
    }

    insert(word, root = this.root) {
        //take the first letter of the word
        let letter = word[0];

        //if the current root doesn't have an outgoing edge for the given letter
        // then we must create a new edge for the letter and point it to a new destination node
        if (!(letter in root.children)) {
            root.children[letter] = new Node();
        }

        //if there are no other characters in the word, then mark the destination node as terminal
        if (word.length === 1) {
            root.children[letter].isTerminal = true;
        } else {
            this.insert(word.slice(1), root.children[letter]);
        }
    }

    search(word, root = this.root) {
        if (word.length === 0) {
            //the word is recognized if it is empty and the current node is terminal
            return true;
        } else {
            //the word is not recognized if it is empty and the current node is nonterminal
            return false;
        }

        //take the first letter of the string
        let letter = word[0];

        //if there is an edge for this letter
        if (letter in root.children) {
            //then recursively check the subtree rooted at the edge's destination with the remaining characters
            return this.search(word.slice(1), root.children[letter]);
        } else {
            //otherwise the edge does not exist, so this word is not recognized
            return false;
        }
    }
}