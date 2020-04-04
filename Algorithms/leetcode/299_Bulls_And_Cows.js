//input and desired output
//steps to get to solution
//any data structure that can be used?
//time and space complexity

// You are playing the following Bulls and Cows game with your friend: You write down a number and ask your friend to guess what the number is. Each time your friend makes a guess, you provide a hint that indicates how many digits in said guess match your secret number exactly in both digit and position (called "bulls") and how many digits match the secret number but locate in the wrong position (called "cows"). Your friend will use successive guesses and hints to eventually derive the secret number.

// Write a function to return a hint according to the secret number and friend's guess, use A to indicate the bulls and B to indicate the cows. 

// Please note that both secret number and friend's guess may contain duplicate digits.

// Example 1:

// Input: secret = "1807", guess = "7810"

// Output: "1A3B"

// Explanation: 1 bull and 3 cows. The bull is 8, the cows are 0, 1 and 7.
// Example 2:

// Input: secret = "1123", guess = "0111"

// Output: "1A1B"

// Explanation: The 1st 1 in friend's guess is a bull, the 2nd or 3rd 1 is a cow.
// Note: You may assume that the secret number and your friend's guess only contain digits, and their lengths are always equal.

var getHint = function (secret, guess) {
    let bullCount = 0;
    let cowCount = 0;
    let sameCharCount = 0;

    for (let i = 0; i < secret.length; i++) {
        if (guess[i] === secret[i]) {
            guess = guess.substr(0, i) + "X" + guess.substr(i+1);
            secret = secret.substr(0, i) + "X" + secret.substr(i + 1);
            bullCount++;
        }
    }
    for (let i = 0; i < secret.length; i++) {
        if (secret.includes(guess[i]) && secret[i] !== guess[i]) {
            let guessInd = guess.indexOf(guess[i]);
            let secretInd = secret.indexOf(guess[i]);

            guess = guess.substr(0, guessInd) + "X" + guess.substr(guessInd + 1);
            secret = secret.substr(0, secretInd) + "X" + secret.substr(secretInd + 1);
            cowCount++;
        }
    }

    return `${bullCount}A${cowCount}B`;
};

const secret = "011";
const guess = "110";

// "1X23"   "XX23"
// "0X11"   "0XX1"

console.log(getHint(secret, guess));

//input = 2 strings
//output = string, A = bull B = cow

//Steps 
//1) iterate over string and check if char and index are equivalent for both input strings, if so increment bullCount
//2) iterate over string and check how many chars are included in the secret BUT NOT at the correct index and increment cowCount for each one
//3 return bullCount + "A" + cowCount + "B" in a string format

//Don't want to increment either count when a digit is repeated but it's already been accounted for
//Solution: replace the matching cow vals with X's. this way if there's a match, it converts the 
//  matching chars that arent at the same index to X's so that they don't get double counted


