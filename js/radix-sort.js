const radixSort = (initialArray) => {
  let arr = [...initialArray]
  let max = Math.max.apply(Math, arr)

  for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
    radixHelper(arr, exp)
  }

  return arr
}

const radixHelper = (arr, exp) => {
  let n = arr.length
  let out = Array.from({ length: n }, (_) => 0)
  let count = Array.from({ length: 10 }, (_) => 0)

  for (let i = 0; i < n; i++) {
    count[Math.floor(arr[i] / exp) % 10]++
  }

  for (let i = 1; i < 10; i++) {
    count[i] += count[i - 1]
  }

  for (let i = n - 1; i >= 0; i--) {
    out[count[Math.floor(arr[i] / exp) % 10] - 1] = arr[i]
    count[Math.floor(arr[i] / exp) % 10]--
  }

  for (let i = 0; i < n; i++) {
    arr[i] = out[i]
  }
}
