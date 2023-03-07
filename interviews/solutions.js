// * Workday Hackerrank
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

