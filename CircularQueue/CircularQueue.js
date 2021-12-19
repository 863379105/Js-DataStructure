var CircularQueue = function(k) {
  if(k){
    k = k + 1
  }
  function Node(e){
    this.data = e || -1
    this.next = null
  }
  let vHead = new Node()
  // this.head = vHead.next // 头指针
  // this.rear = this.head
  this.length = 0
  let p = vHead
  while(k--) { // 创建队列
    let node = new Node()
    p.next = node
    p = p.next
    this.length++
  }
  this.length--
  p.next = vHead.next// 成环
  this.head = vHead.next
  this.rear = this.head
};
/** 
 * @param {number} value
 * @return {boolean}
 */
 CircularQueue.prototype.enQueue = function(value) {
  if(this.isFull()) return false
  this.rear.data = value
  this.rear = this.rear.next
  return true
};

/**
 * @return {boolean}
 */
CircularQueue.prototype.deQueue = function() {
  if(this.isEmpty()) return false
  this.head.data = null
  this.head = this.head.next
  return true
};

/**
 * @return {number}
 */
CircularQueue.prototype.Front = function() {
  if(this.isEmpty()) return -1
  return this.head.data
};

/**
 * @return {number}
 */
CircularQueue.prototype.Rear = function() {
  if(this.isEmpty()) return -1
  let p = this.head
  while(p.next !== this.rear) {
    p = p.next
  }
  return p.data
};

/**
 * @return {boolean}
 */
CircularQueue.prototype.isEmpty = function() {
  if(this.head === this.rear) return true
  return false
};

/**
 * @return {boolean}
 */
CircularQueue.prototype.isFull = function() {
  if(this.rear.next === this.head) return true
  return false
};