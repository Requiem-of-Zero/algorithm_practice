// * #1689. Partitioning Into Minimum Number Of Deci-Binary Numbers
// Time O(n^2)
// Space O(n)
var minPartitions = function (n) {
  let numArr = n.split("").map((num) => +num);
  let sum = numArr.reduce((acc, val) => (acc += val));
  let count = 0;

  while (sum !== 0) {
    for (let i = 0; i < numArr.length; i++) {
      let currNum = numArr[i];
      if (currNum > 0) numArr[i] -= 1;
      else numArr[i] -= 0;
    }
    sum = numArr.reduce((acc, val) => (acc += val));
    count++;
  }

  return count;
};

// * #2315. Count Asterisks
// Time O(n)
// Space O(1)
var countAsterisks = function (s) {
  let [pipeCount, asteriskCount, pair] = [0, 0, false];

  for (const char of s) {
    if (char === "|") {
      pipeCount++;
    } else if (char === "*" && pair === true) {
      asteriskCount++;
    } else if (char === "*" && pipeCount === 0) {
      asteriskCount++;
    }

    if (pipeCount % 2 === 0) pair = true;
    else pair = false;
  }

  return asteriskCount;
};

// * #557. Reverse Words in a String III
// Time O(n^2)
// Space O(1)
var reverseWords = function (s) {
  const reverseSingleWord = (word) => {
    let reversed = "";

    for (let i = word.length - 1; 0 <= i; i--) {
      reversed += word[i];
    }

    return reversed;
  };
  return s
    .split(" ")
    .map((word) => reverseSingleWord(word))
    .join(" ");
};

// * #2103. Rings and Rods
// Time O(n)
// Space O(n)
var countPoints = function (rings) {
  let [count, colorHash] = [0, {}];

  for (let i = 0; i < rings.length - 1; i += 2) {
    let [color, ringPos] = [rings[i], rings[i + 1]];

    if (!colorHash[ringPos]) colorHash[ringPos] = new Set(color);
    else colorHash[ringPos].add(color);
  }

  for (const [key, val] of Object.entries(colorHash)) {
    if (val.size === 3) count++;
  }

  return count;
};

// * #1967. Number of Strings That Appear as Substrings in Word
// Time O(n * m)
// Space O(1)
var numOfStrings = function (patterns, word) {
  let count = 0;

  for (const pattern of patterns) {
    if (word.indexOf(pattern) !== -1) count++;
  }

  return count;
};

// * #2000. Reverse Prefix of Word
// Time O(n)
// Space O(n)
var reversePrefix = function (word, ch) {
  const reverse = (word, left, right) => {
    let [reverseSlice, rest] = [
      word.slice(left, right + 1),
      word.slice(right + 1),
    ];
    reverseSlice = reverseSlice.split("").reverse().join("");
    return reverseSlice + rest;
  };

  let firstOccurance = word.indexOf(ch);
  return reverse(word, 0, firstOccurance);
};

// * #1812. Determine Color of a Chessboard Square
// Time O(1)
// Space O(1)
var squareIsWhite = function (coordinates) {
  let letters = ["a", "b", "c", "d", "e", "f", "g", "h"];
  let [letter, num] = coordinates.split("");
  if (
    (letters.indexOf(letter) % 2 == 0 && num % 2 == 0) ||
    (letters.indexOf(letter) % 2 == 1 && num % 2 == 1)
  )
    return true;
  return false;
};