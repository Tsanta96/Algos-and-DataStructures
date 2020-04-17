// Given two strings s and t , write a function to determine if t is an anagram of s.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false
// Note:
// You may assume the string contains only lowercase alphabets.

// Follow up:
// What if the inputs contain unicode characters? How would you adapt your solution to such case?

//WATCH OUT FOR THE EXPLICIT AND IMPLICIT RETURNS!!!!!
var isAnagram = function (s, t) {
    if (s.length !== t.length) return false;
    sHash = {};
    tHash = {};

    for (let i = 0; i < s.length; i++) {
        sHash[s[i]] = sHash[s[i]] ? sHash[s[i]] + 1 : 1;
        tHash[t[i]] = tHash[t[i]] ? tHash[t[i]] + 1 : 1;
    }

    for (let i = 0; i < s.length; i++) {
        if (sHash[s[i]] !== tHash[s[i]]) return false;
    }
    return true;
};

console.log(isAnagram("aacc", "ccac"))