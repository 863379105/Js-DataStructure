function Stack() {
  this.items = []
}
Stack.prototype.push = function(ele) {
  this.items.push(ele)
}
Stack.prototype.pop = function() {
  if(this.isEmpty()) return undefined
  return this.items.pop()
}
Stack.prototype.peek = function() {
  return this.items[this.items.length - 1]
}
Stack.prototype.isEmpty = function() {
  return this.items.length ? false : true
}
Stack.prototype.size = function() {
  return this.items.length
}
Stack.prototype.clear = function() {
  this.items = []
}
