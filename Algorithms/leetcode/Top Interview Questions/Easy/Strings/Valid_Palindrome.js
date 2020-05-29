// Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

// Note: For the purpose of this problem, we define empty string as valid palindrome.

// Example 1:

// Input: "A man, a plan, a canal: Panama"
// Output: true
// Example 2:

// Input: "race a car"
// Output: false

var isPalindrome = function (s) {
    if (s.length === 0) return true;

    let alphNums = "abcdefghijklmnopqrstuvwxyz0123456789"
    let palArr = [];

    let lowCaseStr = s.toLowerCase();

    for (let i = 0; i < s.length; i++) {
        if (alphNums.includes(lowCaseStr[i])) {
            palArr.push(lowCaseStr[i]);
        }
    }
    return palArr.join('') === palArr.reverse().join('');
};
//lowercase
//remove non alphanumeric characters
//remove spaces


console.log(isPalindrome("race a car"));
