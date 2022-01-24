
const  array = [5,4,3,9,6,8,2,10,1]
const quickSort = (array) => {
  if(array.length < 2) return array
  const base = array.pop(),l = [], r = []
  array.map(a => {
    if(a < base) l.push(a)
    if(a >= base) r.push(a)
  })
  return [...quickSort(l) ,base,...quickSort(r)]
}
console.log(quickSort(array));