/*
Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

https://www.codewars.com/kata/your-order-please/train/javascript
*/
"use strict";

function compareStrings(a, b) {
  let numberA = extractNumberFromString(a);
  let numberB = extractNumberFromString(b);
  if (numberA > numberB) return 1;
  if (numberA < numberB) return -1;
}

function extractNumberFromString(a) {
  return +a.split("").filter(character => {
    return !isNaN(parseInt(character));
  });
}

// alternative as seen in other solutions  return a.match(/\d/) - b.match(/\d/);

function order(words) {
  return words
    .split(" ")
    .sort(compareStrings)
    .join(" ");
}

console.log(order("is2 Thi1s T4est 3a"));
