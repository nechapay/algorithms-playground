const oddEvenSort = (initialArray) => {
  let arr = [...initialArray]
  let n = arr.length
  let isSorted = false

  while (!isSorted) {
    isSorted = true

    for (let i = 1; i < n - 2; i = i + 2) {
      if (arr[i] > arr[i + 1]) {
        let swap = arr[i]
        arr[i] = arr[i + 1]
        arr[i + 1] = swap
        isSorted = false
      }
    }

    for (let i = 0; i < n - 1; i = i + 2) {
      if (arr[i] > arr[i + 1]) {
        let swap = arr[i]
        arr[i] = arr[i + 1]
        arr[i + 1] = swap
        isSorted = false
      }
    }
  }

  return arr
}
