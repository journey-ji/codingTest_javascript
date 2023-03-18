function solution(n, works) {
    let answer = 0;
    works.sort((a,b)=>b-a)
    let cur = 0;
    for(let i=0; i<n;i++){
        works[cur]--;
        if(works[cur]<works[cur+1]){
            cur ++;
        }else{
            cur = 0;
        }
    }
    answer = works.reduce((acc,cur)=>{
        if(cur>0){
            return acc+Math.pow(cur,2)
        }
        return acc
    },0)
    return answer;
}