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