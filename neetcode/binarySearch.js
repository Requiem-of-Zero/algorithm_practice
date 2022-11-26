// Binary Search in Rotated Sorted Array
  // O(log n) time complexity O(1) space
var search = function (nums, target) {
  let [left, right] = [0, nums.length - 1];

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) return mid;
    if (nums[mid] >= nums[left]) {
      if (nums[mid] < target || target < nums[left]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    } else {
      if (nums[mid] > target || target > nums[right]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
  }

  return -1;
};

// Find Min in Rotated Sorted Array
  // O(log n) time O(1) space
var findMin = function (nums) {
  let [left, right, min] = [0, nums.length - 1, nums[0]];

  while (left <= right) {
    if (nums[left] < nums[right]) {
      min = Math.min(nums[left], min);
      break;
    }

    let mid = Math.floor((left + right) / 2);
    min = Math.min(nums[mid], min);

    if (nums[mid] >= nums[left]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return min;
};