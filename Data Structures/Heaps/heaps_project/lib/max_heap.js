class MaxHeap {
    constructor() {
        this.array = [null];
    }

    getParent(idx) {
        return Math.floor(idx / 2);
    }

    getLeftChild(idx) {
        return idx * 2;
    } 

    getRightChild(idx) {
        return idx * 2 + 1;
    }

    insert(val) {
        this.array.push(val);

        this.siftUp(this.array.length-1);
    }

    siftUp(idx) {
        if (idx === 1) return;

        const parentIdx = this.getParent(idx);

        if (this.array[idx] > this.array[parentIdx]) {
            [ this.array[idx], this.array[parentIdx] ] = [ this.array[parentIdx], this.array[idx] ]
        }

        this.siftUp(parentIdx);
    }

    deleteMax() {
        if (this.array.length === 1) return null;
        if (this.array.length === 2) return this.array.pop();

        const max = this.array[1];
        this.array[1] = this.array.pop();
        this.siftDown(1);

        return max;
    }

    siftDown(idx) {
        let arr = this.array;
        let leftIdx = this.getLeftChild(idx);
        let rightIdx = this.getRightChild(idx);
        let leftVal = arr[leftIdx];
        let rightVal = arr[rightIdx];

        //if the node is missing children, consider the missing children as the value -Infinity
        //this allows the node to keep heap property, since any value is greater than -Infinity
        //this will also give us children values to compare later, undefined should not be used for comparison**
        if (leftVal === undefined) leftVal = -Infinity;
        if (rightVal === undefined) rightVal = -Infinity;

        //if the node is bigger than both children, we have restored heap property, so exit
        if (arr[idx] > leftVal && arr[idx] > rightVal) return;

        //otherwise the node is bigger than one of it's children,
        //so swap this node with the bigger between the two children**
        if (leftVal < rightVal) {
            var swapIdx = rightIdx;
        } else {
            var swapIdx = leftIdx;
        }
        [ arr[idx], arr[swapIdx] ] = [ arr[swapIdx], arr[idx] ]

        // and continue to sift it down recursively
        this.siftDown(swapIdx);
    }
}

module.exports = {
    MaxHeap
};