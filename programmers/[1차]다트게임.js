function solution(dartResult) {
    let answer = 0;
    let pre =0;
    let pre_pre=0;
    for(let i=0;i<dartResult.length;i++){
        if(dartResult[i]==='*'){
            answer += pre
            answer += pre_pre
            pre = pre*2
            pre_pre= pre_pre*2
        }else if(dartResult[i]==='#'){
            answer -=pre*2
            pre = -pre
            pre_pre = -pre_pre
        }
        else{
            let num=0;
            if(dartResult[i]+dartResult[i+1] ==='10'){
                num = 10;
                i++;
            }else{
                num = parseInt(dartResult[i]);
            }
            pre_pre= pre
            if(dartResult[i+1]==='S'){
                answer += num
                pre = num
            }else if(dartResult[i+1]==='D'){
                answer += Math.pow(num,2)
                pre = Math.pow(num,2)
            }else{
                answer += Math.pow(num,3)
                pre = Math.pow(num,3)
            }
            if(dartResult=='*'){
            answer +=pre
            }
            i++
        }
    }
    return answer;
}
// 정규표현식 이용하기 ! 
// dartResult.match(/([0-9]|10)(SDT)([\*\#]?)/g)

function solution2(dartResult) {
    let answer = 0;
    let temp = dartResult.match(/([0-9]|10)(SDT)([\*\#]?)/g).map((item)=>{
        return parseInt(item[0])
    })
    
    return temp;
}

console.log(solution2('1S2D*3T'))