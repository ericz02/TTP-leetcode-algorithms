const removeDuplicates = require('./removeDuplicates');

describe('removeDuplicates', () => {
  test('should remove duplicates and return the length of the modified array', () => {
    const nums = [1, 1, 2];
    expect(removeDuplicates(nums)).toBe(2);
    expect(nums).toEqual([1, 2]);
  });

  test('should handle an empty array', () => {
    const nums = [];
    expect(removeDuplicates(nums)).toBe(0);
    expect(nums).toEqual([]);
  });

  test('should handle an array with no duplicates', () => {
    const nums = [1, 2, 3, 4, 5];
    expect(removeDuplicates(nums)).toBe(5);
    expect(nums).toEqual([1, 2, 3, 4, 5]);
  });

  test('should handle an array with all duplicates', () => {
    const nums = [1, 1, 1, 1, 1];
    expect(removeDuplicates(nums)).toBe(1);
    expect(nums).toEqual([1]);
  });

});
