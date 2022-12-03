/*
 * Climb Stairs #70
 */
var climbStairs = function (n) {
  // if there are less than 3 stairs, we can return the stair amount which is the same as the amount of ways
  if (n < 4) {
    return n;
  }
  //
  var firstSum = 2;
  var secondSum = 3;

  for (var i = 4; i < n; i++) {
    secondSum = firstSum + secondSum;
    firstSum = secondSum - firstSum;
  }
  return firstSum + secondSum;
};

/*
 * Intersection of Two Linked Lists #160
 */
var getIntersectionNode = function (headA, headB) {
  if (headA === null && headB === null) return null;

  let a_pointer = headA;
  let b_pointer = headB;

  while (a_pointer !== b_pointer) {
    if (a_pointer === null) {
      a_pointer = headB;
    } else {
      a_pointer = a_pointer.next;
    }

    if (b_pointer === null) {
      b_pointer = headA;
    } else {
      b_pointer = b_pointer.next;
    }
  }

  return a_pointer;
};

/*
 * Longest Common Prefix #14
    O(n^2) time O(n) space 
*/
const longestCommonPrefix = (strs) => {
  if (strs.length === 0) return "";

  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);
      console.log(prefix);
    }
  }
  return prefix;
};

// Cooler solution from leetcode
// const longestCommonPrefix = (strs) => {
//   if (!strs.length) return "";

//   let prefix = strs[0];

//   for (let i = strs.length; --i; ) {
//     for (; strs[i].indexOf(prefix) !== 0; ) {
//       prefix = prefix.substring(0, prefix.length - 1);
//       if (!prefix.length) return "";
//     }
//   }

//   return prefix;
// };

/*
 *Remove Element in place #27
 */
var removeElement = function (nums, val) {
  for (let i = 0; i < nums.length; i++) {
    if (i > nums.length - 1) break;
    if (nums[i] === val) {
      nums.splice(i, 1);
      i--;
    }
  }
  return nums.length;
};
