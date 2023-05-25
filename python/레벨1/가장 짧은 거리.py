def solution(s):
    answer = []
    m = max(s)
    index = 0
    for i in range(len(s)-1):
        if m > s[i+1]-s[i]:
            m = s[i+1]-s[i]
            index = i

    answer = [s[index],s[index+1]]
    print(answer)
    return answer

import math
def solution2(s):
    answer = []
    ss = s[1:]
    answer = sorted(list(zip(s,ss)),key=lambda i: (i[1]-i[0]))[0]
    
    print(answer)
    return answer


solution2([1,3,4,8,13,17,20])