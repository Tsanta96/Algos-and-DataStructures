//Time complexity = O(nlog(n))
//Space Complexity = O(n)

function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    const midIdx = Math.floor(arr.length / 2);
    const sortedLeft = mergeSort(arr.slice(0, midIdx));
    const sortedRight = mergeSort(arr.slice(midIdx));

    return merge(sortedLeft, sortedRight);
}

function merge(arr1, arr2) {
    let merged = [];
    
    while (arr1.length || arr2.length) {

        let ele1 = arr1.length ? arr1[0] : Infinity
        let ele2 = arr2.length ? arr2[0] : Infinity

        let next;

        if (ele1 < ele2) {
            next = arr1.shift();
        } else {
            next = arr2.shift();
        }

        merged.push(next);
    }
    // console.log(merged);
    return merged;
}

console.log(mergeSort([5, 10, 3, 1, 9]));