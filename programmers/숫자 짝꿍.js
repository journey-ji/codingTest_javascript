function solution(X, Y) {
  let result = ''
  X = X.split('')
  Y = Y.split('')
  for(let i=9;i >=0;i--){
      let cnt_X = X.filter(e=>parseInt(e)===i).length
      let cnt_Y = Y.filter(e=>parseInt(e)===i).length
      result+=String(i).repeat(Math.min(cnt_X, cnt_Y))
  }
  return result.length===0 ? "-1": result[0]==='0'? "0" : result
  
}