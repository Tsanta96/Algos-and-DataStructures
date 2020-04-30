// Say you have an array for which the ith element is the price of a given stock on day i.

// If you were only permitted to complete at most one transaction (i.e., buy one and 
//     sell one share of the stock), design an algorithm to find the maximum profit.

// Note that you cannot sell a stock before you buy one.

// Example 1:

// Input: [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
//              Not 7-1 = 6, as selling price needs to be larger than buying price.
// Example 2:

// Input: [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transaction is done, i.e. max profit = 0.

//Buy and sell multiple times
// var maxProfit = function (prices) {
//     if (prices.length === 0) return 0;
//     if (prices.length === 1) return prices[0];
//     let valley = 0;
//     let peak = 0;
//     let diff = 0;
//     let maxProfit = 0;
//     for (let i = 0; i < prices.length - 1; i++) {
//         if (prices[i+1] > prices[i]) {
//             valley = Math.min(prices[i]);
//             peak = prices[i+1];
//             diff = peak - valley;
//         } else if (prices[i+1] < prices[i]) {
//             valley = prices[i+1];
//             peak = prices[i];
//             diff = 0;
//         }
//         if (diff > 0) {
//             maxProfit += diff;
//         }
//     }
//     return maxProfit;
// };

var maxProfit = function (prices) {
    let minPrice = Math.max(...prices);
    let maxProfit = 0;
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        } else if (prices[i] - minPrice > maxProfit) {
            maxProfit = prices[i] - minPrice;
        }
    }
    return maxProfit;
};

let testArr = [7, 1, 5, 3, 6, 4];

console.log(maxProfit(testArr));