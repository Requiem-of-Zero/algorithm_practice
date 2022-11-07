// algo helpers
const filterAlphaNumeric = (s, nonAlphaNumeric = new RegExp('[^a-z0-9]', 'gi')) => {
    s.toLowerCase().replace(nonAlphaNumeric, '')
}
// end algo helpers

var isPalindrome = function(s) {
    const newStr = filterAlphaNumeric(s)
    return newStr === newStr.split('').reverse().join('');
}

var threeSum = function (nums) {
  let res = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    let currVal = nums[i];
    if (i > 0 && currVal === nums[i - 1]) continue;
    let left = i + 1,
      right = nums.length - 1;

    while (left < right) {
      let threeSum = currVal + nums[left] + nums[right];
      if (threeSum > 0) {
        right--;
      } else if (threeSum < 0) {
        left++;
      } else {
        res.push([currVal, nums[left], nums[right]]);
        left++;
        while (nums[left] === nums[left - 1] && left < right) {
          left++;
        }
      }
    }
  }
  return res;
};

/*
    Leetcode 11. Container with Max Area

    while left is less than right
        if left is less than right
            increase left by 1
        if right is less than right
            increase right by 1
        else 
            increase left by 1
        always get the maxarea of the iteration
            maxArea is equal to Math.max(maxArea, maxHeight * distance)
            
    return maxArea
 */

var maxArea = function(height) {
    let left = 0, 
        right = height.length - 1, 
        maxArea = 0;

    while(left < right){
        const maxHeight = Math.min(height[left], height[right]),
          distance = (-left) + right;

        maxArea = Math.max(maxArea, maxHeight * distance)
        if(height[left] <= height[right]){
            left++
        } else {
            right--
        }
    }
    
    return maxArea
};