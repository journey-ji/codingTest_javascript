function solution(A, B) {
  let answer = 0;
  A.sort((a, b) => b - a);
  B.sort((a, b) => a - b);

  for (let i = 0; i < A.length; i++) {
    let max = B.length - 1;
    if (A[i] < B[max]) {
      answer++;
      B.pop();
    }
  }
  return answer;
}
/**
 * 그리디 문제
 * 
 */
