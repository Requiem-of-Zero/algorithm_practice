// * #2037. Min Number of Moves to Seat Everyone
// Time O(n log n) Space O(1)
var minMovesToSeat = function (seats, students) {
  seats.sort((a, b) => a - b);
  students.sort((a, b) => a - b);
  let count = 0;
  for (let i = 0; i < seats.length; i++) {
    count += Math.abs(seats[i] - students[i]);
  }
  return count;
};

// * #2418. Sort the People
// Time O(n log n) Space O(n)
var sortPeople = function (names, heights) {
  if (names.length === 1) return names;
  let [nameHeightMatrix, result] = [[], []];

  for (let i = 0; i < names.length; i++) {
    nameHeightMatrix.push([names[i], heights[i]]);
  }

  nameHeightMatrix.sort((a, b) => b[1] - a[1]);

  for (let [name, height] of nameHeightMatrix) {
    result.push(name);
  }

  return result;
};

// * #1913. Maximum Product Difference Between Two Pairs
// Time O(n log n) Space O(1)
var maxProductDifference = function (nums) {
  let length = nums.length;
  nums.sort((a, b) => a - b);
  return nums[length - 1] * nums[length - 2] - nums[0] * nums[1];
};

// * #832. Flipping an Image
// Time O(n^2) Space O(1)
var flipAndInvertImage = function (image) {
  for (const row of image) {
    row.reverse();
  }

  for (const row of image) {
    invert(row);
  }

  return image;
};

const invert = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    arr[i] === 0 ? (arr[i] = 1) : (arr[i] = 0);
  }

  return arr;
};

// * #2176. Count Equal and Divisible Pairs in an Array
// Time O(n^2) Space O(1)
var countPairs = function (nums, k) {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if ((i * j) % k === 0 && nums[i] == nums[j]) count++;
    }
  }

  return count;
};

// * #1572. Matrix Diagonal Sum
// Time O(n) Space O(n)
var diagonalSum = function (mat) {
  let visited = new Set(),
    sum = 0;

  leftDiagSum(mat, visited);

  rightDiagSum(mat, visited);

  for (const pos of visited) {
    let [row, col] = pos.split(",");
    sum += mat[+row][+col];
  }

  return sum;
};

const leftDiagSum = (matrix, visited) => {
  for (let i = 0; i < matrix.length; i++) {
    let pos = `${i}, ${i}`;
    visited.add(pos);
    if (visited.has(pos)) continue;
  }

  return visited;
};

const rightDiagSum = (matrix, visited) => {
  for (let i = matrix.length - 1; 0 <= i; i--) {
    pos = `${matrix.length - 1 - i}, ${i}`;
    visited.add(pos);
    if (visited.has(pos)) continue;
  }

  return visited;
};

// * #1464. Maximum Product of Two Elements in an Array
// Time O(nlogn) Space O(n)
var maxProduct = function (nums) {
  nums.sort((a, b) => a - b);
  let [maxProduct, right] = [0, nums.length - 1];

  for (let left = 0; left < nums.length - 1; left++) {
    let product = (nums[left] - 1) * (nums[right] - 1);
    maxProduct = Math.max(product, maxProduct);
  }

  return maxProduct;
};

// * #1725. Number Of Rectangles That Can Form The Largest Square
// Time O(n) Space O(n)
var countGoodRectangles = function (rectangles) {
  const maxLen = [];
  let count = 0;

  for (const rectangle of rectangles) {
    maxLen.push(Math.min(...rectangle));
  }

  let maxVal = Math.max(...maxLen);

  for (const num of maxLen) {
    if (num === maxVal) count++;
  }

  return count;
};

// * #2108. Find First Palindromic String in the Array
// Time O(n ^ 2) Space O(1)
var firstPalindrome = function (words) {
  for (const word of words) {
    if (isPalindrome(word)) return word;
  }

  return "";
};

const isPalindrome = (word) => {
  let reversed = "";

  for (let i = word.length - 1; 0 <= i; i--) {
    reversed += word[i];
  }

  return word === reversed;
};

// * #1252. Cells with Odd Values in a Matrix
// Time O(i * (m + n)) Space O(m x n)
var oddCells = function (m, n, indices) {
  let count = 0;
  const matrix = new Array(m).fill(0).map(() => new Array(n).fill(0));

  for (let index of indices) {
    const [row, col] = index;
    incrementRow(matrix[row]); // m
    incrementCol(col, matrix); // n
  }

  let matrixValues = matrix.flat();

  for (let i = 0; i < matrixValues.length; i++) {
    if (matrixValues[i] % 2 !== 0) count++;
  }

  return count;
};

const incrementRow = (row) => {
  for (let i = 0; i < row.length; i++) {
    row[i]++;
  }

  return row;
};

const incrementCol = (colIdx, matrix) => {
  for (let i = 0; i < matrix.length; i++) {
    matrix[i][colIdx]++;
  }
  return matrix;
};

// * #1827. Minimum Operations to Make the Array Increasing
// Time O(n) Space O(1)
var minOperations = function (nums) {
  let sum = 0;

  for (let i = 1; i < nums.length; i++) {
    let ahead = nums[i],
      previous = nums[i - 1];
    let diff = ahead - previous;
    if (diff <= 0) {
      ahead += Math.abs(diff) + 1;
      sum += Math.abs(diff) + 1;
    }
  }
  return sum;
};

// * #2185. Counting Words With a Given Prefix
// Time O(n * m) n is len of words, m is len of pref
// Space O(1) count does not depend on size of input
var prefixCount = function (words, pref) {
  let count = 0;
  words.forEach((word) => {
    if (word.indexOf(pref) === 0) count++;
  });
  return count;
};

// * #1304. Find N Unique Integers Sum up to Zero
// Time O(n) number of iterations for the given input number
// Space O(n) for the number of numbers in the result array
var sumZero = function (n) {
  let [result, sum] = [[], 0];
  if (n === 1) return [sum];
  for (let i = 1; i < n; i++) {
    result.push(i);
    sum += i;
  }
  result.push(-sum);
  return result;
};

// * #1295. Find Numbers with Even Number of Digits
// Time O(n) n for number of numbers in nums
// Space O(1) constant because the count does not depend on the size of the nums input
var findNumbers = function (nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i].toString().length % 2 === 0) {
      count++;
    }
  }
  return count;
};

// * #561. Array Partition
// Time O(n log n) n being the number of nums
// Space O(1) fixed number regardless of input 
var arrayPairSum = function (nums) {
  nums.sort((a, b) => a - b);
  let sum = 0;
  for (let i = 0; i < nums.length; i += 2) {
    sum += nums[i];
  }
  return sum;
};

// * #942. DI String Match
// Time O(n) n being length of input string
// Space O(n) n being the size of the resulting array
var diStringMatch = function (s) {
  let [low, high, res] = [0, s.length, []];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "I") res.push(low++);
    else res.push(high--);
  }
  res.push(low);
  return res;
};

// * #1979. Find Greatest Common Divisor of Array
// Time O(n) n being len of inputs in nums array
// Space O(1) res is fixed doesn't change to input
var findGCD = function (nums) {
  let [max, min, res] = [Math.max(...nums), Math.min(...nums), 1];

  for (let i = 1; i <= max; i++) {
    if (max % i === 0 && min % i === 0) res = i;
  }

  return res;
};

// * #2089. Find Target Indices After Sorting Array
// Time O(n log n) n being numbers in input nums
// Space O(n) n being size of result correlates to the input array
var targetIndices = function (nums, target) {
  let result = [];
  if (nums.length === 0) return result;
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) result.push(i);
  }

  return result;
};

// * #2341. Maximum Number of Pairs in Array
// Time O(n)
// Space O(n)
var numberOfPairs = function (nums) {
  let numsMap = {},
    res = [0, 0];
  nums.forEach((num) => (numsMap[num] = 1 + (numsMap[num] || 0)));

  for (let num of Object.values(numsMap)) {
    res[0] += Math.floor(num / 2);
    res[1] += num % 2;
  }

  return res;
};

// * #2529. Maximum Count of Positive Integer and Negative Integer
// Time O(n)
// Space O(1)
var maximumCount = function (nums) {
  let [pos, neg] = [0, 0];

  for (const num of nums) {
    if (num > 0) pos++;
    if (num < 0) neg++;
  }

  if (pos !== 0 && neg !== 0) return Math.max(pos, neg);

  return pos === 0 ? neg : pos;
};

// * #1450. Number of Students Doing Homework at a Given Time
// Time O(n)
// Space O(1)
var busyStudent = function (startTime, endTime, queryTime) {
  let busy = 0;

  for (let i = 0; i < startTime.length; i++) {
    let [studentStart, studentEnd] = [startTime[i], endTime[i]];
    if (studentEnd >= queryTime && studentStart <= queryTime) busy++;
  }

  return busy;
};

// * #1475. Final Prices With a Special Discount in a Shop
// Time O(n)
// Space O(n)
var finalPrices = function (prices) {
  let [left, right, discounted] = [0, 1, []];

  while (discounted.length !== prices.length) {
    if (right > left && prices[right] <= prices[left]) {
      discounted.push(prices[left] - prices[right]);
      left++;
      right = left;
    }

    if (right > prices.length - 1) {
      discounted.push(prices[left]);
      left++;
      right = left;
    }

    right++;
  }

  return discounted;
};

// * #2363. Merge Similar Items
// Time O(n)
// Space O(n)
var mergeSimilarItems = function (items1, items2) {
  let weightHash = {},
    similar = [];

  items1.forEach((item) => {
    let [idx, weight] = item;
    !weightHash[idx] ? (weightHash[idx] = weight) : (weightHash[idx] += weight);
  });

  items2.forEach((item) => {
    let [idx, weight] = item;
    !weightHash[idx] ? (weightHash[idx] = weight) : (weightHash[idx] += weight);
  });

  for (const [idx, weight] of Object.entries(weightHash)) {
    similar.push([idx, weight]);
  }

  return similar;
};

// * #1051. Height Checker
// Time O(nlogn)
// Space O(n)
var heightChecker = function (heights) {
  let [expected, count] = [[...heights].sort((a, b) => a - b), 0];

  for (let i = 0; i < heights.length; i++) {
    if (heights[i] !== expected[i]) count++;
  }

  return count;
};

// * #1351. Count Negative Numbers in a Sorted Matrix
// Time O(n * m)
// Space O(1)
var countNegatives = function (grid) {
  let negativeCount = 0;

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      let curr = grid[row][col];
      if (curr < 0) negativeCount++;
    }
  }

  return negativeCount;
};

// * #944. Delete Columns to Make Sorted
// Time O(n * m)
// Space O(1)
var minDeletionSize = function (A) {
  let count = 0;

  for (let i = 0; i < A[0].length; i++) {
    if (!isColumnIncreasing(i, A)) {
      count++;
    }
  }

  return count;
};

var isColumnIncreasing = function (column, A) {
  let char = A[0][column];

  for (let i = 1; i < A.length; i++) {
    if (char > A[i][column]) {
      return false;
    }
    char = A[i][column];
  }

  return true;
};

// ! Alternative solution
var minDeletionSize = function (A) {
  let count = 0;
  for (let i = 0; i < A[0].length; i++) {
    for (let j = 1; j < A.length; j++) {
      if (A[j - 1][i] > A[j][i]) {
        count++;
        break;
      }
    }
  }
  return count;
};

// * #1299. Replace Elements with Greatest Element on Right Side
// Time O(n)
// Space O(1)
var replaceElements = function (arr) {
  let max = -1;
  for (let i = arr.length - 1; i >= 0; i--) {
    let temp = arr[i];
    arr[i] = max;
    max = Math.max(max, temp);
  }
  return arr;
};

// Time O(n^2)
// Space O(n)
var replaceElements = function (arr) {
  if (arr.length === 1 || arr.length === 0) return [-1];

  let res = [];

  for (let i = 0; i < arr.length; i++) {
    let greatest = 0;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > greatest) greatest = arr[j];
    }
    i !== arr.length - 1 ? res.push(greatest) : res.push(-1);
  }

  return res;
};

// var replaceElements = function (arr) {
//   if (arr.length === 1 || arr.length === 0) return [-1];

//   let res = [],
//     left = 0,
//     right = 1,
//     greatest = 0;

//   while (res.length !== arr.length) {
//     if (left === arr.length - 1) {
//       res.push(-1);
//       break;
//     }

//     right++;
//   }

//   return res;
// };

// * #1710. Maximum Units on a Truck
// Time O(nlogn)
// Space O(1)
var maximumUnits = function (boxTypes, truckSize) {
  boxTypes.sort((a, b) => b[1] - a[1]);

  let ans = 0;
  for (const [count, units] of boxTypes) {
    const takeBoxes = Math.min(count, truckSize);
    ans += takeBoxes * units;
    truckSize -= takeBoxes;

    if (truckSize === 0) break;
  }

  return ans;
};

// * #2255. Count Prefixes of a Given String
// Time O(n)
// Space O(1)
var countPrefixes = function (words, s) {
  let count = 0;

  for (const word of words) {
    if (s.indexOf(word) === 0) count++;
  }

  return count;
};


// * #2032. Two Out of Three
// Time O(n)
// Space O(n)
var twoOutOfThree = function (nums1, nums2, nums3) {
  let [set1, set2, set3, res] = [
    new Set(nums1),
    new Set(nums2),
    new Set(nums3),
    new Set(),
  ];

  for (const num of set1) {
    if (set2.has(num) || set3.has(num)) res.add(num);
  }

  for (const num of set2) {
    if (set1.has(num) || set3.has(num)) res.add(num);
  }

  for (const num of set3) {
    if (set1.has(num) || set2.has(num)) res.add(num);
  }

  return [...res];
};

// * #2357. Make Array Zero by Subtracting Equal Amounts
// Time O(n)
// Space O(n)
var minimumOperations = function (nums) {
  let k = new Set(nums);
  return k.has(0) ? k.size - 1 : k.size;
};

// * #1337. The K Weakest Rows in a Matrix
// Time O(r * c)
// Space O(f)
var kWeakestRows = function (mat, k) {
  //Step 1:
  let freqMap = {};
  for (let i = 0; i < mat.length; i++) {
    // Step 2:
    let count = mat[i].lastIndexOf(1) + 1;
    // Step 3:
    if (freqMap[count] !== undefined) {
      freqMap[count] = [...freqMap[count], i];
    } else {
      freqMap[count] = [i];
    }
  }
  // Step 4 & 5
  return Object.values(freqMap)
    .reduce((arr, itm) => {
      arr = [...arr, ...itm];
      return arr;
    }, [])
    .slice(0, k);
};

// * #1403. Minimum Subsequence in Non-Increasing Order
// Time O(nlogn)
// Space O(n)
var minSubsequence = function (nums) {
  nums.sort((a, b) => a - b);
  let sum = nums.reduce((total, num) => total + num);
  let res = [],
    newSum = 0;
  while (sum >= newSum) {
    let x = nums.pop();
    res.push(x);
    (sum -= x), (newSum += x);
  }
  return res;
};

// * #2496. Maximum Value of a String in an Array
// Time O(n * m)
// Space O(1)
var maximumValue = function (strs) {
  let max = 0;

  for (const str of strs) {
    if (wordHasCharacters(str)) max = Math.max(max, str.length);
    else max = Math.max(max, +str);
  }

  return max;
};

const wordHasCharacters = (word) => {
  let hasChar = false;

  for (const char of word) {
    if (char.match(/[a-z]/i)) hasChar = true;
  }

  return hasChar;
};

// * #977. Squares of a Sorted Array
// Time O(n log n)
// Space O(n)
var sortedSquares = function (nums) {
  let squared = nums.map((num) => num ** 2);
  return squared.sort((a, b) => a - b);
};

// * #821. Shortest Distance to a Character
// Time O(n * m)
// Space O(n)
var shortestToChar = function (S, C) {
  let results = [];

  for (let i = 0; i < S.length; i++) {
    results.push(getDistance(i, S, C));
  }

  return results;
};

var getDistance = function (i, S, C) {
  let index = 0;
  let isInbounds = i + index < S.length || i - index > -1;
  while (isInbounds) {
    if (S[i + index] == C || S[i - index] == C) {
      return index;
    }

    index++;
  }

  return index;
};

// * #2535. Difference Between Element Sum and Digit Sum of an Array
// Time O(n)
// Space O(n)
var differenceOfSum = function (nums) {
  let elementSum = getElementSum(nums);
  let digitSum = getDigitSum(nums);
  return Math.abs(elementSum - digitSum);
};

const getElementSum = (nums) => {
  let sum = 0;

  for (const num of nums) {
    sum += num;
  }

  return sum;
};

const getDigitSum = (nums) => {
  let strNum = nums.join(""),
    sum = 0;

  for (const num of strNum) {
    sum += +num;
  }

  return sum;
};

// * #1217. Minimum Cost to Move Chips to The Same Position
// Time O(n)
// Space O(1)
var minCostToMoveChips = function (position) {
  let [even, odd] = [0, 0];

  for (const pos of position) {
    if (pos % 2 === 0) {
      even++;
      continue;
    }

    odd++;
  }
  return Math.max(even, odd);
};

// * #922. Sort Array By Parity II
// Time O(n)
// Space O(n)
var sortArrayByParityII = function (nums) {
  const output = new Array(nums.length);
  let [cursorOdd, cursorEven] = [1, 0];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2) {
      output[cursorOdd] = nums[i];
      cursorOdd += 2;
    } else {
      output[cursorEven] = nums[i];
      cursorEven += 2;
    }
  }
  return output;
};

// * #2399. Check Distances Between Same Letters
// Time O(n)
// Space O(1)
var checkDistances = function (s, distance) {
  let [alphaHash, alphabets, left, right] = [
    {},
    "abcdefghijklmnopqrstuvwxyz".split(""),
    0,
    1,
  ];

  alphabets.forEach((char, i) => (alphaHash[char] = i));

  while (left < s.length) {
    let [leftVal, rightVal] = [s[left], s[right]];
    let currDistance = distance[alphaHash[leftVal]];

    if (rightVal === leftVal && right - left - 1 !== currDistance) {
      return false;
    }

    if (right > s.length) {
      left++;
      right = left;
    }

    right++;
  }
  return true;
};

// * #1380. Lucky Numbers in a Matrix
// Time O(n^2)
// Space O(n)
var luckyNumbers = function (matrix) {
  let res = [];

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      let [columnMax, rowMin] = [
        getMaxInColumn(matrix, col),
        Math.min(...matrix[row]),
      ];
      if (matrix[row][col] === columnMax && matrix[row][col] === rowMin)
        res.push(matrix[row][col]);
    }
  }

  return res;
};

const getMaxInColumn = (matrix, column) => {
  let max = [];

  for (let row = 0; row < matrix.length; row++) {
    max.push(matrix[row][column]);
  }

  return Math.max(...max);
};