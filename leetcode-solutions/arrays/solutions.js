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
// Time O(n^2) Space O(n) 
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

