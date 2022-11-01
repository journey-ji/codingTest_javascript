let inputs = [5,10,66,77,54,32,11,15]
let result = []

let inputs_length = inputs.length

function findInputIndex(sortedArr,inputValue){
  for(let i in sortedArr){
    if(inputValue < sortedArr[i]) return i
  }
  return sortedArr.length
}
for(let i=0;i <inputs_length;i++){
  let temp = inputs.shift()
  let idx = findInputIndex(result,temp)
  result.splice(idx,0,temp)
}
console.log(result)