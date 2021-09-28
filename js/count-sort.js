const countSort = (arr) => {
  let max = Math.max.apply(Math, arr)
  let min = Math.min.apply(Math, arr)

  let range = max - min + 1
  let count = Array.from({length: range}, (_) => 0)
  let output = Array.from({length: arr.length}, (_) => 0)

  for (let i = 0; i < arr.length; i++) {
    count[arr[i] - min]++
  }

  for (let i = 1; i < count.length; i++) {
    count[i] += count[i - 1]
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    output[count[arr[i] - min] - 1] = arr[i]
    count[arr[i] - min]--
  }

  for (let i = 0; i < arr.length; i++) {
    arr[i] = output[i]
  }

  return arr
}
