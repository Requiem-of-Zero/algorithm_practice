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