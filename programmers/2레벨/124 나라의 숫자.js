function solution(n) {
  let answer = "";
  while (n > 0) {
    let temp = n % 3;
    if (temp === 0) {
      answer = "4" + answer;
      n = Math.floor(n / 3) - 1;
    } else if (temp === 1) {
      answer = "1" + answer;
      n = n > 3 ? Math.floor(n / 3) : 0;
    } else if (temp === 2) {
      answer = "2" + answer;
      n = n > 3 ? Math.floor(n / 3) : 0;
    }
  }
  return answer;
}
