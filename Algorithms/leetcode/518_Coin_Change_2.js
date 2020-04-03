// You are given coins of different denominations and a total amount of money. 
// Write a function to compute the number of combinations that make up that amount. 
// You may assume that you have infinite number of each kind of coin.

 

// Example 1:

// Input: amount = 5, coins = [1, 2, 5]
// Output: 4
// Explanation: there are four ways to make up the amount:
// 5=5
// 5=2+2+1
// 5=2+1+1+1
// 5=1+1+1+1+1
// Example 2:

// Input: amount = 3, coins = [2]
// Output: 0
// Explanation: the amount of 3 cannot be made up just with coins of 2.
// Example 3:

// Input: amount = 10, coins = [10] 
// Output: 1
 

// Note:

// You can assume that

// 0 <= amount <= 5000
// 1 <= coin <= 5000
// the number of coins is less than 500
// the answer is guaranteed to fit into signed 32-bit integer

var change = function (amt, coins, memo={}) {
    if (amt === 0) return 1;
    if (coins.length === 0) return 0;

    let key = `${amt}-${coins.join(',')}`;
    if (key in memo) return memo[key];

    let coinVal = coins[coins.length - 1];

    let total = 0;
    for (let quanitity = 0; quanitity <= (amt / coinVal); quanitity++) {
        total += change(amt - (quanitity * coinVal), coins.slice(0, -1), memo);
    }

    memo[key] = total;
    return total;
};  

console.log(change(5, [1,2,5]));

// amount = 5
// coins = [1,2,5]



