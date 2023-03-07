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

// 
