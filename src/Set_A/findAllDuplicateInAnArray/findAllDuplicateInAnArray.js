const findDuplicates = function (nums) {
  const duplicates = [];

  let i = 0;
  while (i < nums.length) {
    if (nums[i] !== nums[nums[i] - 1]) {
      [nums[i], nums[nums[i] - 1]] = [nums[nums[i] - 1], nums[i]]; // Swap elements to their correct positions
    } else {
      i++; // Move to the next index
    }
  }

  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== j + 1) {
      duplicates.push(nums[j]); // Add duplicates to the result array
    }
  }

  return duplicates;
};

module.exports = findDuplicates;
