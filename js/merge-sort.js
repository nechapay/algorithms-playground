// merge sort
const mergeAll = (left, right) => {
  let res = []
  while (left.length && right.length) {
    if(left[0] < right[0]) {
      res.push(left.shift())
    } else {
      res.push(right.shift())
    }
  }
  while(left.length) {
    res.push(left.shift())
  }
  while(right.length) {
    res.push(right.shift())
  }
  return res
}

const merge = (arr) => {
  if(arr.length < 2) {
    return arr
  }
  const mid = Math.floor(arr.length / 2)

  const left = arr.slice(0, mid)
  const right = arr.slice(mid, arr.length)
  return mergeAll(merge(left), merge(right))
}

