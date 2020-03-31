// you may assume that the array will always have a null element at the 0-th index
function isMaxHeap(array, idx=1) {
    //Node has to be bigger than children 
    //recursively check the left and right branches. if find a case
    // where the above statement is not true, return false
    if (array[idx] === undefined) return true;
    if (array.length === 1) return null;
    if (array.length === 2) return true;

    const leftIdx = idx * 2;
    const rightIdx = idx * 2 + 1;

    if (array[idx] < array[leftIdx] || array[idx] < array[rightIdx]) {
        return false;
    }
    return (isMaxHeap(array, leftIdx) && isMaxHeap(array, rightIdx));
}


module.exports = {
    isMaxHeap
};