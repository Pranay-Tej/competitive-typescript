export default function quickSort(unsortedNumbers: number[]): number[] {
  if (unsortedNumbers.length === 0) {
    return unsortedNumbers;
  }
  let sortedNumbers = [...unsortedNumbers];
  quickSortImpl(sortedNumbers, 0, unsortedNumbers.length - 1);
  return sortedNumbers;
}

function quickSortImpl(
  unsortedNumbers: number[],
  start: number,
  end: number
): void {
  if (start >= end) {
    return;
  }

  let pivotIndex = partition(unsortedNumbers, start, end);
  quickSortImpl(unsortedNumbers, start, pivotIndex - 1);
  quickSortImpl(unsortedNumbers, pivotIndex + 1, end);
}

function partition(
  unsortedNumbers: number[],
  start: number,
  end: number
): number {
  let pivotIndex = start;
  let pivot = unsortedNumbers[end];

  for (let i = start; i < end; i++) {
    if (unsortedNumbers[i] <= pivot) {
      [unsortedNumbers[i], unsortedNumbers[pivotIndex]] = [
        unsortedNumbers[pivotIndex],
        unsortedNumbers[i]
      ];
      pivotIndex++;
    }
  }

  unsortedNumbers[end] = unsortedNumbers[pivotIndex];
  unsortedNumbers[pivotIndex] = pivot;

  return pivotIndex;
}
