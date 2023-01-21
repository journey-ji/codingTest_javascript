function solution(k, tangerine) {
    let answer = 0;
    let res = []
    tangerine.sort((a,b)=>a-b)
    let cnt= 0;
    for(let i=0; i<tangerine.length-1;i++){
        cnt++
        if(tangerine[i]!==tangerine[i+1]){
            res.push(cnt)
            cnt=0
        }
    }
    res.push(++cnt)
    res.sort((a,b)=>b-a)
    for(let i=0; i<res.length;i++){
        k-=res[i]
        answer++
        if(k<=0) break
    }
    return answer;
}