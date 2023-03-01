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

// * #1309. Decrypt String from Alphabet to Integer Mapping
// Time O(n)
// Space O(n)
var freqAlphabets = function (s) {
  const map = {
    1: "a",
    2: "b",
    3: "c",
    4: "d",
    5: "e",
    6: "f",
    7: "g",
    8: "h",
    9: "i",
    10: "j",
    11: "k",
    12: "l",
    13: "m",
    14: "n",
    15: "o",
    16: "p",
    17: "q",
    18: "r",
    19: "s",
    20: "t",
    21: "u",
    22: "v",
    23: "w",
    24: "x",
    25: "y",
    26: "z",
  };
  const stack = [];
  for (const char of s) {
    if (char !== "#") {
      stack.push(char);
      continue;
    }
    const digit = stack.pop();
    stack.push(map[stack.pop() + digit]);
  }

  let output = "";
  for (const char of stack) {
    output += char <= "9" ? map[char] : char;
  }

  return output;
};

// * #412. Fizz Buzz
// Time O(n)
// Space O(n)
var fizzBuzz = function (n) {
  const output = [];

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      output.push("FizzBuzz");
    } else if (i % 3 === 0) {
      output.push("Fizz");
    } else if (i % 5 === 0) {
      output.push("Buzz");
    } else {
      output.push(`${i}`);
    }
  }

  return output;
};

// * #2309. Greatest English Letter in Upper and Lower Case
// Time O(n)
// Space O(n)
var greatestLetter = function (s) {
  let set = new Set(s.split(""));
  // ASCII(A-Z, a-z)=(65-90, 97-122).
  for (let i = 90; i >= 65; i--) {
    if (
      set.has(String.fromCharCode(i)) &&
      set.has(String.fromCharCode(i + 32))
    ) {
      return String.fromCharCode(i);
    }
  }
  return "";
};

// * #2042. Check if Numbers Are Ascending in a Sentence
// Time O(n)
// Space O(n)
var areNumbersAscending = function (s) {
  let numbers = s
    .split(" ")
    .filter((val) => val.match(/[0-9]/))
    .map((val) => +val);

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] <= numbers[i - 1]) {
      return false;
    }
  }

  return true;
};

// * #884. Uncommon Words from Two Sentences
// Time O(n)
// Space O(n)
var uncommonFromSentences = function (s1, s2) {
  const [output, wordCount1, wordCount2] = [[], {}, {}];

  s1.split(" ").forEach(
    (char) => (wordCount1[char] = 1 + (wordCount1[char] || 0))
  );
  s2.split(" ").forEach(
    (char) => (wordCount2[char] = 1 + (wordCount2[char] || 0))
  );

  for (const [key, val] of Object.entries(wordCount1)) {
    if (val === 1 && !wordCount2[key]) output.push(key);
  }

  for (const [key, val] of Object.entries(wordCount2)) {
    if (val === 1 && !wordCount1[key]) output.push(key);
  }

  return output;
};

// * #2062. Count Vowel Substrings of a String
// Time O(n)
// Space O(n)
const isAllVowel = (vowelSet, str) => {
  for (let char of vowelSet) {
    const verify = str.includes(char);
    if (!verify) return false;
  }

  return true;
};

var countVowelSubstrings = function (word) {
  const vowels = new Set("aeiou".split(""));

  let [left, right, temp, res] = [0, 0, "", 0];

  while (left <= word.length - 5) {
    const curr = word[right];
    if (vowels.has(curr)) {
      temp += curr;
      if (temp.length >= 5 && isAllVowel(vowels, temp)) res++;
      right++;
    } else {
      left++;
      temp = "";
      right = left;
    }
  }

  return res;
};

// * #1903. Largest Odd Number in String
// Time O(n)
// Space O(1)
var largestOddNumber = function (num) {
  for (let i = num.length - 1; i >= 0; i--) {
    if (+num[i] % 2) {
      return num.slice(0, i + 1);
    }
  }
  return "";
};

// * #2490. Circular Sentence
// Time O(n)
// Space O(n)
const lastChar = (word) => {
  return word.at(-1);
};

const firstChar = (word) => {
  return word[0];
};

var isCircularSentence = function (sentence) {
  const splitSent = sentence.split(" ");

  for (let i = 0; i < splitSent.length; i++) {
    if (
      lastChar(splitSent[i]) !==
      firstChar(splitSent[(i + 1) % splitSent.length])
    )
      return false;
  }

  return true;
};

// * #1455. Check If a Word Occurs As a Prefix of Any Word in a Sentence
// Time O(n)
// Space O(n)
var isPrefixOfWord = function (sentence, searchWord) {
  s = sentence.split(" ");
  for (let i = 0; i < s.length; i++) {
    if (s[i].startsWith(searchWord)) {
      return i + 1;
    }
  }
  return -1;
};

// * #1544. Make The String Great
// Time O(n)
// Space O(n)
var makeGood = function (s) {
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    let current = s[i],
      previous = stack[stack.length - 1];
    if (
      stack.length &&
      Math.abs(current.charCodeAt() - previous.charCodeAt()) === 32
    ) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }

  return stack.join("");
};

// * #1768. Merge Strings Alternately
// Time O(n)
// Space O(n)
var mergeAlternately = function (word1, word2) {
  let output = "";
  const [word1Queue, word2Queue] = [word1.split(""), word2.split("")];

  for (let i = 0; i < word1.length; i++) {
    if (word1Queue.length) output += word1Queue.shift();
    if (word2Queue.length) output += word2Queue.shift();
  }

  output += word1Queue.join("") || word2Queue.join("");

  return output;
};

// 