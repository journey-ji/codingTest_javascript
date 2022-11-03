// 입력
// 5

// 출력
//     *
//    ***
//   *****
//  *******
// *********


// 위의 조건에 맞는 프로그램을 작성하시오

function solution(n){
  for(let i=0;i <n;i++){
    console.log(" ".repeat(n-i)+'*'.repeat((i*2)+1))
  }
}
solution(5)