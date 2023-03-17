function solution(want, number, discount) {
    let answer = 0;
    let itemList = new Object();
    want.forEach((item,idx)=>{
        itemList[item] = number[idx];
    })
    let temp = {...itemList}
    
    for(let left = 0;left<=discount.length-10;left++){
            // left 시작할때 빼고 
        let isStop = false;
        itemList={...temp}
        if(itemList.hasOwnProperty(discount[left])){
            // 존재한다
            itemList[discount[left]] -= 1;
            
            for(let right=left+1;right<left+10;right++){
                if(itemList.hasOwnProperty(discount[right])&& itemList[discount[right]]>0){
                    // right가 존재하고 줄일 카운트가 있으면
                    itemList[discount[right]] -=1;
                    
                }else{
                    // right가 존재하지 않으면
                    isStop = true;
                    break;
                }
            }
            // 10개 정상적으로 끝나면
            if(!isStop){
                answer++;    
            }
            
            
        }else{
            // 좌측 포인트에 값이 없으면 다음포인트부터 다시시작
            continue;
        }   
    }
    
    return answer;
}