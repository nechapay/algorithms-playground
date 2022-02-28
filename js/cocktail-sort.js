const cocktailSort = (initialArray) => {
  let arr = [...initialArray]
  let start = 0
  let swapped = true
  let end = arr.length

  while (swapped) {
    swapped = false
    for (let i = start; i < end - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let tmp = arr[i]
        arr[i] = arr[i + 1]
        arr[i + 1] = tmp
        swapped = true
      }
    }
    if (!swapped) break

    swapped = false

    end--

    for (let i = end - 1; i >= start; i--) {
      if (arr[i] > arr[i + 1]) {
        let tmp = arr[i]
        arr[i] = arr[i + 1]
        arr[i + 1] = tmp
        swapped = true
      }
    }
    start++
  }

  return arr
}
