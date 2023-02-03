function solution(skill, skill_trees) {
    let answer = 0;
    
    skill_trees.forEach(item=>{
        let temp = skill.split('')
        let isOk = true;
        item = item.split('')
        for(let i=0; i<item.length;i++){
            if(temp.indexOf(item[i])>0){
                isOk = false;
                break;
            }else if (temp.indexOf(item[i])===0){
                temp.shift()
            }
        }
        if(isOk){
            answer++;
        }
            
        })
    
    return answer;
}