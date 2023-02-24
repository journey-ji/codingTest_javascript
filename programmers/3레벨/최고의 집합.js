function solution(n, s) {
  let answer = [];
  let cnt = n;
  let rest = s;
  while (answer.length < n) {
    let ele = Math.floor(rest / cnt);
    rest -= ele;
    if (ele <= 0) return [-1];
    answer.push(ele);
    cnt--;
  }
  return answer;
}
/**
 * 수학개념접근
 */
