class BitonicSort {
  constructor() {}

  sort(arr, up) {
    this.bitonicSort(arr, 0, arr.length, up)
  }
  bitonicSort(arr, low, count, dir) {
    if (count > 1) {
      let k = parseInt(count / 2)
      this.bitonicSort(arr, low, k, 1)
      this.bitonicSort(arr, low + k, k, 0)
      this.merge(arr, low, count, dir)
    }
  }
  compareAndSwap(a, i, j, dir) {
    if ((a[i] > a[j] && dir === 1) || (a[i] < a[j] && dir === 0)) {
      let tmp = a[i]
      a[i] = a[j]
      a[j] = tmp
    }
  }
  merge(arr, low, count, dir) {
    if (count > 1) {
      let k = parseInt(count / 2)
      for (let i = low; i < low + k; i++) {
        this.compareAndSwap(arr, i, i + k, dir)
      }
      this.merge(arr, low, k, dir)
      this.merge(arr, low + k, k, dir)
    }
  }
}
