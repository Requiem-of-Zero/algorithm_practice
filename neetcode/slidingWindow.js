var maxProfit = function (prices) {
  let max = 0,
    left = 0;

  for (let right = prices.length - 1; 0 <= right; right--) {
    if (prices[left] < prices[right]) {
      max = Math.max(max, -prices[left] + prices[right]);
    }
    left++;
  }
  return max;
};

var characterReplacement = function (s, k) {
  const countMap = {};

  let [leftIdx, maxLength, maxF] = [0, 0, 0];

  for (let rightIdx = 0; rightIdx < s.length; rightIdx++) {
    let rightChar = s[rightIdx];
    countMap[rightChar] = (countMap[rightChar] || 0) + 1;
    let window = rightIdx - leftIdx + 1;
    maxF = Math.max(maxF, countMap[rightChar]);

    while (window - maxF > k) {
      let leftChar = s[leftIdx];
      countMap[leftChar] = countMap[leftChar] - 1;
      leftIdx++;
      window = rightIdx - leftIdx + 1;
    }

    maxLength = Math.max(maxLength, window);
  }

  return maxLength;
};

const incrementCount = (char, countMap) => {
  countMap[char] = (countMap[char] || 0) + 1;
};

const decrementCount = (char, countMap) => {
  countMap[char] = countMap[char] - 1;
};