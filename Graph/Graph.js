
const Queue = require('../Queue/Queue')

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

// 枚举颜色
const Colors = {
  WHITE: 0,
  GREY: 1,
  BLACK: 2
}
// 初始化顶点颜色
const initializeColor = (vertices) => {
  const colors = {}
  vertices.map(vertex => {
    colors[vertex] = Colors.WHITE
  })
  return colors
}

const breadthFirstSearch = (graph,startVertex,cb) => {
  let vertices = graph.getVertices() // 获取顶点列表
  let adjList = graph.getAdjList() // 获取邻接表
  const colors = initializeColor(vertices) // init vertices color
  let queue = new Queue() // 创建队列
  colors[startVertex] = Colors.GREY // 将起始点颜色修改成灰色
  queue.enqueue(startVertex) // 起始点入队
  while(!queue.isEmpty()) {
    let u = queue.dequeue() // 弹出队列首元素
    let neighbors = adjList.get(u)
    for(let i = 0; i < neighbors.length; i++) { // 检查队列首元素相邻边
      if(colors[neighbors[i]] === Colors.WHITE) { // 如果未被访问 则入队
        colors[neighbors[i]] = Colors.GREY
        queue.enqueue(neighbors[i])
      }
    }
    colors[u] = Colors.BLACK // 探索完毕，修改顶点为黑色
    cb && cb(u) // 执行回调
  }
}

const BFS = (graph,startVertex) => {
  let vertices = graph.vertices
  let adjList = graph.adjList
  let colors = initializeColor(vertices)
  let queue = new Queue()
  const distances = {} // 距离起点的距离
  const predecessors = {} // 保存前溯点

  colors[startVertex] = Colors.GREY
  queue.enqueue(startVertex)

  vertices.map(v => { // init distances | predecessors
    distances[v] = 0
    predecessors[v] = null
  })

  while(!queue.isEmpty()) {
    let u = queue.dequeue()
    let neighbors = adjList.get(u)
    neighbors.map(vertex => {
      if(colors[vertex] === Colors.WHITE) {
        colors[vertex] = Colors.GREY
        distances[vertex] = distances[u] + 1
        predecessors[vertex] = u
        queue.enqueue(vertex)
      }
    })
    colors[u] = Colors.BLACK // 探索完毕，修改顶点为黑色
  }
  return {
    distances,
    predecessors
  }
}

const shortestPath = (graph,v,w) => {
  let result = BFS(graph,v)
  let shortestDistance = result.distances[w]
  let final = w
  let path = `${final}`
  for(let i = 0; i < shortestDistance; i++) {
    final = result.predecessors[final]
    path = `${final} -> ` + path
  }
  return path
}

const depthFirstSearchVisit = (vertex,colors,adjList,cb) => {
  if(colors[vertex] === Colors.WHITE) {
      colors[vertex] = Colors.GREY
      cb && cb(vertex)
      let neighbors = adjList.get(vertex)
      neighbors.map(v => {
          depthFirstSearchVisit(v,colors,adjList,cb)
      })
      colors[vertex] = Colors.BLACK
  }
}

const depthFirstSearch = (graph,cb) => {
  const vertices = graph.vertices
  const adjList = graph.adjList
  const colors = initializeColor(vertices)
  
  depthFirstSearchVisit(vertices[0],colors,adjList,cb)
}

// ------------- TEST Sample
const graph = new Graph()
const vertices = ["A","B","C","D","E","F","G","H","I"]
vertices.map(v => {
  graph.addVertex(v)
})
graph.addEdge('A','B')
graph.addEdge('A','C')
graph.addEdge('A','D')
graph.addEdge('C','D')
graph.addEdge('C','G')
graph.addEdge('D','G')
graph.addEdge('D','H')
graph.addEdge('B','E')
graph.addEdge('B','F')
graph.addEdge('E','I')
// breadthFirstSearch(graph,"A",(v) => {
//   console.log(v);
// })

// vertices.map(v => {
//   console.log(shortestPath(graph,'A',v));
// })
// -------------------

depthFirstSearch(graph,(v) => {
  console.log(v+'->');
})


