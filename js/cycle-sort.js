const cycleSort = (initialArray) => {
  let arr = [...initialArray]
  const n = arr.length

  for (let cycle = 0; cycle <= n - 2; cycle++) {
    let item = arr[cycle]

    let pos = cycle
    for (let i = cycle + 1; i < n; i++) {
      if (arr[i] < item) {
        pos++
      }
    }

    if (pos === cycle) {
      continue
    }

    while (item === arr[pos]) {
      pos++
    }

    if (pos !== cycle) {
      let tmp = item
      item = arr[pos]
      arr[pos] = tmp
    }

    while (pos !== cycle) {
      pos = cycle

      for (let j = cycle + 1; j < n; j++) {
        if (arr[j] < item) {
          pos++
        }
      }

      while (item === arr[pos]) {
        pos++
      }
      
      if (item !== arr[pos]) {
        let tmp = item
        item = arr[pos]
        arr[pos] = tmp
      }
    }
  }

  return arr
}
