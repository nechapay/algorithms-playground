const stoogeSort = (arr, l, h) => {
  if (l >= h) return

  //swap
  if (arr[l] > arr[h]) {
    let tmp = arr[l]
    arr[l] = arr[h]
    arr[h] = tmp
  }

  if (h - l + 1 > 2) {
    let t = parseInt((h - l + 1) / 3, 10)
    stoogeSort(arr, l, h - t)
    stoogeSort(arr, l + t, h)
    stoogeSort(arr, l, h - t)
  }
}
