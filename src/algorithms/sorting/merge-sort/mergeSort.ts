export default function mergeSort(unsortedNumbers: number[]): number[] {
  if (unsortedNumbers.length === 0) {
    return unsortedNumbers;
  }
  let sortedNumbers = [...unsortedNumbers];
  mergeSortImpl(sortedNumbers, 0, unsortedNumbers.length - 1);
  return sortedNumbers;
}

function mergeSortImpl(
  unsortedNumbers: number[],
  start: number,
  end: number
): void {
  if (start >= end) {
    return;
  }

  let mid = start + Math.floor((end - start) / 2);
  mergeSortImpl(unsortedNumbers, start, mid);
  mergeSortImpl(unsortedNumbers, mid + 1, end);
  merge(unsortedNumbers, start, mid, end);
}

function merge(
  unsortedNumbers: number[],
  start: number,
  mid: number,
  end: number
): void {
  let leftArray = unsortedNumbers.slice(start, mid + 1);
  let rightArray = unsortedNumbers.slice(mid + 1, end + 1);

  let leftRunner = 0;
  let rightRunner = 0;
  let mainRunner = start;

  while (leftRunner < leftArray.length && rightRunner < rightArray.length) {
    if (leftArray[leftRunner] <= rightArray[rightRunner]) {
      unsortedNumbers[mainRunner] = leftArray[leftRunner];
      leftRunner++;
    } else {
      unsortedNumbers[mainRunner] = rightArray[rightRunner];
      rightRunner++;
    }
    mainRunner++;
  }

  while (leftRunner < leftArray.length) {
    unsortedNumbers[mainRunner] = leftArray[leftRunner];
    leftRunner++;
    mainRunner++;
  }

  while (rightRunner < rightArray.length) {
    unsortedNumbers[mainRunner] = rightArray[rightRunner];
    rightRunner++;
    mainRunner++;
  }
}
