// ! Workday Hackerrank
// * Get min steps to make array equal
function getMin(array) {
  let output = 0;
  while (new Set(array).size !== 1) {
    array = incrementList(array, getMaxIdx(array));
    output++;
  }

  return output;
}

const getMaxIdx = (arr) => {
  const currMax = Math.max(...arr);
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === currMax) return i;
  }
};

const incrementList = (arr, maxIdx) => {
  for (let i = 0; i < arr.length; i++) {
    if (i !== maxIdx) arr[i] += 1;
  }
  return arr;
};

// * Cardinality Sort
function cardinalitySort(nums) {
  nums.sort((a, b) => {
    const aBinary = a.toString(2);
    const bBinary = b.toString(2);
    return getBinaryCardinality(aBinary) - getBinaryCardinality(bBinary);
  });

  const hash = {};

  for (const num of nums) {
    let currCardinal = getBinaryCardinality(num.toString(2));
    if (hash[currCardinal] === undefined) {
      hash[currCardinal] = [num];
    } else {
      hash[currCardinal].push(num);
    }
  }

  for (const [key, value] of Object.entries(hash)) {
    hash[key] = value.sort((a, b) => a - b);
  }

  return Object.values(hash).flat();
}

function getBinaryCardinality(binary) {
  let count = 0;
  for (let i = 0; i < binary.length; i++) {
    if (+binary[i] === 1) count++;
  }
  return count;
}

// * Maximum Gross Value
function getMaximumGrossValue(nums) {
  let maxGrossValue = 0;
  for (let idx = 1; idx <= nums.length + 1; idx++) {
    let term1 = calcSumBetweenRange(nums, 1, idx);
    for (let jdx = idx; jdx <= nums.length + 1; jdx++) {
      let term2 = calcSumBetweenRange(nums, idx, jdx);
      for (let kdx = jdx; kdx <= nums.length + 1; kdx++) {
        let term3 = calcSumBetweenRange(nums, jdx, kdx);
        let term4 = calcSumBetweenRange(nums, kdx, nums.length + 1);
        maxGrossValue = Math.max(maxGrossValue, term1 - term2 + term3 - term4);
      }
    }
  }
  return maxGrossValue;
}

function calcSumBetweenRange(nums, startIdx, endIdx) {
  let sum = 0;
  for (let idx = startIdx - 1; idx < endIdx - 1; idx++) {
    sum += nums[idx];
  }
  return sum;
}

// ! Chegg Pairing
// * Times function
/*
Create a function called 'once' that accepts a function as a paramter. It returns a function.
The returned function will call the passed in function once with supplied arguements and will 
memoize the return.

All calls to the function afterwards will return the same value.
*/  
const timesFunction = (x) => x * 2;
const new_func = once(timesFunction);

const once = (fn) => {
  let memo;
  
  return (num) => {
    if(memo === undefined) memo = fn(num)
    return memo
  }
}

console.log("🚀 ~ file: solutions.js:97 ~ new_func:", new_func(12)) // 24
console.log("🚀 ~ file: solutions.js:97 ~ new_func:", new_func(1)) // 24
console.log("🚀 ~ file: solutions.js:97 ~ new_func:", new_func(1)) // 24
