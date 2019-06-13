/*
A digital root is the recursive sum of all the digits in a number. Given n, take the sum of the digits of n. 
If that value has more than one digit, continue reducing in this way until a single-digit number is produced.
This is only applicable to the natural numbers.

https://www.codewars.com/kata/sum-of-digits-slash-digital-root/javascript
 */
"use strict";

function digital_root(n) {
  if (n <= 0) {
    return 0;
  }
  if (n < 10) {
    return n;
  }
  let sumOfDigits = n
    .toString(10)
    .split("")
    .reduce(function(sum, current) {
      return parseInt(sum) + parseInt(current); // alternative as seen in other solutions:  return sum + +current;
    }, 0);
  return digital_root(sumOfDigits);
}

console.log(digital_root(16));
console.log(digital_root(456));
