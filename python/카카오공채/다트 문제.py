def solution(dartResult):
    answer = []
    for num, i in enumerate(dartResult,1):
        if i =='S':
            answer[-1] **=1
        elif i =="D":
            answer[-1] **=2
        elif i =="T":
            answer[-1] **=3
        elif i =="*":
            answer[-1] *=2
            if len(answer)>=2:
                answer[-2] *=2
        elif i =="#":
            answer[-1] *=-1
        else:
            if dartResult[num-1:num+1] =='10':
              answer.append(10)
            elif dartResult[num-2:num] !='10':
                answer.append(int(i))
                
    print(answer)
    return answer


solution("1S2D*10T")

# stk 사용하기 ? 
import re
def solution2(dartResult):
    answer = []
    pattern = re.compile(r'([0-9]|10)([SDT])([\*\#]?)')
    print(pattern.findall(dartResult))
    계산식 = {
        'S':lambda 값:값,
        'D':lambda 값:값**2,
        'T':lambda 값:값**3,
    }
    

    for 숫자, 승수, 상 in pattern.findall(dartResult):
      if 승수 =='S':
          점수 = 계산식['S'](int(숫자))
      elif 승수 =="D":
          점수 = 계산식['D'](int(숫자))
      elif 승수 =="T":
          점수 = 계산식['T'](int(숫자))
      if 상 =="*":
          점수 *=2
          if answer:
              answer[-1] *=2
      elif 상 =="#":
          점수 *=-1
      answer.append(점수)
    print(answer)
    return 0



solution2("1S2D*10T")