const sleepSort = (initialArray, cb) => {
  let arr = [...initialArray]
  let output = []
  let max = Math.max.apply(Math, arr)
  for (let i = 0; i < arr.length; i++) {
    setTimeout(() => {
      output.push(arr[i])
      if (arr[i] === max) {
        cb(output)
      }
    }, arr[i] * 10)
  }
}
