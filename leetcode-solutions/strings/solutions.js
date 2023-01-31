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
