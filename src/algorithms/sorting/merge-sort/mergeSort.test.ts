import mergeSort from './mergeSort';

test('sorts array', () => {
  expect(mergeSort([10, 1, 25, 6, -7, 0])).toEqual([-7, 0, 1, 6, 10, 25]);
});
