// Given two positive integers x and y, an integer is powerful if it is equal to x ^ i + y ^ j
// for some integers i >= 0 and j >= 0.

// Return a list of all powerful integers that have value less than or equal to bound.

// You may return the answer in any order.In your answer, each value should occur at most once.

var powerfulIntegers = function (x, y, bound) {
    const powerfulInts = new Set();
    let loopMax = Math.ceil(Math.sqrt(bound));

    for (let i = 0; i <= loopMax; i++) {
        for (let j = 0; j <= loopMax; j++) {
            if (Math.pow(x, i) + Math.pow(y, j) <= bound) {
                let qual = Math.pow(x, i) + Math.pow(y, j)
                powerfulInts.add(qual);
            }
        }
    }

    return Array.from(powerfulInts).sort((a,b) => a - b);
};


console.log(powerfulIntegers(2,3,10));