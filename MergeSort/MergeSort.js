function mergeSort(array) {
  let len = array.length
  if(len == 1 || len == 0) return array
  let m = (len / 2)
  let arr1 = array.slice(0,m)
  let arr2 = array.slice(m)
  return merge(mergeSort(arr1),mergeSort(arr2))
}

function merge(arr1,arr2) {
  let arr = []
  let n = 0
  let m = 0
  while(m !== arr2.length && n !== arr1.length) {
    if (arr1[n] > arr2[m]) {
      arr.push(arr2[m])
      m++
    } else {
      arr.push(arr1[n])
      n++
    }
  }
  if(n === arr1.length) {
    return arr.concat(arr2.slice(m))
  } else {
    return arr.concat(arr1.slice(n))
  }
}
let array = [9,1,7,6,5,4]
console.log(mergeSort(array));