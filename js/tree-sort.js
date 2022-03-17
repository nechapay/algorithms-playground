class Node {
  constructor(data) {
    this.data = data
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor() {
    // root of a binary search tree
    this.root = null
  }

  // function to be implemented
  insert(data) {
    let newNode = new Node(data)

    if (this.root === null) {
      this.root = newNode
    } else {
      this.insertNode(this.root, newNode)
    }
  }

  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode
      } else {
        this.insertNode(node.left, newNode)
      }
    } else {
      if (node.right === null) {
        node.right = newNode
      } else {
        this.insertNode(node.right, newNode)
      }
    }
  }

  inorder(node, arr) {
    if (node !== null) {
      this.inorder(node.left, arr)
      arr.push(node.data)
      this.inorder(node.right, arr)
    }
  }

  storeSorted(arr) {
    this.inorder(this.root, arr)
    return arr
  }
}

const treeSort = (arr) => {
  const bin = new BinarySearchTree()
  for (let i = 0; i < arr.length; i++) {
    bin.insert(arr[i])
  }
  return bin.storeSorted([])
}
