# JavaScript数据结构之图

### 图的相关术语

下图表示一个图：
![img](./1.png)

* **相邻顶点** ： 由一条边连接在一起的顶点称为相邻顶点。比如，A和B是相邻的，A和D是相邻的，A和C是相邻的，A和E不是相邻的。
* **度** ： 一个顶点的度是其相邻顶点的数量。比如，A和其他三个顶点相连接，因此A的度为3; E和其他两个顶点相连，因此E的度为2。
* **路径** ： 路径是顶点v 1, v2,…, vk的一个连续序列，其中vi和vi+1是相邻的。以上一示意图中的图为例，其中包含路径A B E I和A C D G。
* **简单路径** ： 简单路径要求不包含重复的顶点。举个例子，A D G是一条简单路径。除去最后一个顶点（因为它和第一个顶点是同一个顶点），环也是一个简单路径，比如A D C A（最后一个顶点重新回到A）。
* **无环｜连通** ： 如果图中不存在环，则称该图是无环的。如果图中每两个顶点间都存在路径，则该图是连通的。
* **有向图和无向图** ： 图可以是无向的（边没有方向）或是有向的（有向图）。如下图所示，有向图的边有一个方向。
![img](./2.png)
* **强连通** ：如果图中每两个顶点间在双向上都存在路径，则该图是强连通的。例如，C和D是强连通的，而A和B不是强连通的。
* **权** ： 图还可以是未加权的（目前为止我们看到的图都是未加权的）或是加权的。如下图所示，加权图的边被赋予了权值。
![img](./3.png)

### 图的表示方式
1. **邻接矩阵**
2. **邻接表**
3. **关联矩阵**
### 创建Graph类
```js
Class Graph{
    constructor(isDirected = false) {
        this.isDirected = isDirected // 是否有向
        this.vertices = [] // 顶点列表
        this.adjList = new Map() // 用 Map 对象保存邻接表
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
```

### 图的遍历

#### 广度优先遍历
#### 深度优先遍历