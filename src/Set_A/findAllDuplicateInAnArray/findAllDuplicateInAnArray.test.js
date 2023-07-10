const findDuplicates = require('./findDuplicates');

describe('findDuplicates', () => {
  test('should return an array of duplicate numbers', () => {
    const nums = [1, 3, 4, 2, 2];
    expect(findDuplicates(nums)).toEqual([2]);
  });

  test('should handle multiple duplicate numbers', () => {
    const nums = [3, 1, 3, 4, 2];
    expect(findDuplicates(nums)).toEqual([3]);
  });

  test('should return an empty array if no duplicates are found', () => {
    const nums = [1, 2, 3, 4, 5];
    expect(findDuplicates(nums)).toEqual([]);
  });

  // Add more test cases as needed
});
