class Node {
  constructor(key) {
    this.key = key
    this.left = null
    this.right = null
  }
}
class BinaryTree {
  constructor() {
    this.root = null
  }
  // 插入节点
  insert(key) {
    if(this.root === null) {
      this.root = new Node(key)
    } else {
      this.insertNode(this.root,key)
    }
  }
  // 指定节点插入子节点
  insertNode(node,key) {
    if(key < node.key) {
      if(node.left) {
        this.insertNode(node.left,key)
      } else {
        node.left = new Node(key)
      }
    } else {
      if(node.right) {
        this.insertNode(node.right,key)
      } else {
        node.right = new Node(key)
      }
    }
  }
}

const binaryTree = new BinaryTree()
binaryTree.insert(10)
binaryTree.insert(12)
binaryTree.insert(9)
console.log(binaryTree);