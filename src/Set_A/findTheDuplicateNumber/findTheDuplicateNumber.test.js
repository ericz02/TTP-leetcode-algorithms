const findDuplicate = require('./findTheDuplicateNumber');

describe('Find The Duplicate Number', () => {
  test('Example 1', () => {
    const nums = [1, 3, 4, 2, 2];
    expect(findDuplicate(nums)).toBe(2);
  });

  test('Example 2', () => {
    const nums = [3, 1, 3, 4, 2];
    expect(findDuplicate(nums)).toBe(3);
  });

});
