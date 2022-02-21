const bubbleSort = (initialArray) => {
  let arr = [...initialArray]
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let swap = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = swap
      }
    }
  }
  return arr
}

const bubbleSortRecursive = (arr, n) => {
  if (n == 1) {
    return
  }

  for (let i = 0; i < n - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      let swap = arr[i]
      arr[i] = arr[i + 1]
      arr[i + 1] = swap
    }
  }
  bubbleSortRecursive(arr, n - 1)
}
