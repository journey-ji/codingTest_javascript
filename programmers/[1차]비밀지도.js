
function solution(n, arr1, arr2) {
    let answer = [];
    for(let i=0; i<n;i++){
        arr1[i]= arr1[i].toString(2);
        arr1[i]= '0'.repeat(n-arr1[i].length)+arr1[i];
        arr2[i]= arr2[i].toString(2);
        arr2[i]= '0'.repeat(n-arr2[i].length)+arr2[i];
    }
    for(let i=0;i<n;i++){
        let temp ='';
        for(let j=0;j<n;j++){
            if(arr1[i][j]==='1' || arr2[i][j]==='1') temp +='#'
            else temp+= ' '
        }
        answer.push(temp);
    }
    return answer;
}

// 비트연산자와 정규표현식 이용하기
function solution2(n,arr1,arr2) {
    let answer = [];
    const zip = (a,b) => a.map((v,i)=>[v,b[i]])
    for([i,j] of zip(arr1,arr2)){
        answer.push((i|j).toString(2).padStart(n,'0').replace(/1/g,'#').replace(/0/g,' '))
    }
    return answer;
}
console.log(solution2(5,[9,20,28,18,11],[30,1,21,17,28]))
// 1 0 1 0 1 ,
// 1 1 1 0 0 
