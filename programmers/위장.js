function solution(clothes) {
  let answer = 1;
  let hash={}
  for(let i =0; i<clothes.length;i++){
      if(clothes[i][1] in hash){
          hash[clothes[i][1]].push(clothes[i][0])
      }else {
          hash[clothes[i][1]] = [];
          hash[clothes[i][1]].push(clothes[i][0])
      }
  }
  
  for(x in hash){
      answer *= hash[x].length+1
  }
  return answer-1;
}