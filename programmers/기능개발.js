function solution(progresses, speeds) {
  let answer = [];
  let stk = [];
  while(progresses.length>0){
      stk.push(progresses.shift());
      let speed = speeds.shift();
      progresses.map((ele,idx)=>{
          return progresses[idx] += Math.ceil((100-stk[0])/speed) * speeds[idx];
      })
      console.log(progresses)
      while(progresses[0]>=100){
          stk.push(progresses.shift())
          speeds.shift()
      }
      console.log(progresses)
      answer.push(stk.length)
      stk = null
      stk = [];
  }
  return answer;
}