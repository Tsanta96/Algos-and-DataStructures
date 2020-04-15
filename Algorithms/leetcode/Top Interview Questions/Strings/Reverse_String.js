// Write a function that reverses a string.The input string is given as an array of characters char[].

// Do not allocate extra space for another array, you must do this by 
//  modifying the input array in -place with O(1) extra memory.

// You may assume all the characters consist of printable ascii characters.

//time complexity = O(n)
//space complexity = O(1)

var reverseString = function (s) {
    //iterate through half the array because that's all we need 
    for (let i = 0; i <= s.length/2; i++) {
        // //store last element as temp variable
        // let temp = s[s.length-1-i];
        // //set last element to first element
        // s[s.length-1-i] = s[i];
        // //set first element to temp variable which is last element
        // s[i] = temp;
        swapElements(i, s.length-1-i, s);
    }
    return s;
};

var swapElements = (idx1, idx2, arr) => {
    let temp = arr[idx2];
    arr[idx2] = arr[idx1];
    arr[idx1] = temp;
}

// var reverseString = function (s) {
//     return s.reverse();
// }

// [1,2,3,4,5,6,7]
// [7,6,5,4,3,2,1]

console.log(reverseString(["h"," ", "l","l","o"]));