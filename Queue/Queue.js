function Queue() {
  this.items = {}
  this.lowestCount = 0
  this.length = 0
}
Queue.prototype.enqueue = function(ele) {
  this.items[this.length] = ele
  this.length++
}
Queue.prototype.dequeue = function() {
  if(this.isEmpty()) return undefined
  let ele = this.items[this.lowestCount]
  delete this.items[this.lowestCount]
  this.lowestCount++
  return ele
}
Queue.prototype.isEmpty = function() {
  return this.length - this.lowestCount === 0
}
Queue.prototype.peek = function() {
  if(this.isEmpty()) return undefined
  return this.items[this.lowestCount]
}
Queue.prototype.size = function() {
  return this.length
}
Queue.prototype.clear = function() {
  this.items = {}
  this.lowestCount = 0
  this.length = 0
}

module.exports = Queue