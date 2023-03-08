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

// * #1624. Largest Substring Between Two Equal Characters
// Time O(n^2)
// Space O(1)
var maxLengthBetweenEqualCharacters = function (s) {
  let largest = -1;

  for (let i = 0; i < s.length; i++) {
    for (let j = s.length - 1; j > i; j--) {
      if (s[i] === s[j]) {
        largest = Math.max(largest, j - i - 1);
        break;
      }
    }
  }

  return largest;
};

// * #13. Roman to Integer
// Time O(n)
// Space O(1)
symbols = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

var romanToInt = function (s) {
  value = 0;
  for (let i = 0; i < s.length; i += 1) {
    // is the current roman numeral less than the next roman numeral?
    //  if it is then subtract the roman value from the output value
    //  otherwise add the value to the output value
    symbols[s[i]] < symbols[s[i + 1]]
      ? (value -= symbols[s[i]])
      : (value += symbols[s[i]]);
  }
  return value;
};

// * #2094. Finding 3-Digit Even Numbers
// Time O(n^3)
// Space O(m)
var findEvenNumbers = function (digits) {
  let output = new Set();

  for (let i = 0; i < digits.length; i++) {
    for (let j = 0; j < digits.length; j++) {
      for (let k = 0; k < digits.length; k++) {
        if (digits[i] !== 0 && i !== j && j !== k && k !== i) {
          let digit = `${digits[i]}${digits[j]}${digits[k]}`;
          if (+digit % 2 === 0) output.add(+digit);
        }
      }
    }
  }

  return [...output].sort((a, b) => a - b);
};

