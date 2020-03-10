const bubbleSort = (array) => {
    var sorted = false;

    while (!sorted) {
        sorted = true;
        for (let i = 0; i < array.length-1; i++) {
            if (array[i] > array[i+1]) {
                swap(array, i, i+1);
                sorted = false;
            }
        }
    }
    return array;
}

//Have to pass in the actual array to mutate it. DUH!
const swap = (array, idx1, idx2) => {
    const temp = array[idx1];
    array[idx1] = array[idx2];
    array[idx2] = temp;
}

console.log(bubbleSort([6,2,7,3,9,4]));