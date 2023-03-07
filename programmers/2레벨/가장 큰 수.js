function solution(numbers) {
  let answer = numbers.map((ele) => ele + "");
  answer = answer.sort((a, b) => b + a - (a + b)).join("");
  return answer[0] === "0" ? "0" : answer;
}
