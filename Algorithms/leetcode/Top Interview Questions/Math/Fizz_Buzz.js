// Write a program that outputs the string representation of numbers from 1 to n.

// But for multiples of three it should output “Fizz” instead of the number and for 
// the multiples of five output “Buzz”. For numbers which are multiples of both three 
// and five output “FizzBuzz”.

// Example:

// n = 15,

// Return:
// [
//     "1",
//     "2",
//     "Fizz",
//     "4",
//     "Buzz",
//     "Fizz",
//     "7",
//     "8",
//     "Fizz",
//     "Buzz",
//     "11",
//     "Fizz",
//     "13",
//     "14",
//     "FizzBuzz"
// ]

var fizzBuzz = function(n) {
    let fizzBuzzArr = [];

    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            fizzBuzzArr.push("FizzBuzz");
        } else if (i % 3 === 0) {
            fizzBuzzArr.push("Fizz");
        } else if (i % 5 === 0) {
            fizzBuzzArr.push("Buzz");
        } else {
            fizzBuzzArr.push(i.toString());
        }
    }

    return fizzBuzzArr;
}

console.log(fizzBuzz(15));

//Input = An Integer
//Output = An array of strings
//Tools: Iterate through a range of 0 - n, pushing into new array
//Edge Cases = if num <= 0 return null
//Strategy: For loop with conditional check
//1) if i % 3 === 0 && i % 5 === 0 push "FizzBuzz"
//2) if i % 3 === 0 push "Fizz"
//3) if i % 5 === 0 push "Buzz"