function mode(arr) {
    const numsObj = {};
    let greatestFreq = 0;
    let mode;
    arr.forEach(ele => {
        numsObj[ele] = (numsObj[ele] || 0) + 1;
        if (numsObj[ele] > greatestFreq) {
            greatestFreq = numsObj[ele];
            mode = ele;
        }
    })

    return mode;
}

const inputArr = [1, 4, 6, 2, 7, 8, 8, 6, 8];
console.log(mode(inputArr));