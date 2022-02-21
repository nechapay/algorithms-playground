const insertionSort = (initialArray) => {
  let arr = [...initialArray]
  const n = arr.length
  for (let i = 1; i < n; i++) {
    let temp = arr[i]
    let j = i - 1
    while (j >= 0 && arr[j] > temp) {
      arr[j + 1] = arr[j]
      j--
    }
    arr[j + 1] = temp
  }
  return arr
}

const insertionSortRecursive = (arr, n) => {
  if (n <= 1) return
  
  insertionSortRecursive(arr, n - 1)

  let last = arr[n - 1]
  let j = n - 2

  while (j >= 0 && arr[j] > last) {
    arr[j + 1] = arr[j]
    j--
  }
  arr[j + 1] = last
}
