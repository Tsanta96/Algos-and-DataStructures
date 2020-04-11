// Say you have an array prices for which the ith element is the price of a given 
//stock on day i.

// Design an algorithm to find the maximum profit. You may complete as many 
// transactions as you like (i.e., buy one and sell one share of the stock multiple times).

// Note: You may not engage in multiple transactions at the same time (i.e., you 
// must sell the stock before you buy again).

//Soln. 1
//Time Complexity = O(n) iterating through entire array
//Spack Complexity = O(1)

function maxProfit(prices) {
    let i = 0;
    let peak = prices[0];
    let valley = prices[0];
    let maxProfit = 0;
    while (i < prices.length - 1) {
        while (i < prices.length - 1 && prices[i] >= prices[i+1]) {
            i++;
        }
        valley = prices[i];
        while (i < prices.length - 1 && prices[i] <= prices[i+1]) {
            i++;
        }
        peak = prices[i];
        maxProfit += peak - valley;
    }
    return maxProfit;
}

//Soln. 2 Simple One Pass
//Time Complexity = O(n) iterating through entire array
//Spack Complexity = O(1)

//Strategy:
//Iterate through entire array and add up the consecutive positive differences 
//from valley to peak.

function maxProfit2(prices) {
    let maxProfit = 0;
    for (let i = 1; i < prices.length - 1; i++) {
        if (prices[i] > prices[i-1]) {
            maxProfit += prices[i] - prices[i-1];
        }
    }
    return maxProfit;
}

let inputArr = [7, 1, 5, 3, 6, 4];
// console.log(maxProfit(inputArr));
console.log(maxProfit2(inputArr));