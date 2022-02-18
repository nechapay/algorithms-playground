const selectionSort = (initialArray) => {
  let arr = [...initialArray]
  let n = arr.length
  for (let i = 0; i < n; i++) {
    let j = select(arr, i)
    let swap = arr[i]
    arr[i] = arr[j]
    arr[j] = swap
  }

  return arr
}

function select(arr, i) {
  let min = arr[i],
    idx = i
  for (let j = i; j < arr.length; j++) {
    if (arr[j] <= min) {
      min = arr[j]
      idx = j
    }
  }

  return idx
}
