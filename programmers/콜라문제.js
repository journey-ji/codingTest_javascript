function solution(a, b, n) {
  let answer = 0;
  let temp =0;
  while(n>=a){
      temp = n%a
      n = Math.floor(n/a)*b
      answer += n
      n +=temp
  }
  return answer;
}