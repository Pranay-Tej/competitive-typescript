import fibonacciBottomUp from '../fibonacciBottomUp';
import fibonacciTopDown from '../fibonacciTopDown';

describe('fibonacci', () => {
  describe('fibonacciTopDown', () => {
    test('n=7', () => {
      expect(fibonacciTopDown(7)).toEqual([1, 1, 2, 3, 5, 8, 13]);
    });
  });

  describe.concurrent('fibonacciBottomUp', () => {
    test('n=7', () => {
      expect(fibonacciBottomUp(7)).toEqual([1, 1, 2, 3, 5, 8, 13]);
    });
  });
});
