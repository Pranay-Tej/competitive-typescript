import quickSort from './quickSort';

test('sorts array', () => {
  expect(quickSort([10, 1, 25, 6, -7, 0])).toEqual([-7, 0, 1, 6, 10, 25]);
});
