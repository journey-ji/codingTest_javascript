function solution(land) {
  let answer = 0;
  for (let i = 1; i < land.length; i++) {
    for (let j = 0; j < land[i].length; j++) {
      let maxNum = Math.max(...land[i - 1].filter((val, idx) => idx !== j));
      land[i][j] += maxNum;
      if (answer < land[i][j]) {
        answer = land[i][j];
      }
    }
  }
  return answer;
}
