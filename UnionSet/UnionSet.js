class UnionSet {
  constructor(n) {
    this.father = {}
    for(let i = 1; i < n+1; i++) {
      this.father[i] = i
    }
  }
  find(x) {
    if(this.father[x] === x) return this.father[x]
    this.father[x] = this.find(this.father[x])
    return this.father[x]
  }
  merge(a,b) {
    this.father[this.find(b)] = this.find(a)
  }
}

const unionset = new UnionSet(7)

const edges = [[1,2],[1,3],[4,5],[4,6],[5,7]]

// TEST SAMPLE =================>>>>>>>>>>>>
// edges.map(edge => {
//   unionset.merge(edge[0],edge[1])
// })
// console.log(unionset);
// unionset.merge(unionset.find(3),unionset.find(7))
// console.log(unionset);
// console.log(unionset.find(7));
// console.log(unionset);