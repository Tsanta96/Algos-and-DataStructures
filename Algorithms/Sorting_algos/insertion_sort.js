function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let currElement = arr[i];
        for (var j = i-1; j >= 0 && arr[j] > currElement; j--) {
            arr[j+1] = arr[j];
        }
        arr[j+1] = currElement;
    }

    return arr;
}

console.log(insertionSort([12, 6, 4, 9, 7]));

