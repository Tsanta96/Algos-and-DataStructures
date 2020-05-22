// Given a string containing just the characters '(', ')', '{', '}', 
// '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Note that an empty string is also considered valid.

// Example 1:

// Input: "()"
// Output: true
// Example 2:

// Input: "()[]{}"
// Output: true
// Example 3:

// Input: "(]"
// Output: false
// Example 4:

// Input: "([)]"
// Output: false
// Example 5:

// Input: "{[]}"
// Output: true

var isValid = function(s) {
    const parens = {
        "(" : ")",
        "[" : "]",
        "{" : "}"
    }

    let parensStack = [];

    for (let i = 0; i < s.length; i++) {
        if (Object.keys(parens).includes(s[i])) {
            parensStack.push(s[i]);
        }

        if (Object.values(parens).includes(s[i])) {
            let lastEl = parensStack.pop()
            if (parens[lastEl] !== s[i]) return false;
        }
    }
    return parensStack.length === 0;
}

//Alternative similar way
// var isValid = function (s) {
//     let parenQueue = [];
//     let pairs = {
//         '(': ')',
//         '[': ']',
//         '{': '}'
//     }

//     for (let i = 0; i < s.length; i++) {
//         var char = s[i];

//         if (pairs[char]) parenQueue.push(char);
//         if (char === ')' || char === ']' || char === '}') {
//             if (pairs[parenQueue.pop()] !== char) {
//                 return false;
//             }
//         }
//     }

//     return parenQueue.length === 0;
// };

console.log(isValid("["))