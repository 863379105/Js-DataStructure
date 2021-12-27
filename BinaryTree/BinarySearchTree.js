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
  inOrderTraverse(node) {
    if(node) {
      this.inOrderTraverse(node.left)
      console.log(node.key);
      this.inOrderTraverse(node.right)
    }
    if(node === undefined) {
      this.inOrderTraverse(this.root.left)
      console.log(this.root.key);
      this.inOrderTraverse(this.root.right)
    }
  }
  // 先序遍历
  preOrderTraverse(node) {
    if(node) {
      console.log(node.key);
      this.preOrderTraverse(node.left)
      this.preOrderTraverse(node.right)
    }
    if(node === undefined) {
      console.log(this.root.key);
      this.preOrderTraverse(this.root.left)
      this.preOrderTraverse(this.root.right)
    }
  }
  // 后序遍历
  postOrderTraverse(node) {
    if(node) {
      this.postOrderTraverse(node.left)
      this.postOrderTraverse(node.right)
      console.log(node.key);
    }
    if(node === undefined) {
      this.postOrderTraverse(this.root.left)
      this.postOrderTraverse(this.root.right)
      console.log(this.root.key);
    }
  }
}

const binaryTree = new BinaryTree()
binaryTree.insert(11)
binaryTree.insert(7)
binaryTree.insert(15)
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
binaryTree.preOrderTraverse()
console.log('---------');
binaryTree.inOrderTraverse()
console.log('---------');
binaryTree.postOrderTraverse()