// Given an array of strings, group anagrams together.

// Example:

// Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
// Output:
// [
//   ["ate","eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]
// Note:

// All inputs will be in lowercase.
// The order of your output does not matter.

//Took too long? Naive approach
// var isAnagram = function(word1, word2) {
//     if (word1.length !== word2.length) return false;
//     word1Hash = {}
//     word2Hash = {}
    
//     for (let i = 0; i < word1.length; i++) {
//         word1Hash[word1[i]] = word1Hash[word1[i]] ? word1Hash[word1[i]] + 1 : 1;
//         word2Hash[word2[i]] = word2Hash[word2[i]] ? word2Hash[word2[i]] + 1 : 1;
//     }

//     for (let i = 0; i < word1.length; i++) {
//         if (word1Hash[word1[i]] !== word2Hash[word1[i]]) return false;
//     }

//     return true;
// }

// var groupAnagrams = function(strs) {
//     let anagramMatrix = [[strs[0]]];

//     for (let i = 1; i < strs.length; i++) {
//         for (let j = 0; j < anagramMatrix.length; j++) {
//             console.log("strs[i] => ", strs[i], "anagramMatrix[j][0] => ", anagramMatrix[j][0]);
//             if (isAnagram(strs[i], anagramMatrix[j][0])) {
//                 anagramMatrix[j].push(strs[i]);
//                 break;
//             } else if (j < anagramMatrix.length - 1) {
//                 continue;
//             } else {
//                 anagramMatrix.push([strs[i]]);
//                 break;
//             }
//         }
//     }

//     return anagramMatrix;
// }

//Hash map approach
var groupAnagrams = function (strs) {
    let table = new Map();

    for (let i = 0; i < strs.length; i++) {
        const currKey = [...strs[i]].sort().toString();

        if (table.has(currKey)) table.set(currKey, [...table.get(currKey), strs[i]]);
        if (!table.has(currKey)) table.set(currKey, [strs[i]]);
    }

    return [...table.values()];
};

let input = ["yup", "yup", "pup"];

console.log(groupAnagrams(input));

//Input: An array of strings
//Output: a 2d array of groups of anagrams
//strategy:
//1) Add the first element to an anagramMatrix Array
//2) Check if the following elements in the input array are anagrams of the first element
//   If yes, push into that first array,
//   If no, create a new array and add that as the first element
//3) for each word in the input array check if the first word of the anagram arrays contain the same letters as it (Make this it's own function)
