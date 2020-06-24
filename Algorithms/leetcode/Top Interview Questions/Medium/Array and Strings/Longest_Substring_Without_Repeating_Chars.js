// Given a string, find the length of the longest substring without repeating characters.

// Example 1:

// Input: "abcabcbb"
// Output: 3 
// Explanation: The answer is "abc", with the length of 3. 
// Example 2:

// Input: "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3. 
//              Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

var lengthOfLongestSubstring = function(s) {
    let subStrQ = []
    let subsCount = 0;

    for (let i = 0; i < s.length; i++) {
        if (!subStrQ.includes(s[i])) {
            subStrQ.push(s[i])
            subsCount = Math.max(subStrQ.length, subsCount);
        } else {
            subStrQ = subStrQ.slice(subStrQ.indexOf(s[i]) + 1);
            subStrQ.push(s[i])
        }
    }

    return subsCount;
}

let str = "dvdf"
// let str = "pwwkew"

console.log(lengthOfLongestSubstring(str));

//Input: string
//Output: Number representing the length of the longest substring w/o repeacting chars
//Tools: Moving Window algo
//Strategy:
//1) Initialize a top level count
//2) Initialize a queue to keep track of unique chars
//3) check if char exists in queue, if so, slice the queue up to that point and clear the queue then add the most recent char, if not, push the char.
//4) grab the max value between the queue length and the previous max amount
//5) return the count 
