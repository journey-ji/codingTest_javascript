function solution(rsp) {
  let temp = [2,0,5]
  return rsp.split('').map(ele=>temp[(temp.indexOf(parseInt(ele))+1)%3]).join('')
}