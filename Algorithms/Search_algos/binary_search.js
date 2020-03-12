//Find if target exists in array
function binarySearch(arr, target) {
    if (!arr.length) return false;

    const midIdx = Math.floor(arr.length / 2);
    if (arr[midIdx] > target) {
        return binarySearch(arr.slice(0, midIdx), target);
    } else if (arr[midIdx] < target) {
        return binarySearch(arr.slice(midIdx+1), target);
    } else {
        return true;
    }
}

//Find index of target
function binarySearchIndex(arr, target) {
    if (!arr.length) return -1;

    const midIdx = Math.floor(arr.length / 2);
    if (arr[midIdx] > target) {
        return binarySearchIndex(arr.slice(0, midIdx), target);
    } else if (arr[midIdx] < target) {
        const subResult = binarySearchIndex(arr.slice(midIdx+1), target);
        return subResult === -1 ? -1 : midIdx + subResult + 1;
    } else {
        return midIdx;
    }
}

let arr = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
console.log(binarySearchIndex(arr, 11));

