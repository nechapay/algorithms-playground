class CombSort {
  constructor() {}

  getNextGap = (gap) => {
    gap = parseInt((gap * 10) / 13, 10)
    if (gap < 1) return 1
    return gap
  }

  sort = (initialArray) => {
    let arr = [...initialArray]
    const n = arr.length
    let gap = n

    let swapped = true

    while (gap != 1 || swapped) {
      gap = this.getNextGap(gap)

      swapped = false

      for (let i = 0; i < n - gap; i++) {
        if (arr[i] > arr[i + gap]) {
          let tmp = arr[i]
          arr[i] = arr[i + gap]
          arr[i + gap] = tmp

          swapped = true
        }
      }
    }
    return arr
  }
}
