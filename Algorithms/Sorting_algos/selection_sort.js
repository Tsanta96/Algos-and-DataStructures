//Time Complexity = O(n^2)
//Space Complexity = O(1)

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[minIndex] > arr[j]) {
                minIndex = j;
            }
        }
        swap(arr, i, minIndex);
    }

    return arr;
}

function findMinIndex(arr) {
    const smallest = Math.min(...arr);
    return arr.indexOf(smallest);
}

function swap(arr, idx1, idx2) {
    const temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}

console.log(selectionSort([6, 2, 7, 3, 9, 4]));