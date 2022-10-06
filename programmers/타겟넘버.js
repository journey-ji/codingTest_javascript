function solution(numbers, target) {
  var answer = 0;
  let chk=0;
  function dfs(n){
      if(n === numbers.length){
          if (chk===target) answer ++;
          return
      }
      chk +=numbers[n]
      dfs(n+1)
      chk -=numbers[n]*2
      dfs(n+1)
      chk +=numbers[n]
  }
  dfs(0)
  return answer;
}