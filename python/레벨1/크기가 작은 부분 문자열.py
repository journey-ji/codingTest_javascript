def solution(t, p):
    answer = 0
    strLength = len(p)
    for idx in range(len(t)-(strLength-1)):
        if(int(p)>=int(t[idx:idx+strLength])):
            
            answer+=1
    return answer