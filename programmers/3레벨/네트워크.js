function solution(n, computers) {
  let answer = 0;
  let visited = Array(n).fill(false);

  const dfs = (step) => {
    visited[step] = true;
    for (let i = 0; i < n; i++) {
      if (computers[step][i] && !visited[i]) {
        dfs(i);
      }
    }
  };

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      dfs(i);
      answer++;
    }
  }
  return answer;
}
