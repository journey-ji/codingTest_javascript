def solution(k, m, score):
    answer = 0
    score.sort()
    score.reverse()
    currentCnt = 0
    currentMin = 10000
    for i in range(len(score)):
        currentCnt +=1
        if(currentCnt>m):
            currentCnt = 1
            currentMin = score[i]
            continue
        else:
            if(currentMin>score[i]):
                currentMin = score[i]
        if(currentCnt==m):
            answer += currentMin*m
            currentMin = 10000
        
    return answer