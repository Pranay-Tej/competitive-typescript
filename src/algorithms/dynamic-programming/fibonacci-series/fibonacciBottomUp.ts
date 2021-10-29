export default function fibonacciBottomUp(num: number): number[] {
  let fibonacciSeries = Array(num).fill(-1);
  fibonacciSeries[0] = 1;
  fibonacciSeries[1] = 1;

  for (let i = 2; i < num; i++) {
    fibonacciSeries[i] = fibonacciSeries[i - 1] + fibonacciSeries[i - 2];
  }

  return fibonacciSeries;
}
