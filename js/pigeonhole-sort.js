const pigeonholeSort = (initialArray) => {
  let arr = [...initialArray]
  let max = Math.max.apply(Math, arr)
  let min = Math.min.apply(Math, arr)
  let range = max - min + 1
  let pigeonhole = Array.from({ length: range }, (i) => 0)
  for (let i = 0; i < arr.length; i++) {
    pigeonhole[arr[i] - min]++
  }
  let k = 0
  for (let i = 0; i < range; i++) {
    while (pigeonhole[i]-- > 0) {
      arr[k++] = i + min
    }
  }
  return arr
}
