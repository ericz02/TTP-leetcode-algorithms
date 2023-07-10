const twoSum = require('./twoSum');

describe('twoSum', () => {
  test('should find the indices of the two numbers that sum up to the target', () => {
    const numbers = [2, 7, 11, 15];
    const target = 9;
    expect(twoSum(numbers, target)).toEqual([1, 2]);
  });

  test('should handle negative numbers and a negative target', () => {
    const numbers = [-2, -1, 0, 4, 5];
    const target = -3;
    expect(twoSum(numbers, target)).toEqual([1, 2]);
  });

  test('should return an empty array if no solution is found', () => {
    const numbers = [1, 2, 3, 4, 5];
    const target = 10;
    expect(twoSum(numbers, target)).toEqual([]);
  });

});
