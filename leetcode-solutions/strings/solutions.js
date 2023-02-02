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