function solution(food) {
  let answer = "";
  food.forEach((item, idx) => {
    answer += idx.toString().repeat(Math.floor(item / 2));
  });
  answer += "0" + answer.split("").reverse().join("");
  return answer;
}
