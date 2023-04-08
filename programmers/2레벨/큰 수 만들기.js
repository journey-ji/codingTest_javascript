
// "4177252841"	4	"775841"
function solution(number, k) {
  let answer = "";
  number = number.split("");
  let count = 0;
  for (let i = 0; i < k; i++) {
    console.log(`요소 삭제 전 number : ${number}`); //:)
    let preIdx = 0;
    let pre = number[preIdx];
    for (let j = 1; j < number.length; j++) {
      let cur = number[j];
      if (pre < cur) {
        console.log(`삭제 요소 인덱스 : ${preIdx}, 삭제 요소 값 : ${pre}`);
        number.splice(preIdx, 1);
        console.log(`요소 삭제 후 number : ${number}`)
        break;
      } else {
        preIdx++;
        pre = number[preIdx]
      }
    }
  }
  answer = number.join("");
  return answer;
}

function solutioByStack(number, k) {
  let answer = "";
  number = number.split("");
  //  k개 ,, 
  for (let i = 0; i < k; i++) {
    console.log(`요소 삭제 전 number : ${number}`); //:)
    let preIdx = 0;
    let pre = number[preIdx];
    for (let j = 1; j < number.length; j++) {
      let cur = number[j];
      if (pre < cur) {
        console.log(`삭제 요소 인덱스 : ${preIdx}, 삭제 요소 값 : ${pre}`);
        number.splice(preIdx, 1);
        console.log(`요소 삭제 후 number : ${number}`)
        break;
      } else {
        preIdx++;
        pre = number[preIdx]
      }
    }
  }
  
  return answer;
}

// stack
// 4
// 4,1 (4,1비교->유지)
// 4,1,7 (1,7비교 -> 1삭제)
// 4,7 (4,7비교 ->4 삭제)
// 7
// 7,7 (7,7비교 ->유지)
// 7,7,2 (7,2비교->유지)
// 7,7,2,5(2,5비교 ->2삭제)
// 7,7,5
// 배열대신 스택사용하면 속도줄일 수 있을 것 같아.
// 힝 머리아파 그만할래 ,,, 
// ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ
// 근데 스택쓰면 진짜 될 것 같아
// 스택쓰라고 만든 문제같아 
// 와 창언쓰 쩐다 머리
// 개똑똑해 :)
// 빨리 이제 커밋해 선아쓰
// 





// "4177252841"	4	"775841"
// 이 입출력을 보면 알 수 있지
// 작은수부터 삭제해야하지만, 기존 수의 정렬은 유지해야해
//
// 2레벨 수준 왜이래 ~~~ 구러니꺄아 ~~~
// 1. 첫 수 저장 (저장배열 answer)
// 2. 저장값과 다음 값 비교
// 3-1. 다음값이 작으면 continue (4,1)
// 3-2. 다음값이 더 크면 (이전 저장값 삭제. 단, 삭제 개수 합 = k개)
//
// 있지
// 뇌가 굳어버렸어
// 근데 어떻게 풀어야할지는 알 것 같아
// 코드가 안나와
// 위에 써둔 수도 코드?
// 응 저 느낌으로 가면 될 것 같아
// 4177252841
// -> 기준값 4 : 비교값1 -> 비교결과 = 넘어감
// -> 기준값 1 : 비교값7 -> 비교결과 = 기준값 1 삭제
// -> 기준값 4(이전과정에서 기준값이 삭제되면 기준값은 처음부터 다시 시작) : 비교값 7 -> 기준값 4 삭제

// 흠................
function solution창언(number, k) {
  let answer = [];
  let count = 0;
  for (let i = 0; i < number.length; i++) {
    let pre = number[0];
    answer.push(pre);

    for (let j = i + 1; j < j + 1; j++) {
      if (number[j]) {
        let cur = number[j];
        if (pre < cur) {
          pre = cur;
          answer.pop();
          count++;
          if (count === k) return;
        }
      }
    }
  }
  return answer.join("");
}

// 야호 안녕

/**
 * 환영해요 ~ :)
 * ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ 녱~!
 * 자 문제부터 읽어봐 
 * 읽었어!!!!!!
 * 어떻게 풀거야 ?
 * 
 * 난 배열로 바꿔서 sort 한 다음에 pop이나 splice 써서 없애고 다시 문자열로 만들 거 같아
 * 오호 가장 작은 k개의 숫자를 pop한다는거지 ?
 * 맞아맞아!!!
 * 좋아 일단 그렇게 해보자
 * 선아쓰 프로그래밍해 !
 * 창언쓰는?
 * 나는 지켜봐줄게 :)
 * ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ 뀨우랭
 * 
 * 어떤 숫자에서 k개의 수를 제거했을 때 얻을 수 있는 가장 큰 숫자를 구하려 합니다.

예를 들어, 숫자 1924에서 수 두 개를 제거하면 [19, 12, 14, 92, 94, 24] 를 만들 수 있습니다. 이 중 가장 큰 숫자는 94 입니다.

문자열 형식으로 숫자 number와 제거할 수의 개수 k가 solution 함수의 매개변수로 주어집니다. number에서 k 개의 수를 제거했을 때 만들 수 있는 수 중 가장 큰 숫자를 문자열 형태로 return 하도록 solution 함수를 완성하세요.


입출력 예시
number	k	return
"1924"	2	"94"
"1231234"	3	"3234"
"4177252841"	4	"775841"



 */
