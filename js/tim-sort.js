class TimSort {
  constructor(minMerge) {
    this.MIN_MERGE = minMerge || 32
  }

  minRunLength = (n) => {
    let r = 0
    while (n >= this.MIN_MERGE) {
      r |= n & 1
      n >>= 1
    }
    return n + r
  }

  insertionSort = (arr, left, right) => {
    for (let i = left + 1; i <= right; i++) {
      let temp = arr[i]
      let j = i - 1

      while (j >= left && arr[j] > temp) {
        arr[j + 1] = arr[j]
        j--
      }
      arr[j + 1] = temp
    }
  }

  merge = (arr, l, m, r) => {
    let len1 = m - l + 1
    let len2 = r - m
    let left = new Array(len1)
    let right = new Array(len2)
    for (let x = 0; x < len1; x++) {
      left[x] = arr[l + x]
    }
    for (let x = 0; x < len2; x++) {
      right[x] = arr[m + 1 + x]
    }

    let i = 0
    let j = 0
    let k = l

    while (i < len1 && j < len2) {
      if (left[i] <= right[j]) {
        arr[k] = left[i]
        i++
      } else {
        arr[k] = right[j]
        j++
      }
      k++
    }

    while (i < len1) {
      arr[k] = left[i]
      k++
      i++
    }

    while (j < len2) {
      arr[k] = right[j]
      k++
      j++
    }
  }

  sort = (initialArray) => {
    let arr = [...initialArray]
    const n = arr.length
    let minRun = this.minRunLength(this.MIN_MERGE)

    for (let i = 0; i < n; i += minRun) {
      this.insertionSort(arr, i, Math.min(i + this.MIN_MERGE - 1, n - 1))
    }

    for (let size = minRun; size < n; size = 2 * size) {
      for (let left = 0; left < n; left += 2 * size) {
        let mid = left + size - 1
        let right = Math.min(left + 2 * size - 1, n - 1)
        if (mid < right) {
          this.merge(arr, left, mid, right)
        }
      }
    }
    return arr
  }
}
