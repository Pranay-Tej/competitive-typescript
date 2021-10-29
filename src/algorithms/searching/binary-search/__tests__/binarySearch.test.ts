import binarySearch from '../binarySearch';

describe('binary search', () => {
  test('finds element', () => {
    expect(binarySearch([-1, 0, 10, 20, 30], 20)).toEqual(3);
  });
  test('return -1 if not found', () => {
    expect(binarySearch([-1, 0, 10, 20, 30], 50)).toEqual(-1);
  });
});
