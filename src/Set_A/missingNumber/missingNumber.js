function missingNumber(nums) {
  let i = 0;

  // Iterate through the array
  while (i < nums.length) {
    const correctIndex = nums[i];
    if (nums[i] !== nums[correctIndex])
      [nums[i], nums[correctIndex]] = [nums[correctIndex], nums[i]];
    else
      i++;
  }

  // Iterate over the array again to find the missing number
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== j) {
      // If the current number is not equal to its index, return the index as the missing number
      return j;
    }
  }

  // If no missing number is found, the missing number is the last index (length of the array)
  return nums.length;
}

module.exports = missingNumber;
