class SingleLinkedListNode {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

class SingleLinkedList {
  constructor() {
    this.head = null
  }

  addNode(data) {
    if (this.head === null) {
      this.head = new SingleLinkedListNode(data)
      return
    }

    let current = this.head
    while (current.next !== null) current = current.next

    let newNode = new SingleLinkedListNode(data)
    current.next = newNode
  }

  printList() {
    let arr = []
    let n = this.head
    while (n !== null) {
      arr.push(n.data)
      n = n.next
    }
    return arr
  }

  get last() {
    let n = this.head
    while (n.next !== null) {
      n = n.next
    }
    return n
  }

  get first() {
    return this.head
  }
}
