//Time Complexity = O(nlog(n))
//Space Complexit = (O(n))

//An in-place Quick Sort with space complexity O(log(n)) does exist

function quickSort(array, pivot = 0) {
    if (array.length <= 1) return array;

    pivot = array.shift();
    let left = array.filter(el => el < pivot);
    let right = array.filter(el => el > pivot);

    let leftSorted = quickSort(left, pivot);
    let rightSorted = quickSort(right, pivot);

    let newArr = [...leftSorted, pivot, ...rightSorted];

    return newArr;
}

let arr = [7, 3, 8, 9, 2];
console.log(quickSort(arr)); // => [[3, 2], [7,8,9]]

// function partition(array, pivot) {
//     let left = [];
//     let right = [];

//     array.forEach(el => {
//         if (el < pivot){
//             left.push(el)
//         } else {
//             right.push(el);
//         }
//     })

//     return [left, right];
// }

// //if you fancy
// function partition(array, pivot) {
//     let left = array.filter(el => el < pivot);
//     let right = array.filter(el => el >= pivot);
//     return [left, right];
// }