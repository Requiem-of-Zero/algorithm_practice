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

// * #590 N-ary Post Order Traversal Iterative
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


// * #589 N-ary Pre Order Traversal Iterative
// Time O(n) Space O(n)
var preorder = function (root) {
  if (!root) return [];
  let [stack, res] = [[root], []];

  while (stack.length) {
    let currNode = stack.pop();

    for (let i = currNode.children.length - 1; 0 <= i; i--) {
      let currChild = currNode.children[i];
      stack.push(currChild);
    }

    res.push(currNode.val);
  }

  return res;
};

// * #897 Increasing Order Search Tree
// Time O(n logn) Space O(n)
var increasingBST = function (root) {
  const getNodeValues = (root) => {
    let [stack, res] = [[root], []];

    while (stack.length) {
      let currNode = stack.pop();

      if (currNode.left) stack.push(currNode.left);
      if (currNode.right) stack.push(currNode.right);

      res.push(currNode.val);
    }

    return res;
  };

  let sortedNodeValues = getNodeValues(root).sort((a, b) => a - b);
  let rootNode = new TreeNode(sortedNodeValues.shift());
  let curr = rootNode;

  while (sortedNodeValues.length) {
    let nextHigherVal = sortedNodeValues.shift();

    curr.right = new TreeNode(nextHigherVal);
    curr = curr.right;
  }

  return rootNode;
};
// ! with recursive inOrder traversal
// Time O(n) Space O(n)
var increasingBST = function (root) {
  let result = [];

  function inOrder(node) {
    if (!node) return;
    inOrder(node.left);
    result.push(node.val);
    inOrder(node.right);
  }

  inOrder(root);

  let dummyNode = new TreeNode(0);
  let returnNode = dummyNode;

  for (let i = 0; i < result.length; i++) {
    dummyNode.right = new TreeNode(result[i]);
    dummyNode = dummyNode.right;
  }

  return returnNode.right;
};

// * #783 Minimum difference in BST
// Time O(n^2)
var minDiffInBST = function (root) {
  let stack = [root],
    min = Infinity,
    treeValues = [];

  while (stack.length) {
    let curr = stack.pop();
    treeValues.push(curr.val);
    if (curr.right) stack.push(curr.right);
    if (curr.left) stack.push(curr.left);
  }

  for (let i = 0; i < treeValues.length; i++) {
    let firstVal = treeValues[i];
    for (let j = i + 1; j < treeValues.length; j++) {
      let secondVal = treeValues[j];
      let diff = -firstVal + secondVal;
      min = Math.min(Math.abs(diff), min);
    }
  }

  return min;
};

// * #1302 Deepest Leaves Sum
var deepestLeavesSum = function (root) {
  let queue = [root],
    length = 1,
    sum = 0,
    prev = 0;

  while (queue.length) {
    length = queue.length;
    for (let i = 0; i < length; i++) {
      let currNode = queue.pop();
      sum += currNode.val;
      if (currNode.left) queue.unshift(currNode.left);
      if (currNode.right) queue.unshift(currNode.right);
    }
    prev = sum;
    sum = 0;
  }

  return prev;
};

// * Most words found
var mostWordsFound = function (sentences) {
  let max = 0;

  for (let i = 0; i < sentences.length; i++) {
    let splitSentence = sentences[i].split(" ").length;
    max = Math.max(max, splitSentence);
  }
  return max;
};



// * 1773 Count Matches
// Time O(n) Space O(1)
var countMatches = function (items, ruleKey, ruleValue) {
  let count = 0;

  for (let i = 0; i < items.length; i++) {
    let [type, color, name] = items[i];

    if (
      (ruleKey === "type" && ruleValue === type) ||
      (ruleKey === "color" && ruleValue === color) ||
      (ruleKey === "name" && ruleValue === name)
    )
      count++;
  }
  return count;
};