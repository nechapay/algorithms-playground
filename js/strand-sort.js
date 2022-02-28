class StrandSort {
  constructor(input, output) {
    this.input = input
    this.output = output
  }

  sort() {
    if (this.input.length === 0) return
    let subArr = []
    subArr.push(this.input[0])
    this.input.splice(0, 1)
    let i = 0

    while (i < this.input.length) {
      if (this.input[i] > subArr[subArr.length - 1]) {
        subArr.push(this.input[i])
        this.input.splice(i, 1)
      } else i++
    }

    this.output = this.merge(this.output, subArr)

    this.sort(this.input, this.output)
  }

  merge(left, right) {
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

  get sorted() {
    return this.output
  }
}
