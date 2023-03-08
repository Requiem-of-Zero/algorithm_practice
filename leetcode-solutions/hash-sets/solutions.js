// * #2549. Count Distinct Numbers on Board
// Time O(n^2)
// Space O(n)
var distinctIntegers = function (n) {
  let distinct = new Set();

  distinct.add(n);
  let day = n;

  while (day) {
    for (let i = 1; i < day; i++) {
      if (day % i === 1 && !distinct.has(i)) distinct.add(i);
    }
    day--;
  }

  return distinct.size;
};

