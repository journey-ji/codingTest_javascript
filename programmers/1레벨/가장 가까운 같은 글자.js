function solution(s) {
  let answer = [];
  let temp = {};
  for (let i = 0; i < s.length; i++) {
    if (temp.hasOwnProperty(s[i])) {
      let dist = i - temp[s[i]];
      temp[s[i]] = i;
      answer.push(dist);
    } else {
      temp[s[i]] = i;
      answer.push(-1);
    }
  }

  return answer;
}
