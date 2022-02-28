class StrandSort {
  constructor(output) {
    this.output = output
  }

  sort(input, output) {
    if (input.length === 0) return
    let subArr = []
    subArr.push(input.shift())
    let i = 0

    while (i < input.length) {
      if (input[i] > subArr[subArr.length - 1]) {
        subArr.push(input[i])
        input.splice(i, 1)
      } else i++
    }

    this.output = this.merge(this.output, subArr)

    this.sort(input, this.output)
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
