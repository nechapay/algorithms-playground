// class Node {
//   constructor(data) {
//     this.data = data
//     this.left = null
//     this.right = null
//   }
// }

class CartesianTree {
  constructor() {}

  build(arr) {
    let n = arr.length
    let parent = Array.from({ length: n }, (i) => (i = -1))
    let leftChild = Array.from({ length: n }, (i) => (i = -1))
    let rightChild = Array.from({ length: n }, (i) => (i = -1))

    let root = 0
    let last

    for (let i = 1; i < n; i++) {
      last = i - 1
      rightChild[i] = -1

      while (arr[last] >= arr[i] && last !== root) {
        last = parent[last]
      }

      if (arr[last] >= arr[i]) {
        parent[root] = i
        leftChild[i] = root
        root = i
      } else if (rightChild[last] === -1) {
        rightChild[last] = i
        parent[i] = last
        leftChild[i] = -1
      } else {
        parent[rightChild[last]] = i
        leftChild[i] = rightChild[last]
        rightChild[last] = i
        parent[i] = last
      }
    }
    parent[root] = -1
    return this.buildTreeUtil(root, arr, parent, leftChild, rightChild)
  }

  buildTreeUtil(root, arr, parent, leftChild, rightChild) {
    if (root === -1) return null

    let node = new Node()
    node.data = arr[root]

    node.left = this.buildTreeUtil(leftChild[root], arr, parent, leftChild, rightChild)
    node.right = this.buildTreeUtil(rightChild[root], arr, parent, leftChild, rightChild)

    return node
  }

  inOrder(node, arr) {
    if (node === null) return

    this.inOrder(node.left, arr)
    arr.push(node.data)
    this.inOrder(node.right, arr)
  }

  preOrder(node, arr) {
    if (node === null) return
    arr.push(node.data)
    this.preOrder(node.right, arr)
    this.preOrder(node.left, arr)
  }

  pQTraversal(root, pQueue) {
    if (root === null) return

    pQueue.enqueue(root.data, root.data)
    this.pQTraversal(root.left, pQueue)
    this.pQTraversal(root.right, pQueue)
  }
}

const cartesianTreeSort = (arr) => {
  let cartesianTree = new CartesianTree()
  let root = cartesianTree.build(arr)
  let pQueue = new PriorityQueue()
  cartesianTree.pQTraversal(root, pQueue)
  return pQueue.printPQueue()
}
