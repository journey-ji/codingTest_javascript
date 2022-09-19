function solution(s) {
    let answer = 0;
    let temp =''
    function chk(str){
        let stk=[]
        for(x of str){
            if(x==='(' || x==='{' || x ==='[') stk.push(x)
            else{
                if(x===')' && stk[stk.length-1]==='(') stk.pop()
                else if(x===']' && stk[stk.length-1]==='[') stk.pop()
                else if(x==='}' && stk[stk.length-1]==='{') stk.pop()
                else return false
            }
        }
        return stk.length?false:true
    }
    for(let i=0; i<s.length;i++){
        temp = s.substr(i)+s.substr(0,i)
        if(chk(temp)){
            answer++  
        } 
    }
    return answer;
}