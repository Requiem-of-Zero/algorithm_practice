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

// * #657. Robot Return to Origin
// Time O(n)
// Space O(n)
var judgeCircle = function (moves) {
  let [left, right, up, down] = [0, 0, 0, 0];

  for (const move of moves) {
    if (move === "U") {
      up++;
    } else if (move === "D") {
      down++;
    } else if (move === "L") {
      left++;
    } else {
      right++;
    }
  }

  return (
    new Set([left, right, up, down]).size === 1 ||
    (left === right && up === down)
  );
};

// * #2351. First Letter to Appear Twice
// Time O(n)
// Space O(n)
var repeatedCharacter = function (s) {
  const charSet = new Set();

  for (const char of s) {
    if (charSet.has(char)) return char;
    charSet.add(char);
  }
};

// * #1880. Check if Word Equals Summation of Two Words
// Time O(n)
// Space O(n)
var isSumEqual = function (firstWord, secondWord, targetWord) {
  let [firstSum, secondSum, targetSum] = ["", "", ""];

  for (let i = 0; i < firstWord.length; i++) {
    firstSum += firstWord.charCodeAt(i) - 97;
  }

  for (let i = 0; i < secondWord.length; i++) {
    secondSum += secondWord.charCodeAt(i) - 97;
  }

  for (let i = 0; i < targetWord.length; i++) {
    targetSum += targetWord.charCodeAt(i) - 97;
  }

  return +firstSum + +secondSum === +targetSum;
};

// * #2278. Percentage of Letter in String
// Time O(n)
// Space O(n)
var percentageLetter = function (s, letter) {
  let count = {};

  s.split("").forEach((char) => (count[char] = 1 + (count[char] || 0)));

  if (count[letter] === undefined) {
    return 0;
  } else {
    return Math.floor((count[letter] / s.length) * 100);
  }
};

// * #2283. Check if Number Has Equal Digit Count and Digit Value
// Time O(n)
// Space O(n)
var digitCount = function (num) {
  const count = {};

  num.split("").forEach((num) => (count[num] = 1 + (count[num] || 0)));

  for (let i = 0; i < num.length; i++) {
    if ((count[i] || 0) !== +num[i]) return false;
  }

  return true;
};

// * #1935. Maximum Number of Words You Can Type
// Time O(n * m)
// Space O(n)
var canBeTypedWords = function (text, brokenLetters) {
  const brokenSet = new Set(brokenLetters);
  let output = 0;

  text
    .split(" ")
    .forEach((word) => (output += wordCanBeTyped(word, brokenSet)));

  return output;
};

const wordCanBeTyped = (word, brokenSet) => {
  for (const char of word) {
    if (brokenSet.has(char)) return false;
  }

  return true;
};

// * #2124. Check if All A's Appears Before All B's
// Time O(n)
// Space O(1)
var checkString = function (s) {
  let bFound = false;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "b") bFound = true;
    if (s[i] === "a" && bFound === true) return false;
  }

  return true;
};

// * #824. Goat Latin
// Time O(n * m)
// Space O(n * m)
var toGoatLatin = function (sentence) {
  const vowelSet = new Set(["a", "e", "i", "o", "u"]);
  const words = sentence.split(" ");

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (startsWithVowel(word, vowelSet)) {
      words[i] = mutateWithVowel(word);
    } else {
      words[i] = mutateWithConsonant(word);
    }

    words[i] += "a".repeat(i + 1);
  }

  return words.join(" ");
};

const startsWithVowel = (word, vowelSet) => {
  if (vowelSet.has(word[0].toLowerCase())) return true;
  return false;
};

const mutateWithVowel = (word) => {
  return word + "ma";
};

const mutateWithConsonant = (word) => {
  return word.slice(1) + word[0] + "ma";
};

// * #2129. Capitalize the Title
// Time O(n * m)
// Space O(n * m)
var capitalizeTitle = function (title) {
  const words = title.split(" ");

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (word.length <= 2) {
      words[i] = word.toLowerCase();
    } else {
      words[i] = word[0].toUpperCase() + word.slice(1).toLowerCase();
    }
  }

  return words.join(" ");
};

// * #917. Reverse Only Letters
// Time O(n)
// Space O(n)
var reverseOnlyLetters = function (s) {
  let [letters, output, letterPointer, regex] = [[], "", 0, /[a-zA-Z]/g];

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i].match(regex)) {
      letters.push(s[i]);
    }
  }

  for (let i = 0; i < s.length; i++) {
    if (letters.includes(s[i])) {
      output += letters[letterPointer];
      letterPointer++;
    } else {
      output += s[i];
    }
  }

  return output;
};

// * #1446. Consecutive Characters
// Time O(n)
// Space O(1)
var maxPower = function (s) {
  let [left, right, maxStreak, currStreak] = [0, 0, 1, 0];

  while (left < s.length) {
    if (s[right] === s[left]) {
      right++;
      currStreak++;
    } else {
      currStreak = 0;
      left = right;
    }
    maxStreak = Math.max(maxStreak, currStreak);
  }

  return maxStreak;
};

// * #383. Ransom Note
// Time O(n)
// Space O(n)
var canConstruct = function (ransomNote, magazine) {
  const [ransomNoteCharCount, magazineCharCount] = [{}, {}];

  ransomNote
    .split("")
    .forEach(
      (char) =>
        (ransomNoteCharCount[char] = 1 + (ransomNoteCharCount[char] || 0))
    );
  magazine
    .split("")
    .forEach(
      (char) => (magazineCharCount[char] = 1 + (magazineCharCount[char] || 0))
    );

  for (const [key, val] of Object.entries(ransomNoteCharCount)) {
    if (!magazineCharCount[key] || val > magazineCharCount[key]) return false;
  }

  return true;
};

// * #2287. Rearrange Characters to Make Target String
// Time O(n)
// Space O(n)
var rearrangeCharacters = function (s, target) {
  const [sCount, targetCount] = [{}, {}];

  s.split("").forEach((char) => (sCount[char] = 1 + (sCount[char] || 0)));
  target
    .split("")
    .forEach((char) => (targetCount[char] = 1 + (targetCount[char] || 0)));

  let output = Infinity;

  for (const char of Object.keys(targetCount)) {
    if (!sCount[char]) return 0;
    output = Math.min(output, Math.floor(sCount[char] / targetCount[char]));
  }

  return output;
};

// * #2269. Find the K-Beauty of a Number
// Time O(n * m)
// Space O(n)
var divisorSubstrings = function (num, k) {
  let left = 0;
  let right = left + k - 1;
  let [output, strNum] = [0, String(num)];

  while (left <= strNum.length - k) {
    let currNum = +strNum.slice(left, right + 1);
    if (num % currNum === 0) output++;
    left++;
    right++;
  }

  return output;
};

// * #2379. Minimum Recolors to Get K Consecutive Black Blocks
// Time O(n * m)
// Space O(n)
const numberOfWhiteInSubstr = (subStr) => {
  let count = 0;
  for (const color of subStr) {
    if (color === "W") count++;
  }
  return count;
};

var minimumRecolors = function (blocks, k) {
  let left = 0;
  let right = left + k - 1;
  let output = Infinity;

  while (left <= blocks.length - k) {
    let currWhiteOccurance = numberOfWhiteInSubstr(
      blocks.slice(left, right + 1)
    );
    if (currWhiteOccurance === 0) return 0;
    output = Math.min(output, currWhiteOccurance);
    left++;
    right++;
  }

  return output;
};

// * #520. Detect Capital
// Time O(n)
// Space O(1)
var detectCapitalUse = function (word) {
  let [check1, check2, check3] = [allCap(word), noCap(word), capitalized(word)];
  return check1 || check2 || check3;
};

const allCap = (word) => {
  let output = true;

  for (const char of word) {
    if (char.toLowerCase() === char) output = false;
  }

  return output;
};

const noCap = (word) => {
  let output = true;

  for (const char of word) {
    if (char.toUpperCase() === char) output = false;
  }

  return output;
};

const capitalized = (word) => {
  if (word[0] + word.slice(1).toLowerCase() === word) return true;
  return false;
};

// * #1422. Maximum Score After Splitting a String
// Time O(n)
// Space O(1)
var maxScore = function (s) {
  let numZeroesInLeft = 0;
  let numOnesInRight = 0;

  if (s[0] === "0") {
    numZeroesInLeft += 1;
  }
  for (let idx = 1; idx < s.length; idx++) {
    if (s[idx] === "1") {
      numOnesInRight += 1;
    }
  }

  let bestSum = numZeroesInLeft + numOnesInRight;

  for (let idx = 1; idx < s.length - 1; idx++) {
    if (s[idx] === "1") {
      numOnesInRight -= 1;
    } else if (s[idx] === "0") {
      numZeroesInLeft += 1;
    }
    bestSum = Math.max(bestSum, numZeroesInLeft + numOnesInRight);
  }

  return bestSum;
};