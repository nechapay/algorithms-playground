const bucketSort = (arr) => {
  let n = arr.length

  if (n <= 0) {
    return
  }

  let buckets = Array.from({ length: n }, () => [])

  for (let i = 0; i < n; i++) {
    let idx = arr[i] * n
    buckets[Math.floor(idx)].push(arr[i])
  }

  for (let i = 0; i < n; i++) {
    buckets[i].sort((a, b) => a - b)
  }

  let index = 0
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < buckets[i].length; j++) {
      arr[index++] = buckets[i][j]
    }
  }
  return arr
}
