export default function fibonacciTopDown(num: number): number[] {
  let fibonacciSeries = Array(num).fill(-1);

  let memo = new Map<number, number>();

  fibonacciTopDownImpl(num, memo);

  memo.forEach((value, key) => {
    fibonacciSeries[key - 1] = value;
  });

  return fibonacciSeries;
}

export function fibonacciTopDownImpl(
  num: number,
  memo: Map<number, number>
): number {
  if (memo.has(num)) {
    return memo.get(num);
  }

  if (num === 1 || num === 2) {
    memo.set(num, 1);
    return 1;
  }

  memo.set(
    num,
    fibonacciTopDownImpl(num - 1, memo) + fibonacciTopDownImpl(num - 2, memo)
  );
  return memo.get(num);
}
