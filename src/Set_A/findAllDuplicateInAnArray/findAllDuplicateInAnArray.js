var findDuplicates = function(nums) {
  const duplicates = [];

  let i = 0;
  while (i < nums.length) {
      if (nums[i] !== nums[nums[i] - 1]) {
          [nums[i], nums[nums[i] - 1]] = [nums[nums[i] - 1], nums[i]];
      } else {
          i++;
      }
  }

   for (let j = 0; j < nums.length; j++) {
      if (nums[j] !== j + 1) {
          duplicates.push(nums[j]);
      }
  }

  return duplicates;
};

module.exports = findDuplicates;