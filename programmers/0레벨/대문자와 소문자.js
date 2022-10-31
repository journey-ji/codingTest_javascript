function solution(my_string) {
  return my_string.split('').map(ele=>{
      return ele=== ele.toUpperCase()? ele.toLowerCase():ele.toUpperCase()
  }).join('')
}