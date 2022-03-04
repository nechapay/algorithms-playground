class PermutationSort {
  constructor() {
    this.count = 0
  }

  sort(arr) {
    while (!this.isSorted(arr)) {
      this.shuffle(arr)
      this.count++
    }
  }
  isSorted(arr) {
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < arr[i - 1]) return false
    }
    return true
  }

  shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      let num = Math.floor(Math.random() * (i + 1))
      let d = arr[num]
      arr[num] = arr[i]
      arr[i] = d
    }
  }

  get steps() {
    return this.count
  }
}
