function solution(k, dungeons) {
  let answer = 0;
  let max_ans = 0;
  let visited = Array.from({length:dungeons.length},()=>0)
  function dfs(k,n){
      if(answer>max_ans) max_ans = answer
      for(let i=0; i<dungeons.length;i++){
          if(visited[i]===0 && k>= dungeons[i][0]){
              answer ++
              visited[i]=1
              dfs(k-dungeons[i][1],n+1)
              answer --
              visited[i]=0
          }
      }
  }
  dfs(k,0)
  return max_ans;
}