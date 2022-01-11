class Graph{
  constructor(isDirected = false) {
    this.isDirected = isDirected // 是否有向
    this.vertices = [] // 储存顶点
    this.adjList = new Map() // 邻接表 储存顶点的相邻顶点
  }
  // 添加顶点
  addVertex(v) {
    if(!this.vertices.includes(v)) {
      this.vertices.push(v)
      this.adjList.set(v,[])
    }
  }
  // 连接顶点
  addEdge(v,w) {
    if(!this.adjList.get(v)) { // 判断是否存在v顶点
      this.addVertex(v) // 不存在则创建
    }
    if(!this.adjList.get(w)) { // 判断是否存在w顶点
      this.addVertex(w) // 不存在则创建
    }
    this.adjList.get(v).push(w) // 将w放入v的相邻顶点中
    if(!this.isDirected)  { // 如果是无向图
      this.adjList.get(w).push(v) // 则同时需要将v放入w的相邻顶点中
    }
  }
  // 获取顶点
  getVertices() {
    return this.vertices
  }
  // 获取顶点邻接表
  getAdjList() {
    return this.adjList
  }
  // toString 返回图
  // A -> B C D
  // B -> A C
  // C -> A B
  // D -> A
  toString() {
    let s = ''
    for(let i = 0; i < this.vertices.length; i++) {
      s = s + `${this.vertices[i]} ->`
      this.adjList.get(this.vertices[i]).map(vertex => {
        s = s + ` ${vertex}`
      })
      s = s + '\n'
    }
    return s
  }
}