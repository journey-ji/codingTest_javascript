function solution(record) {
    let answer = [];
    let user_id ={};
    record.forEach((ele,idx)=>{
    let temp = ele.split(' ');
        if(temp[0]==='Enter'){
            if(! user_id.hasOwnProperty(temp[1])){
                user_id[temp[1]] = temp[2];
                answer.push([temp[1],'님이 들어왔습니다.']);
            }
            else{
                user_id[temp[1]] = temp[2];
                answer.push([temp[1],'님이 들어왔습니다.']);
            }
        }else if(temp[0]==='Change'){
            user_id[temp[1]] = temp[2];
        }else{
            answer.push([temp[1],'님이 나갔습니다.']);
        }
    });
    for(let i=0; i<answer.length;i++){
        answer[i] = user_id[answer[i][0]]+answer[i][1];
    }
    return answer;
}
function solution2(record){
    let answer = [];
    let user_id ={};
    record.forEach((ele,idx)=>{
    let [동작,아이디,닉네임] = ele.split(' ');
        if(동작==='Enter'){
            if(! user_id.hasOwnProperty(아이디)){
                user_id[아이디] = 닉네임;
                answer.push([아이디,'님이 들어왔습니다.']);
            }
            else{
                user_id[아이디] = 닉네임;
                answer.push([아이디,'님이 들어왔습니다.']);
            }
        }else if(동작==='Change'){
            user_id[아이디] = 닉네임;
        }else{
            answer.push([아이디,'님이 나갔습니다.']);
        }
    });
    for(let i=0; i<answer.length;i++){
        answer[i] = user_id[answer[i][0]]+answer[i][1];
    }
    return answer;
}
console.log(solution2([
    "Enter uid1234 Muzi",
    "Enter uid4567 Prodo",
    "Leave uid1234",
    "Enter uid1234 Prodo",
    "Change uid4567 Ryan",
]))