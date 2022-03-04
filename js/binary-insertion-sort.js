class BinaryInsertionSort {
  constructor() {}
  sort(array) {
    for (let i = 1; i < array.length; i++) {
      let j = i - 1
      let x = array[i]
      let loc = Math.abs(this.binarySearch(array, x, 0, j))

      while (j >= loc) {
        array[j + 1] = array[j]
        j--
      }

      array[j + 1] = x
    }
  }
  binarySearch(arr, item, low, high) {
    if (high <= low) return item > arr[low] ? low + 1 : low

    let mid = Math.floor((low + high) / 2)

    if (item === arr[mid]) return mid + 1

    if (item > arr[mid]) return this.binarySearch(arr, item, mid + 1, high)

    return this.binarySearch(arr, item, low, mid - 1)
  }
}
