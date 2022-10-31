function solution(my_string) {
  let temp = new RegExp(/[aeiou]/g)
  return my_string.replace(temp,'')
  
}