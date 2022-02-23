function swapAarryElement(array,i,j) {
  let temp = array[i]
  array[i] = array[j]
  array[j] = temp
}
function BubbleSort(array) {
  let len = array.length
  for(let i = 0; i < len; i++) {
    for(let j = i + 1; j < len; j++) {
      if(array[i] > array[j]) swapAarryElement(array, i , j)
    }
  }
}

const arr = [5,4,3,2,1,6]

BubbleSort(arr)

console.log(arr);