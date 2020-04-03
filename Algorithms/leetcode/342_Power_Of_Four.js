//Without recursion or Iteration

//Dividing the natural log of the given number by the natural log of 4
//and should provide a whole number. If the number is not an integer, then 
//return false
var isPowerOfFour = function(num) {
    let newNum = getBaseNumber(4, num);
    return (Number.isInteger(newNum));
};

var getBaseNumber = function(x, y) {
    return Math.log(y) / Math.log(x);
}