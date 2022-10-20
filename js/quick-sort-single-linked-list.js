const quickSortSLList = (initialArray) => {
  let arr = [...initialArray]
  let list = new SingleLinkedList()
  arr.forEach((i) => {
    list.addNode(i)
  })
  let low = list.first
  let high = list.last
  sortList(low, high, list)
  return list.printList()
}

const sortList = (start, end, list) => {
  if (start === null || start === end || start === end.next) return

  let pi = partitionList(start, end, list)
  sortList(start, pi, list)

  if (pi !== null && pi === start) sortList(pi.next, end, list)
  else if (pi !== null && pi.next !== null) sortList(pi.next.next, end, list)
}

const partitionList = (start, end, list) => {
  if (start === end || start === null || end === null) return start

  let prev = start
  let curr = start
  let pi = end.data
  while (start !== end) {
    if (start.data < pi) {
      prev = curr
      let swap = curr.data
      curr.data = start.data
      start.data = swap
      curr = curr.next
    }
    start = start.next
  }

  let swap = curr.data
  curr.data = pi
  end.data = swap
  return prev
}
