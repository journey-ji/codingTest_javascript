function solution(citations) {
    let answer = 0;
    citations.sort((a,b)=>b-a)
    console.log(citations)
    for(let i=citations[0];i>=0;i--){
        answer= i;
        let cnt = 0;
        for(let j = 0;j<citations.length;j++){
            if(citations[j]<i) break;
            else cnt++;
        }
        if(cnt>=answer) return answer;
    }
    return answer;
}

function solution2(citations) {
    citations = citations.sort((a,b)=>b-a);
    var i = 0;
    while(i + 1 <= citations[i]){
        i++;
    }
    return i;
    
}