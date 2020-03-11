//Time Complexity = O(n + k)
//Space Complexity = O(k)

//Solution for input arrays containing only positive integers
function countingSort(arr, max) {
    const result = [];
    const counters = new Array(max + 1).fill(0);

    for (let i = 0; i < arr.length; i++) {
        counters[arr[i]]++;
    }

    for (let i = 0; i < counters.length; i++) {
        while (counters[i] > 0) {
            result.push(i);
            counters[i]--;
        }
    }

    return result;
}

// arr = [10, 7, 2, 2]
// max = 10

// counters = [0, 0, 2, 0, 0, 0, 0, 1, 0, 0, 1]
//             0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10

// results = [2, 2, 7, 10]

console.log(countingSort([7,2,10,2], 10));