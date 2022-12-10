/*
 * #70 Climb Stairs
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
 * #160 Intersection of Two Linked Lists
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
 * #14 Longest Common Prefix
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
 * #27 Remove Element in place
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

/*
* #58 Length of Last Word
*/ 
var lengthOfLastWord = function (s) {
  let splitStr = s.split(" ");
  for (let i = splitStr.length - 1; 0 <= i; i--) {
    let word = splitStr[i];
    if (isWord(word)) return word.length;
  }
};

const isWord = (word) => {
  if (typeof word === "string" && word) return true;
  return false;
};

// * #1379 Find a Corresponding Node of a Binary Tree in a Clone of That Tree
var getTargetCopy = function (original, cloned, target) {
  if (!original) return null;
  if (original === target) return cloned;
  let left = getTargetCopy(original.left, cloned.left, target);
  let right = getTargetCopy(original.right, cloned.right, target);
  return left || right;
};

// * #637 Average of Levels in Binary Tree
var averageOfLevels = function (root) {
  let [queue, average] = [[root], []];

  while (queue.length) {
    let [length, sum] = [queue.length, 0];

    for (let i = 0; i < length; i++) {
      let currNode = queue.pop();
      sum += currNode.val;

      if (currNode.left) {
        queue.unshift(currNode.left);
      }
      if (currNode.right) {
        queue.unshift(currNode.right);
      }
    }
    average.push(sum / length);
  }

  return average;
};

// * N-ary Post Order Traversal Iterative
// Time O(n) Space O(n)
var postorder = function (root) {
  if (!root) return [];
  let [stack, res] = [[root], []];

  while (stack.length) {
    let curr = stack.pop();

    for (const child of curr.children) {
      stack.push(child);
    }

    res.push(curr.val);
  }

  return res.reverse();
};