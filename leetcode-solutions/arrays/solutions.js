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

// * #2475. Number of Unequal Triplets in Array
// Time O(n^3)
// Space O(1)
var unequalTriplets = function (nums) {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (
          nums[i] !== nums[j] &&
          nums[i] !== nums[k] &&
          nums[j] !== nums[k] &&
          i < j &&
          j < k
        ) {
          count++;
        }
      }
    }
  }

  return count;
};

// Time O(n)
// Space O(n)
var unequalTriplets = function (nums) {
  let count = 0,
    prev = 0,
    nxt = nums.length;
  let frequencies = nums.reduce((count, currentValue) => {
    return (
      count[currentValue] ? ++count[currentValue] : (count[currentValue] = 1),
      count
    );
  }, {});

  for (freq of Object.values(frequencies)) {
    nxt -= freq;
    count += prev * freq * nxt;
    prev += freq;
  }
  return count;
};

// * #2057. Smallest Index With Equal Value
// Time O(n)
// Space O(n)
var smallestEqual = function (nums) {
  let smallest = [];

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (i % 10 == num) {
      smallest.push(i);
    }
  }

  return smallest.length ? Math.min(...smallest) : -1;
};

// * #2506. Count Pairs Of Similar Strings
// Time O(n^2)
// Space O(m)
var similarPairs = function (words) {
  let count = 0;

  for (let i = 0; i < words.length; i++) {
    for (let j = i + 1; j < words.length; j++) {
      if (sameCharacters(words[i], words[j]) && i !== j) count++;
    }
  }
  return count;
};

const sameCharacters = (word1, word2) => {
  const [set1, set2] = [new Set(word1), new Set(word2)];
  if (set1.size !== set2.size) {
    return false;
  }

  return [...set1].every((char) => set2.has(char));
};

// * #118. Pascal's Triangle
// Time O(n ^ 2)
// Space O(n ^ 2)
var generate = function (numRows) {
  if (numRows === 0) return [];
  if (numRows === 1) return [[1]];
  let result = [];
  for (let row = 1; row <= numRows; row++) {
    let arr = [];
    for (let col = 0; col < row; col++) {
      if (col === 0 || col === row - 1) {
        arr.push(1);
      } else {
        arr.push(result[row - 2][col - 1] + result[row - 2][col]);
      }
    }
    result.push(arr);
  }
  return result;
};

// * #1200. Minimum Absolute Difference
// Time O(n log n)
// Space O(n)
var minimumAbsDifference = function (arr) {
  let minDiff = Infinity;
  let output = [];

  arr = arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length - 1; i++) {
    const diff = arr[i + 1] - arr[i];
    if (diff < minDiff) {
      minDiff = diff;
      output = [[arr[i], arr[i + 1]]];
    } else if (diff === minDiff) {
      output.push([arr[i], arr[i + 1]]);
    }
  }

  return output;
};

// * #463. Island Perimeter
// Time O(n * m)
// Space O(1)
var islandPerimeter = function (grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  // initialize perimeter to be 0
  var perimeter = 0;

  for (var row = 0; row < rows; row++) {
    for (var col = 0; col < cols; col++) {
      // if the current pos is water continue to next iteration
      if (!grid[row][col]) continue;

      // perimeter will be 4 for every place with no land adjacent to another land
      perimeter += 4;

      // if row is inbounds and to the left of current pos is land subtract 1 from the current perimeter
      if (row > 0 && grid[row - 1][col]) perimeter--;
      // if the col is inbounds and to the top of the pos is land subtract 1 from the current perimeter
      if (col > 0 && grid[row][col - 1]) perimeter--;
      // if row is inbounds and to the right of the current pos is land subtract 1 from the current perimeter
      if (row < rows - 1 && grid[row + 1][col]) perimeter--;
      // if col is inbounds and to the bottom of the current post is land subtract 1 from the current perimeter
      if (col < cols - 1 && grid[row][col + 1]) perimeter--;
    }
  }

  return perimeter;
};

// * #108. Convert Sorted Array to Binary Search Tree
// Time O(n)
// Space O(n)
var sortedArrayToBST = function (nums) {
  if (nums.length === 0) {
    return null;
  }
  let middle = Math.floor(nums.length / 2);
  let root = new TreeNode(nums[middle]);
  root.left = sortedArrayToBST(nums.slice(0, middle));
  root.right = sortedArrayToBST(nums.slice(middle + 1));
  return root;
};

// * #1030. Matrix Cells in Distance Order
// Time O(r * c log r * c)
// Space O(r * c)
var allCellsDistOrder = function (R, C, r0, c0) {
  const matrix = [];
  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      matrix.push([i, j]);
    }
  }

  return matrix.sort((a, b) => {
    const bDiff = Math.abs(b[1] - c0) + Math.abs(b[0] - r0);
    const aDiff = Math.abs(a[1] - c0) + Math.abs(a[0] - r0);
    return aDiff - bDiff;
  });
};

// * #1122. Relative Sort Array
// Time O(n)
// Space O(n)
var relativeSortArray = function (arr1, arr2) {
  let count = {};
  let distinct = new Set(arr2);
  let notIncluded = [];
  let output = [];

  arr1.forEach((ele) => {
    if (count[ele] === undefined) count[ele] = 1;
    else count[ele] += 1;
  });

  notIncluded = arr1.filter((ele) => !distinct.has(ele));

  for (let i = 0; i < arr2.length; i++) {
    let currDigit = arr2[i];
    let repeatVal = count[currDigit];

    for (let j = 0; j < repeatVal; j++) {
      output.push(currDigit);
    }
  }

  return output.concat(notIncluded.sort((a, b) => a - b));
};

// * #1002. Find Common Characters
// Time O(n)
// Space O(n)
var commonChars = function (words) {
  const uniqueCharsPerStr = words.map((str) => {
    return str.split("").reduce((map, curr) => {
      map[curr] = (map[curr] || 0) + 1;
      return map;
    }, {});
  });

  const sharedUniqueChars = uniqueCharsPerStr.reduce((counts, strCounts) => {
    Object.keys(strCounts).forEach((char) => {
      if (!counts[char]) {
        counts[char] = [];
      }

      counts[char].push(strCounts[char]);
    });
    return counts;
  }, {});

  let output = Object.keys(sharedUniqueChars)
    // Filter out characters that don't exist in every string
    .filter((key) => sharedUniqueChars[key].length === words.length)
    // Determine the number of times to repeat each character
    .map((key) => ({
      key,
      count: Math.min(...sharedUniqueChars[key]),
    }));
  // Create the output array

  return output.reduce((str, char) => {
    return str.concat(new Array(char.count).fill(char.key));
  }, []);
};

