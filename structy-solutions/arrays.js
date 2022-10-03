// uncompress

const uncompress = (s) => {
  let result = "",
    left = 0,
    right = left + 1;
  const numbers = new Set("0123456789");
  while (left < s.length) {
    if (numbers.has(s[right])) {
      right++;
    } else {
      const num = +s.slice(left, right);
      result += s[right].repeat(num);
      right++;
      left = right;
    }
  }
  return result;
};

// compress

const compress = (s) => {
  let left = 0,
    right = 0,
    count = 0,
    compressed = "";
  while (left < s.length) {
    if (s[right] === s[left]) {
      count++;
      right++;
    } else {
      if (count === 1) {
        compressed += s[left];
      } else {
        compressed += count + s[left];
      }
      count = 0;
      left = right;
    }
  }
  return compressed;
};

// anagrams

const anagrams = (s1, s2) => {
  return s2.split("").sort().join("") === s1.split("").sort().join("");
};

// most frequent char

const mostFrequentChar = (s) => {
  const count = new Map()
  let highest = null;

  for (const char of s) {
    count.set(char, 1 + (count.get(char) || 0));
  }

  for (const char of s) {
    if (highest === null || count.get(char) > count.get(highest))
      highest = char;
  }

  return highest;
};

// pair sum

const pairSum = (numbers, targetSum) => {
  const numMap = new Map();
  for (let i = 0; i < numbers.length; i++) {
    let indivNum = numbers[i],
      diff = targetSum - indivNum;
    if (numMap.has(diff)) return [i, numMap.get(diff)];
    numMap.set(indivNum, i);
  }
};

// pair product

const pairProduct = (numbers, targetProduct) => {
  const numMap = new Map();
  for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];
    let compare = targetProduct / num;
    if (numMap.has(compare)) return [i, numMap.get(compare)];
    numMap.set(num, i);
  }
};

// intersection

const intersection = (a, b) => {
  const numSet = new Set(a),
    intersections = [];

  for (const num of b) {
    if (numSet.has(num)) intersections.push(num);
  }

  return intersections;
};

// five sort

const fiveSort = (nums) => {
  let left = 0,
    right = nums.length - 1;

  while (left < right) {
    if (nums[right] === 5) {
      right--;
    } else if (nums[left] === 5) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
    } else {
      left++;
    }
  }
  return nums;
};

