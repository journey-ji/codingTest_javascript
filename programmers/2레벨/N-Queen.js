function solution(n) {
    let answer = 0;
    let col = Array(n).fill(false)
    const recur = (num)=>{
        if(num===n){
            answer++
            return
        }
        for(let i=0; i<n;i++){
            let found = false
            col[num] = i
            for(let j=0;j<num;j++){
                if(col[j]===col[num] || col[num]===col[j]+(num-j) || col[num]===col[j]-(num-j)){
                    found = true
                    break;
                }
            }
            if(!found){
                recur(num+1)    
            }
            col[num]= false
        }
        return
    }
    recur(0)
    return answer;
}