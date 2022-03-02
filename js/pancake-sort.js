class PancakeSort {
  constructor() {}

  sort(arr) {
    for (let current = arr.length; current > 1; --current) {
      let max = this.findMax(arr, current)

      if(max !== current - 1){
        this.flip(arr, max)
        this.flip(arr, current - 1)
      }
    }
  }

  flip(arr, i) {
    let temp
    let start = 0
    while (start < i) {
      temp = arr[start]
      arr[start] = arr[i]
      arr[i] = temp
      start++
      i--      
    }
  }

  findMax(arr, n) {
    let max = 0
    for (let i = 0; i < n; ++i) {
      if(arr[i] > arr[max]) {
        max = i
      }      
    }
    return max
  }
}