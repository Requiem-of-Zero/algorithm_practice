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

// * #387. First Unique Character in a String
// Time O(n)
// Space O(n)
var firstUniqChar = function (s) {
  let count = {};

  s.split("").forEach((char, i) => (count[char] = 1 + (count[char] || 0)));

  for (let i = 0; i < s.length; i++) {
    let char = s[i];

    if (count[char] === 1) return i;
  }

  return -1;
};