var findErrorNums = function (nums) {
    let shouldBeSum = 0;
    for (let i = 1; i <= nums.length; i++) {
        shouldBeSum += i;
    }

    let actualSum = 0;
    for (let i = 0; i < nums.length; i++) {
        actualSum += nums[i];
    }

    let dupNum;
    let dupSet = new Set();
    for (let i = 0; i < nums.length; i++) {
        if (dupSet.has(nums[i])) dupNum = nums[i];
        dupSet.add(nums[i]);
    }

    let missingNum = shouldBeSum - actualSum + dupNum

    let retArr = [dupNum, missingNum];
    return retArr;
};


//  console.log(shouldBeSum);
//  console.log(actualSum);
//  console.log(dupNum);


//input = array of nums
//output = array of 2 elements
// first element = number that is duplicated
// second element = number that is missing.

//sample array = [1,1,3]

//Strategy
//1) Find "shouldBe" sum of all nums in non duplicate array [1, 2, 3] = 6
//2) Find sum of all nums in actual array [1, 1, 3] = 5
//3) Find the difference, this will be the first element of the output array = [1] (duplicated value)
//4) Then we take the duplicated value * 2 subtracted from the "shouldBe" sum of  
//   the array 6 - (1 * 2) = 4
//5) Then subtract the duplicated value * 2 (1 * 2) from the remaining number (4) to get the missing number
// Ex.
// 6 - (1 * 2) = 4
// 4 - 2 = 2

//sample array = [1, 2, 3, 4, 5, 6, 7, 8, 5, 10]
//shouldBe sum = 55
//Actual sum = 51
//difference 

// [1,2,2,4] = 10
// [1,2,3,1] = 7

console.log(findErrorNums([3, 3, 1]));


// sb - as + dupNum 
// 10 - 7 + 1 = 4
