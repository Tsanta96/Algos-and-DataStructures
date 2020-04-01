//return sum of largest 3 consecutive numbers
function slidingWindow(nums) {
    let windowTotal = 0;
    let k = 3
    for (let i = 0; i < k; i++) {
        windowTotal += nums[i];
    }

    let maxSumResult = windowTotal;
    for (let i = k; i < nums.length; i++) {
        windowTotal += nums[i] - nums[i - k]
        maxSumResult = Math.max(maxSumResult, windowTotal);
    }

    return maxSumResult;

}

let numsArr = [10, 60, 40, 90, 5, 10, 90];

console.log(slidingWindow(numsArr));