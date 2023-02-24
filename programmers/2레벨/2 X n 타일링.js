function solution(n) {
  let solList = Array(n + 1).fill(0);
  solList[1] = 1;
  solList[2] = 2;

  for (let i = 3; i <= n; i++) {
    let temp = solList[i - 1] + solList[i - 2];
    solList[i] = temp % 1000000007;
  }
  return solList[n];
}
