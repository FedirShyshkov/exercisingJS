/*
What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. 
For example:
'abba' & 'baab' == true
'abba' & 'bbaa' == true
'abba' & 'abbba' == false
'abba' & 'abca' == false
Write a function that will find all the anagrams of a word from a list. 
You will be given two inputs a word and an array with words.
You should return an array of all the anagrams or an empty array if there are none. 
https://www.codewars.com/kata/523a86aa4230ebb5420001e1/train/javascript
*/

function dissolveIntoMap(word) {
  let wordMap = new Map();
  word.split("").forEach(arg => {
    if (wordMap.has(arg)) {
      let count = wordMap.get(arg);
      count += 1;
      wordMap.set(arg, count);
    } else {
      let count = 1;
      wordMap.set(arg, count);
    }
  });
  return wordMap;
}

function compareMaps(map1, map2) {
  var testVal;
  if (map1.size !== map2.size) {
    return false;
  }
  for (var [key, val] of map1) {
    testVal = map2.get(key);
    if (testVal !== val || (testVal === undefined && !map2.has(key))) {
      return false;
    }
  }
  return true;
}

function anagrams(word, words) {
  let wordMap = dissolveIntoMap(word);
  let resultingArray = words.filter(arg => {
    return compareMaps(wordMap, dissolveIntoMap(arg));
  });
  return resultingArray;
}

console.log(anagrams("abba", ["aabb", "abcd", "bbaa", "dada"]));

console.log(anagrams("racer", ["crazer", "carer", "racar", "caers", "racer"]));

console.log(anagrams("laser", ["lazing", "lazy", "lacer"]));
