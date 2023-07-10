const maxArea = require('./maxArea');

describe('maxArea', () => {
  test('should calculate the maximum area between lines', () => {
    const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
    expect(maxArea(height)).toBe(49);
  });

  test('should handle an empty array', () => {
    const height = [];
    expect(maxArea(height)).toBe(0);
  });

  test('should handle an array with one element', () => {
    const height = [5];
    expect(maxArea(height)).toBe(0);
  });

  test('should calculate the maximum area when the lines are in descending order', () => {
    const height = [7, 6, 5, 4, 3, 2, 1];
    expect(maxArea(height)).toBe(12);
  });

  // Add more test cases as needed
});
