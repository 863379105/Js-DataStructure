function Node(data) {
  this.data = data
  this.next = null
}
function LinkList() {
  this.head = null
  this.length = 0
}
// size()
LinkList.prototype.size = function() {
  return this.length
}
// isEmpty()
LinkList.prototype.isEmpty = function() {
  return this.length ? false : true
}
// push(data)
LinkList.prototype.push = function(data) {
  let node = new Node(data) // 创建节点
  if(this.head === null) {
    this.head = node
  } else {
    let current = this.head
    while(current.next !== null) {
      current = current.next
    }
    current.next = node
  }
  this.length++
}
// removeAt(position)
LinkList.prototype.removeAt = function(position) {
  if(position > -1 && position < this.length) {
    let current = this.head
    if(position === 0) {
      this.head = current.next
    } else {
      let previous
      for(let i = 0; i < position; i++ ) {
        previous = current
        current = current.next
      }
      previous.next = current.next
    }
    this.length--
    return current.data
  }
  return null
}
// getElementAt(index)
LinkList.prototype.getElementAt = function(index) {
  if(index >= 0 && index < this.length) {
    let current = this.head
    if(index > 0) {
      for(let i = 0; i < index; i++) {
        current = current.next
      }
    }
    return current.data
  }
  return null
}
// insert(element, position)
LinkList.prototype.insert = function(element, position) {
  let node = new Node(element)
  let current = this.head
  if(position >= 0 && position <= this.length) {
    if(position === 0) {
      this.head = node
      node.next = current
    }else {
      let previous
      for(let i = 0; i < position; i++) {
        previous = current
        current = current.next
      }
      previous.next = node
      node.next =  current
    }
    this.length++
    return true
  }
  return false
}
// indexOf(element) 
LinkList.prototype.indexOf = function(element) {
  let current = this.head
  for(let i = 0; i < this.length; i++) {
    if(current.data == element) {
      return i
    }
    current = current.next
  }
  return -1
}
// remove(element)
LinkList.prototype.remove = function(element) {
  let index = this.indexOf(element)
  return this.removeAt(index)
}
// toString()
LinkList.prototype.toString = function() {
  if(!this.length) {
    return ''
  } else {
    let current = this.head
    let objString = ''
    while(current.next !== null) {
      objString = objString + current.data + ','
      current = current.next
    }
    objString = objString + current.data
    return objString
  }
}
