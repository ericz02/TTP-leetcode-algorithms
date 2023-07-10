var findDuplicate = function(nums) {
  let slow = nums[0];
  let fast = nums[0];

  // Move slow pointer by 1 step and fast pointer by 2 steps until they meet
  do {
      slow = nums[slow];
      fast = nums[nums[fast]];
  } while (slow !== fast);

  // Move slow pointer to the start and move both pointers by 1 step until they meet again
  slow = nums[0];
  while (slow !== fast) {
      slow = nums[slow];
      fast = nums[fast];
  }

  // Return the duplicate number
  return slow;
};

module.exports = findDuplicate;
