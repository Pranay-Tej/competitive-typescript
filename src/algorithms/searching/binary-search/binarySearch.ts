export default function binarySearch(
  sortedArray: any[],
  searchElement: number
): number {
  let start = 0;
  let end = sortedArray.length - 1;
  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);

    if (sortedArray[mid] === searchElement) {
      return mid;
    } else if (sortedArray[mid] > searchElement) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return -1;
}
