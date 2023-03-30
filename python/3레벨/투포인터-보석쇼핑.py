def solution(gems):
    N = len(gems)
    answer = [0, N-1]
    kind = set(gems)
    s,e = 0,0 
    while 0<=s<N and 0<=e<N:
        if set(gems[s:e+1]) == kind:
            if (e-s+1) < (answer[1]-answer[0]+1):
                answer = [s,e]
            s += 1
        else: 
            e += 1
    answer[0] += 1
    answer[1] += 1
    return answer