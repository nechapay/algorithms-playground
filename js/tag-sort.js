const tagSort = (arr) => {
  let n = arr.length
  let tag = Array.from({ length: n }, (i, k) => (i = k))
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (arr[tag[i]] > arr[tag[j]]) {
        let tmp = tag[i]
        tag[i] = tag[j]
        tag[j] = tmp
      }
    }
  }
  let result = []
  for (let i = 0; i < n; i++) {
    result.push(arr[tag[i]])
  }
  return result
}
