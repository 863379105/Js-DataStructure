function BinarySearch(target , array) {
  let left = 0, right = array.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2)
    if (target < array[mid]) {
      right = mid - 1;
    } else if (target > array[mid]) {
      left = mid + 1;
    } else {
      return mid
    }
  }
  return -1
}
