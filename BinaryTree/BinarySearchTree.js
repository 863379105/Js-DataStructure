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
  // 中序遍历树 LDR
  inOrderTraverse(callback) {
    this.inOrderTraverseNode(this.root,callback)
  }
  inOrderTraverseNode(node,callback) {
    if(node) {
      this.inOrderTraverseNode(node.left,callback)
      callback && callback(node.key)
      this.inOrderTraverseNode(node.right,callback)
    }
  }
  // 先序遍历
  preOrderTraverse(callback) {
    this.preOrderTraverseNode(this.node,callback)
  }
  preOrderTraverseNode(node,callback) {
    if(node) {
      callback && callback(node.key)
      this.preOrderTraverseNode(node.left)
      this.preOrderTraverseNode(node.right)
    }
  }
  // 后序遍历
  postOrderTraverse(callback) {
    this.postOrderTraverseNode(this.root,callback)
  }
  postOrderTraverseNode(node,callback) {
    this.postOrderTraverseNode(node.left,callback)
    this.postOrderTraverseNode(node.right,callback)
    callback && callback(node.key)
  }
  // search
  search(key) {
    return this.searchNode(this.root,key)
  }
  searchNode(node,key) {
    if(node) {
      if(node.key === key) {
        return true
      } else if(node.key > key) {
        this.searchNode(node.left,key)
      }else {
        this.searchNode(node.right,key)
      }
    } else {
      return false
    }
  }
}

const binaryTree = new BinaryTree()
// binaryTree.insert(11)
// binaryTree.insert(7)
// binaryTree.insert(15)
// binaryTree.insert(5)
// binaryTree.insert(3)
// binaryTree.insert(9)
// binaryTree.insert(8)
// binaryTree.insert(10)
// binaryTree.insert(13)
// binaryTree.insert(12)
// binaryTree.insert(14)
// binaryTree.insert(20)
// binaryTree.insert(18)
// binaryTree.insert(25)
// binaryTree.insert(6)
// console.dir(binaryTree);
// binaryTree.preOrderTraverse()
// result = []
// binaryTree.inOrderTraverse((value) => {
//   result.push(value)
// })
// console.log(result);
// binaryTree.postOrderTraverse()