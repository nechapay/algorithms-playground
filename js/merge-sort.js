// merge sort
const mergeAll = (left, right) => {
  let res = []
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      res.push(left.shift())
    } else {
      res.push(right.shift())
    }
  }
  while (left.length) {
    res.push(left.shift())
  }
  while (right.length) {
    res.push(right.shift())
  }
  return res
}

const merge = (initialArray) => {
  let arr = [...initialArray]
  if (arr.length < 2) {
    return arr
  }
  const mid = Math.floor(arr.length / 2)

  const left = arr.slice(0, mid)
  const right = arr.slice(mid, arr.length)
  return mergeAll(merge(left), merge(right))
}

const mergeSortIterative = (arr) => {
  if (arr == null) {
    return
  }

  if (arr.length > 1) {
    let mid = parseInt(arr.length / 2)

    let left = Array(mid).fill(0)
    for (let i = 0; i < mid; i++) {
      left[i] = arr[i]
    }

    let right = Array(arr.length - mid).fill(0)
    for (let i = mid; i < arr.length; i++) {
      right[i-mid] = arr[i]
    }

    mergeSortIterative(left)
    mergeSortIterative(right)

    let i = 0
    let j = 0
    let k = 0

    while (i < left.length && j < right.length) {
      if (left[i] < right[j]) {
        arr[k] = left[i]
        i++
      } else {
        arr[k] = right[j]
        j++
      }
      k++
    }
    while (i < left.length) {
      arr[k] = left[i]
      i++
      k++
    }
    while (j < right.length) {
      arr[k] = right[j]
      j++
      k++
    }
  }
}
